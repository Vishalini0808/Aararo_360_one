import { useState } from 'react';

export default function VaccinationSection() {
  const [vaccinations, setVaccinations] = useState([
    { id: 1, name: 'Hepatitis B', age: 'Birth', status: true },
    { id: 2, name: 'DTaP (Diphtheria, Tetanus, Pertussis)', age: '2 months', status: true },
    { id: 3, name: 'Hib (Haemophilus influenzae type b)', age: '2 months', status: true },
    { id: 4, name: 'IPV (Polio)', age: '2 months', status: true },
    { id: 5, name: 'PCV (Pneumococcal)', age: '2 months', status: true },
    { id: 6, name: 'Rotavirus', age: '2 months', status: true },
    { id: 7, name: 'DTaP (2nd dose)', age: '4 months', status: true },
    { id: 8, name: 'Hib (2nd dose)', age: '4 months', status: true },
    { id: 9, name: 'IPV (2nd dose)', age: '4 months', status: true },
    { id: 10, name: 'PCV (2nd dose)', age: '4 months', status: true },
    { id: 11, name: 'Rotavirus (2nd dose)', age: '4 months', status: true },
    { id: 12, name: 'DTaP (3rd dose)', age: '6 months', status: true },
    { id: 13, name: 'Hib (3rd dose)', age: '6 months', status: true },
    { id: 14, name: 'IPV (3rd dose)', age: '6 months', status: true },
    { id: 15, name: 'PCV (3rd dose)', age: '6 months', status: true },
    { id: 16, name: 'Rotavirus (3rd dose)', age: '6 months', status: true },
    { id: 17, name: 'Influenza (Flu)', age: '6 months', status: true },
    { id: 18, name: 'Hepatitis B (2nd dose)', age: '6 months', status: true },
    { id: 19, name: 'MMR (Measles, Mumps, Rubella)', age: '12 months', status: false },
    { id: 20, name: 'Varicella (Chickenpox)', age: '12 months', status: false },
    { id: 21, name: 'Hepatitis A', age: '12 months', status: false },
    { id: 22, name: 'Hib (4th dose)', age: '12-15 months', status: false },
    { id: 23, name: 'PCV (4th dose)', age: '12-15 months', status: false },
    { id: 24, name: 'DTaP (4th dose)', age: '15-18 months', status: false }
  ]);

  const toggleVaccination = (id) => {
    setVaccinations(vaccinations.map(vax =>
      vax.id === id ? { ...vax, status: !vax.status } : vax
    ));
  };

  const completedCount = vaccinations.filter(v => v.status).length;
  const totalCount = vaccinations.length;
  const progressPercentage = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8 animate-fadeIn">
      <div className="text-center mb-8">
        <h2 className="text-[#FF6EA6] text-2xl font-bold mb-2">Vaccination Schedule</h2>
        <p className="text-gray-600">Keep track of your baby's immunizations 💉</p>
      </div>

      {/* Progress Overview */}
      <div className="bg-gradient-to-br from-[#FF6EA6]/10 to-[#7C4DFF]/10 rounded-3xl p-8 shadow-lg border-2 border-[#FF6EA6]/20">
        <div className="text-center mb-6">
          <h3 className="text-[#FF6EA6] text-xl font-bold mb-2">Vaccination Progress</h3>
          <p className="text-5xl mb-4 font-bold">{progressPercentage}%</p>
          <p className="text-gray-600">
            {completedCount} of {totalCount} vaccinations completed
          </p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#FF6EA6] to-[#7C4DFF] transition-all duration-500 rounded-full"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Info Message */}
      <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 flex items-start gap-4">
        <div className="text-3xl">💡</div>
        <div>
          <p className="text-blue-900">
            <span className="text-blue-700 font-semibold">Important:</span> Follow your pediatrician's schedule for accurate timelines.
            Vaccination schedules may vary based on your location and your baby's health needs.
          </p>
        </div>
      </div>

      {/* Vaccination Table */}
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-[#FF6EA6] to-[#7C4DFF] text-white">
                <th className="px-6 py-4 text-left font-semibold">Vaccine Name</th>
                <th className="px-6 py-4 text-left font-semibold">Recommended Age</th>
                <th className="px-6 py-4 text-center font-semibold">Status</th>
                <th className="px-6 py-4 text-center font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {vaccinations.map((vax, index) => (
                <tr
                  key={vax.id}
                  className={`
                    border-b border-gray-100 hover:bg-gradient-to-r hover:from-[#FF6EA6]/5 hover:to-[#7C4DFF]/5 transition-all
                    ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}
                  `}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">💉</span>
                      <span className="text-gray-800">{vax.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {vax.age}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`
                      inline-block px-4 py-2 rounded-full text-sm font-medium
                      ${vax.status
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'}
                    `}>
                      {vax.status ? '✓ Completed' : '⏳ Pending'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => toggleVaccination(vax.id)}
                      className={`
                        px-5 py-2 rounded-xl text-sm transition-all duration-300 transform hover:scale-105 font-medium
                        ${vax.status
                          ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          : 'bg-gradient-to-r from-[#FF6EA6] to-[#7C4DFF] text-white hover:shadow-lg'}
                      `}
                    >
                      {vax.status ? 'Mark Pending' : 'Mark Done'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Upcoming Vaccinations */}
      <div className="bg-gradient-to-r from-[#FF6EA6] to-[#7C4DFF] rounded-3xl p-8 text-white shadow-lg">
        <h3 className="text-xl font-bold mb-4">Next Upcoming Vaccinations</h3>
        {vaccinations.find(v => !v.status) ? (
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
            <p className="text-xl mb-2 font-semibold">
              {vaccinations.find(v => !v.status).name}
            </p>
            <p className="text-white/90">
              Recommended at: {vaccinations.find(v => !v.status).age}
            </p>
          </div>
        ) : (
          <p className="text-white/90 text-center py-4">
            All vaccinations up to date! Great job! 🎉
          </p>
        )}
      </div>

      <p className="text-center text-gray-500 italic">
        Protecting your little one, one vaccine at a time 💕
      </p>
    </div>
  );
}