export default function ReportsSection() {
  const reports = [
    {
      period: 'Week 32',
      date: 'Oct 10 - Oct 16, 2025',
      stats: [
        { label: 'Weight Gain', value: '+200g', icon: '🚀', trend: 'up' },
        { label: 'Avg Sleep', value: '14h/day', icon: '😴', trend: 'stable' },
        { label: 'Feeding', value: '8x/day', icon: '👍', trend: 'up' }
      ],
      highlights: [
        'Excellent weight gain this week! 📈',
        'Sleep pattern is very consistent',
        'Started showing interest in solid foods'
      ]
    },
    {
      period: 'Week 31',
      date: 'Oct 3 - Oct 9, 2025',
      stats: [
        { label: 'Weight Gain', value: '+180g', icon: '🚀', trend: 'up' },
        { label: 'Avg Sleep', value: '13.5h/day', icon: '😴', trend: 'down' },
        { label: 'Feeding', value: '7x/day', icon: '👍', trend: 'stable' }
      ],
      highlights: [
        'Great progress overall! 🌟',
        'First tooth appeared!',
        'More active during daytime'
      ]
    },
    {
      period: 'Month 7 Summary',
      date: 'September 2025',
      stats: [
        { label: 'Total Weight Gain', value: '+750g', icon: '⚖️', trend: 'up' },
        { label: 'New Milestones', value: '3', icon: '🎯', trend: 'up' },
        { label: 'Vaccinations', value: '2 completed', icon: '💉', trend: 'stable' }
      ],
      highlights: [
        'Started crawling! 🚼',
        'Can sit independently',
        'Responds to name consistently',
        'Enjoying variety of pureed foods'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8 animate-fadeIn">
      <div className="text-center mb-8">
        <h2 className="text-[#FF6EA6] text-2xl font-bold mb-2">Growth Reports</h2>
        <p className="text-gray-600">Track your baby's journey week by week 📊</p>
      </div>

      <div className="space-y-6">
        {reports.map((report, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-[#FF6EA6] text-xl font-bold">{report.period}</h3>
                <p className="text-gray-500">{report.date}</p>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-gradient-to-r from-[#FF6EA6] to-[#7C4DFF] text-white rounded-xl text-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-medium">
                  Download
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl text-sm hover:bg-gray-200 transition-all font-medium">
                  Share
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {report.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-gradient-to-br from-[#FF6EA6]/10 to-[#7C4DFF]/10 border-2 border-[#FF6EA6]/20"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-3xl">{stat.icon}</span>
                    <span className={`
                      px-3 py-1 rounded-full text-xs font-medium
                      ${stat.trend === 'up' ? 'bg-green-100 text-green-700' :
                        stat.trend === 'down' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-gray-100 text-gray-700'}
                    `}>
                      {stat.trend === 'up' ? '↑ Up' : stat.trend === 'down' ? '↓ Down' : '→ Stable'}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                  <p className="text-2xl text-[#FF6EA6] font-bold">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="bg-gradient-to-br from-[#7C4DFF]/5 to-[#FF6EA6]/5 rounded-2xl p-6">
              <h4 className="text-gray-700 font-bold mb-4">✨ Highlights</h4>
              <ul className="space-y-2">
                {report.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#FF6EA6] mt-1">•</span>
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-[#FF6EA6] to-[#7C4DFF] rounded-3xl p-8 text-center text-white shadow-lg">
        <h3 className="text-xl font-bold mb-4">Want detailed monthly reports?</h3>
        <p className="mb-6 text-white/90">Get comprehensive insights about your baby's development</p>
        <button className="px-8 py-3 bg-white text-[#FF6EA6] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold">
          Generate Monthly Report
        </button>
      </div>

      <p className="text-center text-gray-500 italic">
        Every milestone matters 🌸
      </p>
    </div>
  );
}