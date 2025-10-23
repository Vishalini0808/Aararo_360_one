import { useState } from 'react';

export default function BabyTrackingSection() {
  const [todayLog] = useState({
    feeding: 8,
    sleep: 14,
    diapers: 6,
    mood: 'happy'
  });

  const activities = [
    {
      icon: '🍼',
      label: 'Feeding',
      value: todayLog.feeding,
      unit: 'times',
      color: 'from-[#FF6EA6] to-[#FF8FB8]'
    },
    {
      icon: '😴',
      label: 'Sleep',
      value: todayLog.sleep,
      unit: 'hours',
      color: 'from-[#7C4DFF] to-[#9D7AFF]'
    },
    {
      icon: '🧷',
      label: 'Diaper Changes',
      value: todayLog.diapers,
      unit: 'times',
      color: 'from-[#FF6EA6] to-[#7C4DFF]'
    }
  ];

  const moodOptions = [
    { emoji: '😊', label: 'Happy', value: 'happy' },
    { emoji: '😴', label: 'Sleepy', value: 'sleepy' },
    { emoji: '😫', label: 'Fussy', value: 'fussy' },
    { emoji: '😄', label: 'Playful', value: 'playful' }
  ];

  const recentEntries = [
    { time: '2:30 PM', activity: 'Fed 120ml formula', emoji: '🍼' },
    { time: '12:45 PM', activity: 'Nap time (2 hours)', emoji: '😴' },
    { time: '11:00 AM', activity: 'Diaper changed', emoji: '🧷' },
    { time: '9:30 AM', activity: 'Playtime', emoji: '🎮' }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8 animate-fadeIn">
      {/* Today's Summary */}
      <div className="text-center mb-8">
        <h2 className="text-[#FF6EA6] text-2xl font-bold mb-2">Today's Summary</h2>
        <p className="text-gray-600">You're doing an amazing job, Mama! 💕</p>
      </div>

      {/* Activity Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="text-center space-y-4">
              <div className="text-6xl mb-2">{activity.icon}</div>
              <h3 className="text-gray-700 font-semibold">{activity.label}</h3>
              <div className={`text-5xl bg-gradient-to-r ${activity.color} bg-clip-text text-transparent font-bold`}>
                {activity.value}
              </div>
              <p className="text-gray-500">{activity.unit}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mood Tracker */}
      <div className="bg-gradient-to-br from-[#FF6EA6]/10 to-[#7C4DFF]/10 rounded-3xl p-8 shadow-lg">
        <h3 className="text-[#FF6EA6] text-xl font-bold mb-6 text-center">Baby's Mood Today</h3>
        <div className="flex justify-center gap-4 flex-wrap">
          {moodOptions.map((mood, index) => (
            <button
              key={index}
              className={`
                flex flex-col items-center gap-2 p-6 rounded-2xl transition-all duration-300
                ${todayLog.mood === mood.value
                  ? 'bg-gradient-to-br from-[#FF6EA6] to-[#7C4DFF] text-white shadow-lg scale-110'
                  : 'bg-white hover:bg-gray-50 text-gray-700'
                }
              `}
            >
              <span className="text-4xl">{mood.emoji}</span>
              <span className="text-sm">{mood.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Entries */}
      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-[#FF6EA6] text-xl font-bold">Recent Entries</h3>
          <button className="px-6 py-3 bg-gradient-to-r from-[#FF6EA6] to-[#7C4DFF] text-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 font-semibold">
            + Add Entry
          </button>
        </div>

        <div className="space-y-3">
          {recentEntries.map((entry, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-[#FF6EA6]/5 to-[#7C4DFF]/5 hover:from-[#FF6EA6]/10 hover:to-[#7C4DFF]/10 transition-all"
            >
              <div className="text-3xl">{entry.emoji}</div>
              <div className="flex-1">
                <p className="text-gray-800 font-medium">{entry.activity}</p>
                <p className="text-gray-500 text-sm">{entry.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <p className="text-gray-500 italic">Track every precious moment 💫</p>
      </div>
    </div>
  );
}