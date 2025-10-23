import React, { useState, useEffect } from 'react';
import '../../pages/Styles/settings.css';

const ProfileInfo = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [previewUrl, setPreviewUrl] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const userData = localStorage.getItem('aararo_user');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      setFormData({
        name: parsedUser.name,
        email: parsedUser.email
      });
      // Set initial preview URL from user data
      if (parsedUser.profilePhoto) {
        setPreviewUrl(parsedUser.profilePhoto);
      }
    }
  }, []);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type and size
      if (!file.type.startsWith('image/')) {
        setMessage('Please select a valid image file');
        setTimeout(() => setMessage(''), 3000);
        return;
      }
      
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setMessage('Image size should be less than 5MB');
        setTimeout(() => setMessage(''), 3000);
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.onerror = () => {
        setMessage('Error reading image file');
        setTimeout(() => setMessage(''), 3000);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      setMessage('Name is required');
      setTimeout(() => setMessage(''), 3000);
      return;
    }

    // Update user data
    const updatedUser = {
      ...user,
      name: formData.name.trim(),
      profilePhoto: previewUrl
    };
    
    localStorage.setItem('aararo_user', JSON.stringify(updatedUser));
    setUser(updatedUser);
    setIsEditing(false);
    setMessage('Profile updated successfully!');
    
    setTimeout(() => setMessage(''), 3000);
  };

  const handleCancel = () => {
    setFormData({
      name: user.name,
      email: user.email
    });
    setPreviewUrl(user.profilePhoto || '');
    setIsEditing(false);
    setMessage('');
  };

  const getDefaultAvatar = () => {
    // Create a simple SVG avatar as fallback
    return `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150"><rect width="150" height="150" fill="%23f0f0f0"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="60" fill="%23999">👤</text></svg>`;
  };

  if (!user) {
    return (
      <div className="profile-page">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <div className="page-header">
        <h1>Profile Information</h1>
        <p>Manage your personal information and profile photo</p>
      </div>

      {message && (
        <div className={`message ${message.includes('successfully') ? 'success' : 'error'}`}>
          {message}
        </div>
      )}

      <div className="profile-card">
        <div className="photo-section">
          <div className="photo-container">
            <img 
              src={previewUrl || user.profilePhoto || getDefaultAvatar()} 
              alt="Profile" 
              className="profile-photo"
              onError={(e) => {
                e.target.src = getDefaultAvatar();
              }}
            />
            {isEditing && (
              <div className="photo-overlay">
                <label htmlFor="photo-upload" className="upload-btn">
                  📷 Change Photo
                </label>
                <input
                  type="file"
                  id="photo-upload"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  style={{ display: 'none' }}
                />
              </div>
            )}
          </div>
          {isEditing && (
            <p className="photo-help-text">Click on the photo to change</p>
          )}
        </div>

        <form className="profile-form" onSubmit={handleSave}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              disabled={!isEditing}
              className={`form-input ${!isEditing ? 'disabled' : ''}`}
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              disabled
              className="form-input disabled"
              placeholder="Your email address"
            />
            <small className="helper-text">Email cannot be changed</small>
          </div>

          <div className="form-group">
            <label className="form-label">Member Since</label>
            <div className="member-since">
              {new Date(user.joinDate).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </div>

          <div className="form-actions">
            {!isEditing ? (
              <button 
                type="button" 
                className="btn primary"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>
            ) : (
              <>
                <button type="submit" className="btn primary">
                  Save Changes
                </button>
                <button 
                  type="button" 
                  className="btn secondary"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileInfo;