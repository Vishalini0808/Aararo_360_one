export default function BabyGrowthSection() {
  const babyData = {
    name: "Emma",
    age: "8 months",
    weight: "8.2 kg",
    height: "68 cm",
    headSize: "44 cm"
  };

  const milestones = [
    { title: "Rolling Over", status: "✓ Completed", age: "4 months", icon: "🔄" },
    { title: "Sitting Up", status: "✓ Completed", age: "6 months", icon: "👶" },
    { title: "Crawling", status: "In Progress", age: "8 months", icon: "🐛" },
    { title: "Standing", status: "Upcoming", age: "10 months", icon: "🚼" }
  ];

  const growthData = [
    { month: "Birth", weight: 3.2 },
    { month: "2m", weight: 4.8 },
    { month: "4m", weight: 6.1 },
    { month: "6m", weight: 7.3 },
    { month: "8m", weight: 8.2 }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8 animate-fadeIn">
      {/* Baby Info Card */}
      <div className="bg-gradient-to-br from-[#FF6EA6]/10 to-[#7C4DFF]/10 rounded-3xl p-8 shadow-lg border-2 border-[#FF6EA6]/20">
        <div className="flex items-center gap-4 mb-6">
          <div className="text-6xl">👶</div>
          <div>
            <h2 className="text-[#FF6EA6] text-2xl font-bold">{babyData.name}</h2>
            <p className="text-gray-600">{babyData.age} old</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-md text-center">
            <div className="text-3xl mb-2">⚖️</div>
            <p className="text-gray-500">Weight</p>
            <p className="text-[#FF6EA6] text-2xl font-bold">{babyData.weight}</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md text-center">
            <div className="text-3xl mb-2">📏</div>
            <p className="text-gray-500">Height</p>
            <p className="text-[#7C4DFF] text-2xl font-bold">{babyData.height}</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md text-center">
            <div className="text-3xl mb-2">🧠</div>
            <p className="text-gray-500">Head Size</p>
            <p className="text-[#FF6EA6] text-2xl font-bold">{babyData.headSize}</p>
          </div>
        </div>
      </div>

      {/* Growth Chart */}
      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <h3 className="text-[#FF6EA6] text-xl font-bold mb-6">Growth Chart</h3>
        <div className="relative h-64">
          <div className="absolute inset-0 flex items-end justify-around pb-8">
            {growthData.map((data, index) => {
              const maxWeight = Math.max(...growthData.map(d => d.weight));
              const height = (data.weight / maxWeight) * 100;
              
              return (
                <div key={index} className="flex flex-col items-center gap-2 flex-1">
                  <div className="text-sm text-[#7C4DFF] mb-1">{data.weight}kg</div>
                  <div
                    className="w-12 bg-gradient-to-t from-[#FF6EA6] to-[#7C4DFF] rounded-t-xl transition-all duration-500 hover:opacity-80"
                    style={{ height: `${height}%` }}
                  ></div>
                  <div className="text-sm text-gray-600 mt-2">{data.month}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Milestones */}
      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <h3 className="text-[#FF6EA6] text-xl font-bold mb-6">Developmental Milestones</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-[#FF6EA6]/5 to-[#7C4DFF]/5 border-2 border-gray-100 hover:border-[#FF6EA6]/30 transition-all"
            >
              <div className="text-4xl">{milestone.icon}</div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800">{milestone.title}</h4>
                <p className="text-gray-500 text-sm">{milestone.age}</p>
              </div>
              <div className={`px-4 py-2 rounded-xl text-sm ${
                milestone.status.includes('Completed')
                  ? 'bg-green-100 text-green-700'
                  : milestone.status.includes('Progress')
                  ? 'bg-yellow-100 text-yellow-700'
                  : 'bg-gray-100 text-gray-500'
              }`}>
                {milestone.status}
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-gray-500 italic">
        Keep your baby's growth journey safe and joyful.
      </p>
    </div>
  );
}