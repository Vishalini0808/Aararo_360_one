import { useState } from 'react';

export default function GrowthCalculatorSection() {
  const [formData, setFormData] = useState({
    ageMonths: '',
    weight: '',
    height: ''
  });

  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const calculateGrowth = () => {
    if (!formData.ageMonths || !formData.weight || !formData.height) {
      alert('Please fill in all fields');
      return;
    }

    // Mock percentile calculation
    const weightPercentile = Math.floor(Math.random() * 30) + 45; // 45-75
    const heightPercentile = Math.floor(Math.random() * 30) + 40; // 40-70

    const status = weightPercentile >= 50 && heightPercentile >= 50
      ? 'healthy'
      : weightPercentile >= 40 && heightPercentile >= 40
      ? 'good'
      : 'monitor';

    setResult({
      weightPercentile,
      heightPercentile,
      status
    });
  };

  const handleReset = () => {
    setFormData({ ageMonths: '', weight: '', height: '' });
    setResult(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8 animate-fadeIn">
      <div className="text-center mb-8">
        <h2 className="text-[#FF6EA6] text-2xl font-bold mb-2">Growth Calculator</h2>
        <p className="text-gray-600">Calculate your baby's growth percentile 📊</p>
      </div>

      {/* Calculator Form */}
      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <label className="block text-gray-700 mb-3 font-medium">
              Baby's Age (months) 👶
            </label>
            <input
              type="number"
              name="ageMonths"
              value={formData.ageMonths}
              onChange={handleInputChange}
              placeholder="e.g., 8"
              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-[#FF6EA6] focus:outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-3 font-medium">
              Weight (kg) ⚖️
            </label>
            <input
              type="number"
              step="0.1"
              name="weight"
              value={formData.weight}
              onChange={handleInputChange}
              placeholder="e.g., 8.2"
              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-[#FF6EA6] focus:outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-3 font-medium">
              Height (cm) 📏
            </label>
            <input
              type="number"
              step="0.1"
              name="height"
              value={formData.height}
              onChange={handleInputChange}
              placeholder="e.g., 68"
              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-[#FF6EA6] focus:outline-none transition-all"
            />
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={calculateGrowth}
            className="px-10 py-4 bg-gradient-to-r from-[#FF6EA6] to-[#7C4DFF] text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 font-semibold"
          >
            Calculate
          </button>
          <button
            onClick={handleReset}
            className="px-10 py-4 bg-gray-100 text-gray-700 rounded-2xl hover:bg-gray-200 transition-all font-semibold"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Results */}
      {result && (
        <div className="bg-gradient-to-br from-[#FF6EA6]/10 to-[#7C4DFF]/10 rounded-3xl p-8 shadow-lg border-2 border-[#FF6EA6]/20 animate-fadeIn">
          <h3 className="text-[#FF6EA6] text-xl font-bold text-center mb-6">Growth Analysis</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">⚖️</div>
              <p className="text-gray-600 mb-2">Weight Percentile</p>
              <p className="text-4xl text-[#FF6EA6] font-bold">{result.weightPercentile}%</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">📏</div>
              <p className="text-gray-600 mb-2">Height Percentile</p>
              <p className="text-4xl text-[#7C4DFF] font-bold">{result.heightPercentile}%</p>
            </div>
          </div>
          
          <div className={`p-6 rounded-2xl text-center ${
            result.status === 'healthy'
              ? 'bg-green-100 border-2 border-green-300'
              : result.status === 'good'
              ? 'bg-blue-100 border-2 border-blue-300'
              : 'bg-yellow-100 border-2 border-yellow-300'
          }`}>
            <div className="text-5xl mb-4">
              {result.status === 'healthy' ? '✅' : result.status === 'good' ? '👍' : '⚠️'}
            </div>
            <p className={`text-xl mb-2 font-semibold ${
              result.status === 'healthy'
                ? 'text-green-700'
                : result.status === 'good'
                ? 'text-blue-700'
                : 'text-yellow-700'
            }`}>
              {result.status === 'healthy'
                ? "Your baby's growth is within the healthy range! 😊"
                : result.status === 'good'
                ? "Your baby's growth is progressing well! 😊"
                : "Consider consulting with your pediatrician for guidance."}
            </p>
            <p className="text-gray-600 text-sm italic">
              Remember: Every baby grows at their own pace!
            </p>
          </div>
        </div>
      )}

      {/* Info Box */}
      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <h4 className="text-gray-700 font-bold mb-4">📖 Understanding Percentiles</h4>
        <div className="space-y-3 text-gray-600">
          <p className="flex items-start gap-2">
            <span className="text-[#FF6EA6]">•</span>
            Percentiles compare your baby's measurements with other babies of the same age.
          </p>
          <p className="flex items-start gap-2">
            <span className="text-[#7C4DFF]">•</span>
            The 50th percentile means your baby is exactly average.
          </p>
          <p className="flex items-start gap-2">
            <span className="text-[#FF6EA6]">•</span>
            Anything between the 5th and 95th percentile is considered normal.
          </p>
          <p className="flex items-start gap-2">
            <span className="text-[#7C4DFF]">•</span>
            Consistent growth pattern is more important than the exact number.
          </p>
        </div>
      </div>

      <p className="text-center text-gray-500 italic">
        You're doing an amazing job, Mama! 💕
      </p>
    </div>
  );
}