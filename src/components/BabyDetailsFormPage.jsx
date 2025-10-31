import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BabyDetailsFormPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    weight: '',
    length: '',
    headCircumference: '',
    measurementDate: new Date().toISOString().split('T')[0],
    notes: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8080/api/baby-growth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Growth data saved successfully!');
        navigate('/babytracker');
      } else {
        throw new Error('Failed to save data');
      }
    } catch (error) {
      console.error('Error saving growth data:', error);
      alert('Error saving data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/babytracker')}
          className="mb-6 text-purple-700 hover:text-purple-900 font-semibold flex items-center gap-2"
        >
          ← Back to Growth Charts
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-purple-900 mb-2">
            Add Baby Growth Measurement
          </h1>
          <p className="text-purple-700">
            Track your baby's growth progress
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Weight */}
            <div>
              <label className="block text-purple-900 font-semibold mb-2">
                Weight (kg)
              </label>
              <input
                type="number"
                step="0.01"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                className="w-full p-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 transition-colors"
                placeholder="0.00"
                required
              />
            </div>

            {/* Length */}
            <div>
              <label className="block text-purple-900 font-semibold mb-2">
                Length (cm)
              </label>
              <input
                type="number"
                step="0.1"
                name="length"
                value={formData.length}
                onChange={handleChange}
                className="w-full p-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 transition-colors"
                placeholder="0.0"
                required
              />
            </div>

            {/* Head Circumference */}
            <div>
              <label className="block text-purple-900 font-semibold mb-2">
                Head Circumference (cm)
              </label>
              <input
                type="number"
                step="0.1"
                name="headCircumference"
                value={formData.headCircumference}
                onChange={handleChange}
                className="w-full p-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 transition-colors"
                placeholder="0.0"
                required
              />
            </div>

            {/* Measurement Date */}
            <div>
              <label className="block text-purple-900 font-semibold mb-2">
                Measurement Date
              </label>
              <input
                type="date"
                name="measurementDate"
                value={formData.measurementDate}
                onChange={handleChange}
                className="w-full p-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 transition-colors"
                required
              />
            </div>
          </div>

          {/* Notes */}
          <div className="mb-6">
            <label className="block text-purple-900 font-semibold mb-2">
              Notes
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 transition-colors resize-none"
              placeholder="Any additional notes about this measurement..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Saving...' : '💾 Save Measurement'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BabyDetailsFormPage;