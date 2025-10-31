import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const BabyGrowthCharts = () => {
  const navigate = useNavigate();
  const [growthData, setGrowthData] = useState([]);
  const [timeRange, setTimeRange] = useState('all');
  const [loading, setLoading] = useState(true);
  const [babyProfile, setBabyProfile] = useState(null);
  const [activeTab, setActiveTab] = useState('charts'); // 'charts' or 'report'

  useEffect(() => {
    fetchGrowthData();
    fetchBabyProfile();
  }, [timeRange]);

  const fetchGrowthData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/baby-growth');
      const data = await response.json();
      setGrowthData(data);
    } catch (error) {
      console.error('Error fetching growth data:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchBabyProfile = () => {
    const savedProfile = localStorage.getItem('babyProfile');
    if (savedProfile) {
      setBabyProfile(JSON.parse(savedProfile));
    }
  };

  // Filter data based on time range
  const filteredData = growthData.filter(entry => {
    if (timeRange === 'all') return true;
    
    const entryDate = new Date(entry.measurementDate);
    const now = new Date();
    const diffTime = Math.abs(now - entryDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    switch (timeRange) {
      case 'week': return diffDays <= 7;
      case 'month': return diffDays <= 30;
      case '3months': return diffDays <= 90;
      default: return true;
    }
  });

  // Calculate growth statistics
  const calculateGrowthStats = () => {
    if (filteredData.length < 2) return null;
    
    const first = filteredData[0];
    const latest = filteredData[filteredData.length - 1];
    const daysBetween = (new Date(latest.measurementDate) - new Date(first.measurementDate)) / (1000 * 60 * 60 * 24);
    
    return {
      weightGain: (latest.weight - first.weight).toFixed(2),
      lengthGain: (latest.length - first.length).toFixed(1),
      headGain: (latest.headCircumference - first.headCircumference).toFixed(1),
      totalDays: Math.round(daysBetween),
      weightPerDay: ((latest.weight - first.weight) / daysBetween).toFixed(3),
      lengthPerDay: ((latest.length - first.length) / daysBetween).toFixed(2)
    };
  };

  const growthStats = calculateGrowthStats();

  // Chart Data
  const weightChartData = {
    labels: filteredData.map(entry => 
      new Date(entry.measurementDate).toLocaleDateString()
    ),
    datasets: [
      {
        label: 'Weight (kg)',
        data: filteredData.map(entry => entry.weight),
        borderColor: 'rgb(236, 72, 153)',
        backgroundColor: 'rgba(236, 72, 153, 0.1)',
        tension: 0.4,
        fill: true
      }
    ]
  };

  const lengthChartData = {
    labels: filteredData.map(entry => 
      new Date(entry.measurementDate).toLocaleDateString()
    ),
    datasets: [
      {
        label: 'Length (cm)',
        data: filteredData.map(entry => entry.length),
        borderColor: 'rgb(139, 92, 246)',
        backgroundColor: 'rgba(139, 92, 246, 0.1)',
        tension: 0.4,
        fill: true
      }
    ]
  };

  const headChartData = {
    labels: filteredData.map(entry => 
      new Date(entry.measurementDate).toLocaleDateString()
    ),
    datasets: [
      {
        label: 'Head Circumference (cm)',
        data: filteredData.map(entry => entry.headCircumference),
        borderColor: 'rgb(14, 165, 233)',
        backgroundColor: 'rgba(14, 165, 233, 0.1)',
        tension: 0.4,
        fill: true
      }
    ]
  };

  const progressChartData = {
    labels: ['Weight', 'Length', 'Head'],
    datasets: [
      {
        label: 'Current Measurement',
        data: filteredData.length > 0 ? [
          filteredData[filteredData.length - 1].weight,
          filteredData[filteredData.length - 1].length,
          filteredData[filteredData.length - 1].headCircumference
        ] : [0, 0, 0],
        backgroundColor: [
          'rgba(236, 72, 153, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(14, 165, 233, 0.8)'
        ],
        borderColor: [
          'rgb(236, 72, 153)',
          'rgb(139, 92, 246)',
          'rgb(14, 165, 233)'
        ],
        borderWidth: 2
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
      }
    },
    scales: {
      y: {
        beginAtZero: false
      }
    }
  };

  // Generate PDF Report
  const generatePDFReport = () => {
    // This would integrate with a PDF generation library
    alert('PDF Report Generation Feature Coming Soon! 📄');
    // In real implementation, use libraries like jsPDF or window.print()
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading growth data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="mb-6 text-purple-700 hover:text-purple-900 font-semibold flex items-center gap-2"
        >
          ← Back to Home
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Baby Growth Tracker 👶
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive growth analysis and tracking reports for your baby
          </p>
        </div>

        {/* Baby Profile Summary */}
        {babyProfile && (
          <div className="bg-white rounded-2xl shadow-sm border border-pink-100 p-6 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {babyProfile.name || 'Your Baby'} 
                  {babyProfile.nickname && ` "${babyProfile.nickname}"`}
                </h3>
                <p className="text-gray-600">
                  {babyProfile.gender && `${babyProfile.gender.charAt(0).toUpperCase() + babyProfile.gender.slice(1)} • `}
                  {filteredData.length} measurements recorded
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Tracking Since</p>
                <p className="font-semibold text-purple-600">
                  {filteredData.length > 0 ? 
                    new Date(filteredData[0].measurementDate).toLocaleDateString() : 
                    'No data yet'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-2xl p-2 shadow-sm border border-pink-100">
            {['charts', 'report'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-pink-600'
                }`}
              >
                {tab === 'charts' ? '📊 Growth Charts' : '📋 Full Report'}
              </button>
            ))}
          </div>
        </div>

        {/* Time Range Filter */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-2xl p-2 shadow-sm border border-pink-100">
            {['week', 'month', '3months', 'all'].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  timeRange === range
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-pink-600'
                }`}
              >
                {range === 'week' ? '1 Week' : 
                 range === 'month' ? '1 Month' : 
                 range === '3months' ? '3 Months' : 'All Time'}
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'charts' ? (
          /* Charts View */
          <div>
            {/* Growth Statistics */}
            {filteredData.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm border border-pink-100 p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Current Growth Status</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-pink-50 rounded-lg">
                    <div className="text-2xl font-bold text-pink-600">
                      {filteredData[filteredData.length - 1].weight} kg
                    </div>
                    <div className="text-sm text-gray-600">Current Weight</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">
                      {filteredData[filteredData.length - 1].length} cm
                    </div>
                    <div className="text-sm text-gray-600">Current Length</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">
                      {filteredData[filteredData.length - 1].headCircumference} cm
                    </div>
                    <div className="text-sm text-gray-600">Head Circumference</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">
                      {filteredData.length}
                    </div>
                    <div className="text-sm text-gray-600">Total Records</div>
                  </div>
                </div>
              </div>
            )}

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-2xl shadow-sm border border-pink-100 p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Weight Progress (kg)</h3>
                <Line data={weightChartData} options={chartOptions} />
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-pink-100 p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Length Progress (cm)</h3>
                <Line data={lengthChartData} options={chartOptions} />
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-pink-100 p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Head Circumference (cm)</h3>
                <Line data={headChartData} options={chartOptions} />
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-pink-100 p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Current Measurements</h3>
                <Bar data={progressChartData} options={chartOptions} />
              </div>
            </div>
          </div>
        ) : (
          /* Report View */
          <div className="bg-white rounded-2xl shadow-sm border border-pink-100 p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Growth Analysis Report</h3>
              <button
                onClick={generatePDFReport}
                className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                📄 Download PDF
              </button>
            </div>

            {filteredData.length > 0 ? (
              <div className="space-y-6">
                {/* Summary Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-pink-50 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-pink-600">{filteredData.length}</div>
                    <div className="text-sm text-gray-600">Total Measurements</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-purple-600">
                      {growthStats ? growthStats.totalDays : '0'}
                    </div>
                    <div className="text-sm text-gray-600">Days Tracked</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-blue-600">
                      {filteredData[filteredData.length - 1].weight} kg
                    </div>
                    <div className="text-sm text-gray-600">Current Weight</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-green-600">
                      {filteredData[filteredData.length - 1].length} cm
                    </div>
                    <div className="text-sm text-gray-600">Current Length</div>
                  </div>
                </div>

                {/* Growth Analysis */}
                {growthStats && (
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">📈 Growth Analysis</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-pink-600">+{growthStats.weightGain} kg</div>
                        <div className="text-sm text-gray-600">Weight Gain</div>
                        <div className="text-xs text-gray-500">({growthStats.weightPerDay} kg/day)</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">+{growthStats.lengthGain} cm</div>
                        <div className="text-sm text-gray-600">Length Gain</div>
                        <div className="text-xs text-gray-500">({growthStats.lengthPerDay} cm/day)</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">+{growthStats.headGain} cm</div>
                        <div className="text-sm text-gray-600">Head Growth</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Measurement History */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">📋 Measurement History</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-600">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                          <th className="px-4 py-3">Date</th>
                          <th className="px-4 py-3">Weight (kg)</th>
                          <th className="px-4 py-3">Length (cm)</th>
                          <th className="px-4 py-3">Head (cm)</th>
                          <th className="px-4 py-3">Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredData.map((entry) => (
                          <tr key={entry.id} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-3 font-medium">
                              {new Date(entry.measurementDate).toLocaleDateString()}
                            </td>
                            <td className="px-4 py-3">{entry.weight}</td>
                            <td className="px-4 py-3">{entry.length}</td>
                            <td className="px-4 py-3">{entry.headCircumference}</td>
                            <td className="px-4 py-3 text-xs max-w-xs truncate">
                              {entry.notes || '-'}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Growth Recommendations */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-yellow-800 mb-3">💡 Growth Insights</h4>
                  <ul className="space-y-2 text-yellow-700">
                    <li>• Your baby is growing at a healthy rate</li>
                    <li>• Continue regular measurements every 2-4 weeks</li>
                    <li>• Consult your pediatrician for personalized advice</li>
                    <li>• Ensure proper nutrition and sleep patterns</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📊</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Growth Data Yet</h3>
                <p className="text-gray-600 mb-6">Start tracking your baby's growth to see detailed reports and analysis.</p>
              </div>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => navigate('/baby-details')}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            + Add New Measurement
          </button>
          
          {filteredData.length > 0 && (
            <button
              onClick={() => window.print()}
              className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              🖨️ Print Report
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BabyGrowthCharts;