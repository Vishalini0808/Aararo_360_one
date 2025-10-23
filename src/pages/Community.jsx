import React, { useState } from 'react';
import './Community.css';

const Community = () => {
  const [activeTab, setActiveTab] = useState('discussions');
  const [newPost, setNewPost] = useState('');

  const discussions = [
    {
      id: 1,
      user: 'Priya M.',
      role: 'Mother of 2',
      time: '2 hours ago',
      title: 'Breastfeeding challenges in first week',
      content: 'My newborn is having trouble latching properly. Any tips from experienced moms?',
      replies: 24,
      likes: 15,
      category: 'Newborn Care',
      userImage: '👩'
    },
    {
      id: 2,
      user: 'Dr. Sharma',
      role: 'Pediatrician',
      time: '5 hours ago',
      title: 'Importance of vaccination during monsoon',
      content: 'Monsoon brings increased risk of waterborne diseases. Make sure your child\'s vaccinations are up to date.',
      replies: 8,
      likes: 32,
      category: 'Health & Safety',
      userImage: '👨‍⚕️'
    },
    {
      id: 3,
      user: 'Anjali P.',
      role: 'First-time Mom',
      time: '1 day ago',
      title: 'Best baby carriers for Indian weather?',
      content: 'Looking for comfortable and breathable baby carrier options for our hot and humid climate.',
      replies: 17,
      likes: 12,
      category: 'Products',
      userImage: '👩'
    },
    {
      id: 4,
      user: 'Grandma Asha',
      role: 'Elder Advisor',
      time: '2 days ago',
      title: 'Traditional remedies for baby colic',
      content: 'Sharing some time-tested home remedies that have helped generations of babies with colic.',
      replies: 31,
      likes: 45,
      category: 'Traditional Wisdom',
      userImage: '👵'
    }
  ];

  const groups = [
    {
      name: 'First-Time Moms',
      members: '2.4K',
      icon: '🤰',
      description: 'Support and guidance for new mothers',
      recentActivity: 'Active now'
    },
    {
      name: 'Working Mothers',
      members: '1.8K',
      icon: '💼',
      description: 'Balancing career and motherhood',
      recentActivity: '2 hours ago'
    },
    {
      name: 'Dads Community',
      members: '856',
      icon: '👨‍👧',
      description: 'For all the amazing fathers',
      recentActivity: '1 hour ago'
    },
    {
      name: 'Twins & Multiples',
      members: '623',
      icon: '👶👶',
      description: 'Special support for multiple births',
      recentActivity: '5 hours ago'
    },
    {
      name: 'Preemie Parents',
      members: '432',
      icon: '🌟',
      description: 'Support for premature baby care',
      recentActivity: '3 hours ago'
    },
    {
      name: 'Fertility Journey',
      members: '1.2K',
      icon: '💖',
      description: 'Support through fertility challenges',
      recentActivity: 'Active now'
    }
  ];

  const experts = [
    {
      name: 'Dr. Rajesh Kumar',
      specialty: 'Pediatrician',
      experience: '15+ years',
      available: true,
      image: '👨‍⚕️',
      rating: 4.9
    },
    {
      name: 'Dr. Sunita Patel',
      specialty: 'Gynecologist',
      experience: '12+ years',
      available: true,
      image: '👩‍⚕️',
      rating: 4.8
    },
    {
      name: 'Ms. Meera Joshi',
      specialty: 'Lactation Consultant',
      experience: '8+ years',
      available: false,
      image: '💕',
      rating: 4.9
    },
    {
      name: 'Dr. Amit Verma',
      specialty: 'Child Psychologist',
      experience: '10+ years',
      available: true,
      image: '🧠',
      rating: 4.7
    }
  ];

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPost.trim()) {
      // Handle post submission
      setNewPost('');
    }
  };

  return (
    <div className="community-page">
      <div className="page-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Community & Support 👥</h1>
            <p>Connect with other parents, share experiences, and get support from our community</p>
          </div>
        </div>
      </div>

      <div className="community-content">
        <div className="container">
          {/* Quick Stats */}
          {/* <div className="community-stats">
            <div className="stat-card">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Parents</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">25K+</div>
              <div className="stat-label">Discussions</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100+</div>
              <div className="stat-label">Experts</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support</div>
            </div>
          </div> */}

          {/* Main Content Tabs */}
          <div className="community-tabs">
            <div className="tab-navigation">
              <button 
                className={`tab-btn ${activeTab === 'discussions' ? 'active' : ''}`}
                onClick={() => setActiveTab('discussions')}
              >
                💬 Discussions
              </button>
              <button 
                className={`tab-btn ${activeTab === 'groups' ? 'active' : ''}`}
                onClick={() => setActiveTab('groups')}
              >
                👥 Groups
              </button>
              <button 
                className={`tab-btn ${activeTab === 'experts' ? 'active' : ''}`}
                onClick={() => setActiveTab('experts')}
              >
                🎓 Experts
              </button>
              <button 
                className={`tab-btn ${activeTab === 'events' ? 'active' : ''}`}
                onClick={() => setActiveTab('events')}
              >
                📅 Events
              </button>
            </div>

            <div className="tab-content">
              {/* Discussions Tab */}
              {activeTab === 'discussions' && (
                <div className="discussions-tab">
                  {/* New Post Form */}
                  <div className="new-post-card">
                    <div className="user-avatar">👤</div>
                    <form onSubmit={handlePostSubmit} className="post-form">
                      <textarea
                        value={newPost}
                        onChange={(e) => setNewPost(e.target.value)}
                        placeholder="Share your question or experience with the community..."
                        rows="3"
                      />
                      <div className="post-actions">
                        <button type="submit" className="post-btn" disabled={!newPost.trim()}>
                          Post to Community
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* Discussions List */}
                  <div className="discussions-list">
                    {discussions.map(discussion => (
                      <div key={discussion.id} className="discussion-card">
                        <div className="discussion-header">
                          <div className="user-info">
                            <span className="user-avatar">{discussion.userImage}</span>
                            <div className="user-details">
                              <h4>{discussion.user}</h4>
                              <span>{discussion.role} • {discussion.time}</span>
                            </div>
                          </div>
                          <span className="category-tag">{discussion.category}</span>
                        </div>
                        
                        <div className="discussion-content">
                          <h3>{discussion.title}</h3>
                          <p>{discussion.content}</p>
                        </div>

                        <div className="discussion-actions">
                          <button className="action-btn">
                            <span>👍</span> {discussion.likes}
                          </button>
                          <button className="action-btn">
                            <span>💬</span> {discussion.replies} replies
                          </button>
                          <button className="action-btn">
                            <span>🔖</span> Save
                          </button>
                          <button className="action-btn">
                            <span>↗️</span> Share
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Groups Tab */}
              {activeTab === 'groups' && (
                <div className="groups-tab">
                  <h2>Join Support Groups</h2>
                  <div className="groups-grid">
                    {groups.map((group, index) => (
                      <div key={index} className="group-card">
                        <div className="group-header">
                          <div className="group-icon">{group.icon}</div>
                          <div className="group-info">
                            <h3>{group.name}</h3>
                            <span>{group.members} members</span>
                          </div>
                        </div>
                        <p className="group-description">{group.description}</p>
                        <div className="group-footer">
                          <span className="activity">{group.recentActivity}</span>
                          <button className="join-btn">Join Group</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Experts Tab */}
              {activeTab === 'experts' && (
                <div className="experts-tab">
                  <h2>Connect with Experts</h2>
                  <div className="experts-grid">
                    {experts.map((expert, index) => (
                      <div key={index} className="expert-card">
                        <div className="expert-header">
                          <div className="expert-avatar">{expert.image}</div>
                          <div className="expert-info">
                            <h3>{expert.name}</h3>
                            <span>{expert.specialty}</span>
                            <div className="expert-meta">
                              <span>{expert.experience}</span>
                              <span className="rating">⭐ {expert.rating}</span>
                            </div>
                          </div>
                        </div>
                        <div className="expert-status">
                          <span className={`availability ${expert.available ? 'online' : 'offline'}`}>
                            {expert.available ? '🟢 Online' : '⚫ Offline'}
                          </span>
                        </div>
                        <div className="expert-actions">
                          <button className="consult-btn">Consult Now</button>
                          <button className="message-btn">Message</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Events Tab */}
              {activeTab === 'events' && (
                <div className="events-tab">
                  <h2>Upcoming Community Events</h2>
                  <div className="events-list">
                    <div className="event-card">
                      <div className="event-date">
                        <span className="day">15</span>
                        <span className="month">MAR</span>
                      </div>
                      <div className="event-details">
                        <h3>Prenatal Yoga Workshop</h3>
                        <p>Live online session for expecting mothers</p>
                        <div className="event-meta">
                          <span>🕒 10:00 AM - 11:30 AM</span>
                          <span>📍 Online</span>
                        </div>
                      </div>
                      <button className="register-btn">Register</button>
                    </div>
                    
                    <div className="event-card">
                      <div className="event-date">
                        <span className="day">18</span>
                        <span className="month">MAR</span>
                      </div>
                      <div className="event-details">
                        <h3>New Parents Meetup</h3>
                        <p>Connect with other new parents in your city</p>
                        <div className="event-meta">
                          <span>🕒 3:00 PM - 5:00 PM</span>
                          <span>📍 Local Community Centers</span>
                        </div>
                      </div>
                      <button className="register-btn">Find Nearby</button>
                    </div>

                    <div className="event-card">
                      <div className="event-date">
                        <span className="day">22</span>
                        <span className="month">MAR</span>
                      </div>
                      <div className="event-details">
                        <h3>Baby Weaning Masterclass</h3>
                        <p>Learn about introducing solid foods to your baby</p>
                        <div className="event-meta">
                          <span>🕒 11:00 AM - 12:30 PM</span>
                          <span>📍 Online</span>
                        </div>
                      </div>
                      <button className="register-btn">Join Class</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Community Guidelines */}
          <div className="guidelines-section">
            <h2>Community Guidelines</h2>
            <div className="guidelines-grid">
              <div className="guideline-card">
                <div className="guideline-icon">🤝</div>
                <h4>Be Supportive</h4>
                <p>Offer encouragement and constructive advice to fellow parents</p>
              </div>
              <div className="guideline-card">
                <div className="guideline-icon">🔒</div>
                <h4>Respect Privacy</h4>
                <p>Don't share personal information about yourself or others</p>
              </div>
              <div className="guideline-card">
                <div className="guideline-icon">💖</div>
                <h4>Be Kind</h4>
                <p>Everyone's parenting journey is unique. Be understanding</p>
              </div>
              <div className="guideline-card">
                <div className="guideline-icon">🎯</div>
                <h4>Share Experience</h4>
                <p>Focus on sharing your personal experiences rather than giving medical advice</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;