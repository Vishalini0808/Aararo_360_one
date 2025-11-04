// AddMeasurementForm.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AddMeasurementForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    weight: '',
    height: '',
    headCircumference: '',
    notes: ''
  });

  const [babyProfile, setBabyProfile] = useState(null);

  useEffect(() => {
    const savedProfile = localStorage.getItem('babyProfile');
    if (savedProfile) {
      setBabyProfile(JSON.parse(savedProfile));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Get existing data
    const existingData = JSON.parse(localStorage.getItem('babyGrowthData') || '[]');
    
    // Add new measurement
    const newMeasurement = {
      id: Date.now(),
      ...formData,
      weight: parseFloat(formData.weight),
      height: parseFloat(formData.height),
      headCircumference: parseFloat(formData.headCircumference)
    };
    
    const updatedData = [...existingData, newMeasurement];
    localStorage.setItem('babyGrowthData', JSON.stringify(updatedData));
    
    alert('Measurement saved successfully!');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <button
            onClick={() => navigate('/')}
            className="mb-4 text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2"
          >
            ← Back to Dashboard
          </button>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Add Baby Measurement
          </h1>
          <p className="text-gray-600">
            Record your baby's growth metrics
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Baby Info */}
            {babyProfile && (
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <h3 className="font-semibold text-blue-900">Baby: {babyProfile.name}</h3>
                <p className="text-blue-700">Birth Date: {new Date(babyProfile.birthDate).toLocaleDateString()}</p>
              </div>
            )}

            {/* Measurement Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Measurement Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Weight */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  step="0.01"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., 7.5"
                  required
                />
              </div>

              {/* Height */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Height (cm)
                </label>
                <input
                  type="number"
                  step="0.1"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., 65.2"
                  required
                />
              </div>

              {/* Head Circumference */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Head Circumference (cm)
                </label>
                <input
                  type="number"
                  step="0.1"
                  name="headCircumference"
                  value={formData.headCircumference}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., 42.5"
                  required
                />
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Notes (Optional)
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Any additional notes..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => navigate('/')}
                className="flex-1 bg-gray-500 text-white py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Save Measurement
              </button>
            </div>
          </form>
        </div>

        {/* Growth Guidelines */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mt-8">
          <h3 className="font-semibold text-yellow-800 mb-3">📏 Growth Guidelines</h3>
          <ul className="text-yellow-700 space-y-2 text-sm">
            <li>• Measure weight without clothes or with minimal light clothing</li>
            <li>• Measure height while baby is lying down straight</li>
            <li>• Head circumference should be measured around the widest part</li>
            <li>• Record measurements at consistent times for accurate tracking</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AddMeasurementForm;