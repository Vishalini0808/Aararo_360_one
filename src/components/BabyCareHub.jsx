import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Components
const CareCard = ({ title, subtitle, icon, gradient, onClick }) => (
  <div
    className={`${gradient} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-white/20`}
    onClick={onClick}
  >
    <div className="flex items-start gap-4">
      <div className="text-3xl">{icon}</div>
      <div className="flex-1">
        <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
        <p className="text-white/90 text-sm">{subtitle}</p>
      </div>
    </div>
  </div>
);

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {children}
        </div>
      </div>
    </div>
  );
};

// Video Card Component with Advanced Effects
const VideoCard = ({ video, type = 'landscape', index, onVideoClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  const handleClick = () => {
    if (onVideoClick) {
      onVideoClick(index);
    } else {
      if (videoRef.current) {
        if (videoRef.current.paused) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      }
    }
  };

  return (
    <div
      className="group relative bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02] cursor-pointer border border-gray-200/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -m-0.5" />
      
      <div
        className={`relative ${
          type === 'landscape' ? 'aspect-video' : 'aspect-[9/16]'
        } bg-gradient-to-br from-gray-900 to-gray-700 overflow-hidden`}
      >
        <video
          ref={videoRef}
          src={video.videoUrl}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          muted
          playsInline
          loop
          preload="metadata"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-all duration-500" />
        
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
          isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}>
          <div className="bg-white/20 backdrop-blur-lg rounded-full p-4 transform group-hover:scale-110 transition-transform duration-300">
            <div className="bg-white rounded-full p-3 shadow-2xl">
              <span className="text-2xl text-gray-800">▶</span>
            </div>
          </div>
        </div>

        <div className="absolute top-3 right-3 bg-black/80 text-white px-2 py-1 rounded-lg text-xs font-semibold backdrop-blur-sm">
          {video.duration}
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600/30">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000 ease-out"
            style={{ width: isHovered ? '100%' : '0%' }}
          />
        </div>
      </div>

      <div className="p-5 relative z-10 bg-white">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
            {video.channel?.charAt(0) || 'C'}
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors duration-300">
              {video.title}
            </h3>
            <p className="text-gray-600 text-sm font-medium mb-1">{video.channel}</p>
            <div className="flex items-center text-gray-500 text-sm space-x-2">
              <span>{video.views}</span>
              <span>•</span>
              <span>{video.time}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
    </div>
  );
};

// Shorts Card with Advanced Effects
const ShortsCard = ({ short, index, onShortsClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  return (
    <div 
      className="group relative flex-shrink-0 w-44 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onShortsClick(index)}
    >
      <div className="relative aspect-[9/16] bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
        <video
          ref={videoRef}
          src={short.videoUrl}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          muted
          playsInline
          loop
          preload="metadata"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
        
        <div className="absolute top-3 right-3">
          <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-2xl flex items-center gap-1">
            <span className="text-lg">▶</span>
            <span>Shorts</span>
          </div>
        </div>

        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
          isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}>
          <div className="bg-white/20 backdrop-blur-lg rounded-full p-3 transform group-hover:scale-110 transition-transform duration-300">
            <div className="bg-white rounded-full p-4 shadow-2xl">
              <span className="text-2xl text-gray-800">▶</span>
            </div>
          </div>
        </div>

        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {[1, 2, 3, 4, 5, 6, 7].map((dot) => (
            <div
              key={dot}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                dot === index + 1 
                  ? 'bg-white scale-125' 
                  : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
    </div>
  );
};

// Main Component
export default function BabyCareHub() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [currentTip, setCurrentTip] = useState(0);
  const [activeSection, setActiveSection] = useState('care-hub');

  // Video states
  const [currentShortIndex, setCurrentShortIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const videoRefs = useRef([]);

  const topics = [ 
    { 
      id: 'daily-care', 
      title: 'Daily Care & Routines', 
      subtitle: 'Feeding, diapering, bath time, gentle skincare, daily routines.', 
      icon: '👶', 
      gradient: 'bg-gradient-to-br from-pink-300 to-pink-400' 
    }, 
    { 
      id: 'traditional-wisdom', 
      title: 'Elderly / Traditional Wisdom', 
      subtitle: 'Timeless care practices passed down safely.', 
      icon: '✨', 
      gradient: 'bg-gradient-to-br from-purple-300 to-purple-400' 
    }, 
    { 
      id: 'community-wellness', 
      title: 'Community & Parent Wellness', 
      subtitle: "You're not alone — connect & care for yourself too.", 
      icon: '👥', 
      gradient: 'bg-gradient-to-br from-rose-300 to-pink-400' 
    } 
  ]; 

  const dailyTips = [ 
    "Massage your baby's legs gently after bath.", 
    "Talk often — your voice builds connection.", 
    "Keep tummy time fun with toys.", 
    "A calm baby begins with a calm parent." 
  ]; 

  // Enhanced Video Data
  const landscapeVideos = [
    {
      id: 1,
      videoUrl: './v1.mp4',
      title: 'Complete Baby Care Guide for New Parents',
      channel: 'Parenting Pro',
      views: '1.2M views',
      time: '2 weeks ago',
      duration: '15:30',
      likes: '45K',
      comments: '2.3K'
    },
    {
      id: 2,
      videoUrl: './v2.mp4',
      title: 'Newborn Sleep Patterns & Safe Sleeping',
      channel: 'Baby Sleep Expert',
      views: '856K views',
      time: '1 month ago',
      duration: '12:45',
      likes: '32K',
      comments: '1.8K'
    },
    {
      id: 3,
      videoUrl: './v3.mp4',
      title: 'Breastfeeding & Bottle Feeding Techniques',
      channel: 'Pediatric Nutrition',
      views: '2.7M views',
      time: '3 days ago',
      duration: '18:20',
      likes: '78K',
      comments: '4.2K'
    }
  ];

  const shortsVideos = [
    {
      id: 1,
      videoUrl: './videoguide1.mp4',
      title: 'How to Feed',
    },
    {
      id: 2,
      videoUrl: './videoguide2.mp4',
      title: 'Emotional Regulation',
    },
    {
      id: 3,
      videoUrl: './videoguide3.mp4',
      title: 'Mirror Behaviour',
    },
    {
      id: 4,
      videoUrl: './vs1.mp4',
      title: 'Entertainment Shorts',
    },
    {
      id: 5,
      videoUrl: './vs2.mp4',
      title: 'Entertainment Shorts',
    },
    {
      id: 6,
      videoUrl: './vs3.mp4',
      title: 'Entertainment Shorts',
    },
    {
      id: 7,
      videoUrl: './vs4.mp4',
      title: 'Entertainment Shorts',
    },
    {
      id: 8,
      videoUrl: './vs5.mp4',
      title: 'Entertainment Shorts',
    },
    {
      id: 9,
      videoUrl: './vs6.mp4',
      title: 'Entertainment Shorts',
    },
    {
      id: 10,
      videoUrl: './vs7.mp4',
      title: 'Entertainment Shorts',
    }
  ];

  const mixVideos = [
    {
      id: 1,
      videoUrl: './v4.mp4',
      title: 'Complete Baby Proofing Guide',
      channel: 'Home Safety Expert',
      views: '456K views',
      time: '1 week ago',
      duration: '22:15',
      likes: '23K',
      comments: '1.2K'
    },
    {
      id: 2,
      videoUrl: './v5.mp4',
      title: 'First Foods & Baby-Led Weaning',
      channel: 'Baby Nutritionist',
      views: '1.8M views',
      time: '2 days ago',
      duration: '16:40',
      likes: '67K',
      comments: '3.8K'
    },
    {
      id: 3,
      videoUrl: './v6.mp4',
      title: 'Educational Playtime Activities',
      channel: 'Early Learning',
      views: 'Updated today',
      time: 'Just now',
      duration: '14:25',
      likes: '12K',
      comments: '856'
    }
  ];

  // New Parent Guides Videos
  const parentGuidesVideos = [
    {
      id: 1,
      videoUrl: './videoguide1.mp4',
      title: 'Postpartum Self-Care for New Moms',
      channel: 'Mom Wellness Guide',
      views: '892K views',
      time: '1 week ago',
      duration: '20:15',
      likes: '34K',
      comments: '2.1K'
    },
    {
      id: 2,
      videoUrl: './videoguide2.mp4',
      title: "Dad's Guide to Newborn Bonding",
      channel: 'Modern Parenting',
      views: '567K views',
      time: '3 days ago',
      duration: '14:30',
      likes: '28K',
      comments: '1.5K'
    },
    {
      id: 3,
      videoUrl: './videoguide3.mp4',
      title: 'Managing Sleep Deprivation & Stress',
      channel: 'Parent Mental Health',
      views: '1.1M views',
      time: '2 weeks ago',
      duration: '18:45',
      likes: '52K',
      comments: '3.4K'
    }
  ];

  useEffect(() => { 
    const timer = setInterval(() => { 
      setCurrentTip((prev) => (prev + 1) % dailyTips.length); 
    }, 5000); 
    return () => clearInterval(timer); 
  }, [dailyTips.length]); 

  // Video Handlers
  const handleShortsClick = (index) => {
    setCurrentShortIndex(index);
    setIsFullscreen(true);
    setIsPlaying(true);
    document.body.style.overflow = 'hidden';
  };

  const toggleFullscreen = () => {
    setIsFullscreen(false);
    document.body.style.overflow = 'auto';
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    if (videoRefs.current[currentShortIndex]) {
      if (isPlaying) {
        videoRefs.current[currentShortIndex].pause();
      } else {
        videoRefs.current[currentShortIndex].play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    setMuted(!muted);
  };

  const handleScroll = (e) => {
    if (!isFullscreen) return;
    e.preventDefault();
    
    const delta = e.deltaY;
    if (Math.abs(delta) > 50) {
      if (delta > 0) {
        const nextIndex = (currentShortIndex + 1) % shortsVideos.length;
        setCurrentShortIndex(nextIndex);
      } else {
        const prevIndex = currentShortIndex === 0 ? shortsVideos.length - 1 : currentShortIndex - 1;
        setCurrentShortIndex(prevIndex);
      }
    }
  };

  const handleVideoEnd = () => {
    const nextIndex = (currentShortIndex + 1) % shortsVideos.length;
    setCurrentShortIndex(nextIndex);
  };

  useEffect(() => {
    if (isFullscreen && videoRefs.current[currentShortIndex]) {
      const currentVideo = videoRefs.current[currentShortIndex];
      
      if (isPlaying) {
        currentVideo.play().catch(console.error);
      } else {
        currentVideo.pause();
      }

      videoRefs.current.forEach((video, index) => {
        if (video && index !== currentShortIndex) {
          video.pause();
          video.currentTime = 0;
        }
      });
    }
  }, [currentShortIndex, isPlaying, isFullscreen]);

  const currentTopic = topics.find((t) => t.id === selectedTopic);

  const renderModalContent = (topicId) => {
    return (
      <div className="p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Content Coming Soon!</h3>
        <p className="text-gray-600">We're preparing amazing content for: {topicId}</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Navigation Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className='flex items-center'>
              <span className="text-3xl mr-2">←</span> 
            </Link>

            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-pink-400 to-purple-600 rounded-full p-2">
                <span className="text-white text-xl">👶</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Baby Care Hub</h1>
            </div>
            
            <nav className="flex gap-1 bg-gray-100 rounded-xl p-1">
              <button
                onClick={() => setActiveSection('care-hub')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeSection === 'care-hub'
                    ? 'bg-white text-purple-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Care Hub
              </button>
              <button
                onClick={() => setActiveSection('videos')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeSection === 'videos'
                    ? 'bg-white text-purple-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Video Guides
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeSection === 'care-hub' && (
          <>
            {/* Baby Care Progress Tracker */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">👶 Weekly Baby Development Tracker</h2>
                  <p className="text-gray-600">Monitor your baby's growth, health milestones, and development week by week</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Week 4 • 1 Month Old
                  </div>
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-colors">
                    Add Health Record
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Sidebar - Weekly Navigation */}
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-200 sticky top-6">
                    <h3 className="font-bold text-gray-900 mb-4">Development Timeline</h3>
                    
                    <div className="space-y-2 max-h-96 overflow-y-auto">
                      {/* Current Week */}
                      <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-3 cursor-pointer hover:bg-purple-100 transition-colors">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-purple-700 font-semibold text-sm">Week 4</span>
                          <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full">Current</span>
                        </div>
                        <p className="text-purple-600 text-xs">Social Smiles • Head Control</p>
                        <div className="flex gap-1 mt-1">
                          <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                          <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                          <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                          <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                        </div>
                      </div>

                      {/* Completed Weeks */}
                      <div className="bg-green-50 border border-green-200 rounded-xl p-3 opacity-100 cursor-pointer hover:bg-green-100 transition-colors">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-green-700 font-semibold text-sm">Week 3</span>
                          <span className="text-green-600 text-sm">✓</span>
                        </div>
                        <p className="text-green-600 text-xs">Tracking Objects • Sounds</p>
                        <div className="text-green-500 text-xs mt-1">All milestones achieved</div>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-xl p-3 opacity-80 cursor-pointer hover:bg-green-100 transition-colors">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-green-700 font-semibold text-sm">Week 2</span>
                          <span className="text-green-600 text-sm">✓</span>
                        </div>
                        <p className="text-green-600 text-xs">Umbilical Cord Care</p>
                        <div className="text-green-500 text-xs mt-1">Healing well</div>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-xl p-3 opacity-60 cursor-pointer hover:bg-green-100 transition-colors">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-green-700 font-semibold text-sm">Week 1</span>
                          <span className="text-green-600 text-sm">✓</span>
                        </div>
                        <p className="text-green-600 text-xs">Newborn Adaptation</p>
                        <div className="text-green-500 text-xs mt-1">Successful start</div>
                      </div>

                      {/* Upcoming Weeks */}
                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 cursor-pointer hover:bg-blue-100 transition-colors">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-blue-700 font-semibold text-sm">Week 5</span>
                          <span className="text-blue-500 text-xs font-semibold">Next Week</span>
                        </div>
                        <p className="text-blue-600 text-xs">Vocalization • Strength</p>
                        <div className="text-blue-500 text-xs mt-1">First vaccines scheduled</div>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 opacity-70 cursor-pointer hover:bg-gray-100 transition-colors">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-gray-600 font-semibold text-sm">Week 6</span>
                        </div>
                        <p className="text-gray-500 text-xs">Head Control • Social Engagement</p>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 opacity-50 cursor-pointer hover:bg-gray-100 transition-colors">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-gray-600 font-semibold text-sm">Week 7</span>
                        </div>
                        <p className="text-gray-500 text-xs">Visual Tracking • Hand Coordination</p>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 opacity-40 cursor-pointer hover:bg-gray-100 transition-colors">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-gray-600 font-semibold text-sm">Week 8</span>
                        </div>
                        <p className="text-gray-500 text-xs">2-Month Checkup • Vaccinations</p>
                      </div>
                    </div>

                    {/* Progress Summary */}
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Development Progress</span>
                        <span className="text-sm font-semibold text-gray-900">75%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{width: '75%'}}></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>4/8 weeks</span>
                        <span>12/16 milestones</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Content - Current Week Details */}
                <div className="lg:col-span-3">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 mb-6">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Week 4 - Social Development & Physical Milestones</h3>
                        <p className="text-gray-600">Your baby is becoming more alert and responsive to the world around them</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Developmental Age</div>
                        <div className="text-lg font-bold text-purple-600">4 Weeks • 1 Month</div>
                      </div>
                    </div>

                    {/* Key Development Areas */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                      <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                        <div className="text-2xl font-bold text-blue-600 mb-1">3.8kg</div>
                        <div className="text-sm text-blue-700">Current Weight</div>
                        <div className="text-xs text-blue-600 mt-1">Healthy weight gain</div>
                      </div>
                      
                      <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                        <div className="text-2xl font-bold text-green-600 mb-1">54cm</div>
                        <div className="text-sm text-green-700">Current Length</div>
                        <div className="text-xs text-green-600 mt-1">Steady growth</div>
                      </div>
                      
                      <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                        <div className="text-2xl font-bold text-purple-600 mb-1">6-8</div>
                        <div className="text-sm text-purple-700">Daily Feedings</div>
                        <div className="text-xs text-purple-600 mt-1">Every 2-3 hours</div>
                      </div>
                      
                      <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                        <div className="text-2xl font-bold text-orange-600 mb-1">14-17</div>
                        <div className="text-sm text-orange-700">Sleep Hours</div>
                        <div className="text-xs text-orange-600 mt-1">Per 24 hours</div>
                      </div>
                    </div>

                    {/* This Week's Focus Areas */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-4">🎯 This Week's Development Focus</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-blue-600 text-lg">👀</span>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">Visual Tracking</div>
                            <div className="text-sm text-gray-600 mt-1">Baby follows objects with eyes horizontally</div>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200">
                          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-green-600 text-lg">😊</span>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">Social Smiles</div>
                            <div className="text-sm text-gray-600 mt-1">First responsive smiles to faces and voices</div>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-purple-600 text-lg">💪</span>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">Head Control</div>
                            <div className="text-sm text-gray-600 mt-1">Lifts head briefly during tummy time</div>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-pink-50 to-orange-50 rounded-xl border border-pink-200">
                          <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-pink-600 text-lg">🗣️</span>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">Vocalization</div>
                            <div className="text-sm text-gray-600 mt-1">Makes cooing and gurgling sounds</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Development Activities */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-4">🧩 Recommended Activities This Week</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white border border-gray-200 rounded-xl p-4">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                              <span className="text-yellow-600">⭐</span>
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">Face-to-Face Time</div>
                              <div className="text-xs text-gray-500">5-10 minutes, 3x daily</div>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600">Hold baby 8-12 inches from your face and make exaggerated expressions</p>
                        </div>
                        
                        <div className="bg-white border border-gray-200 rounded-xl p-4">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                              <span className="text-blue-600">🔔</span>
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">Sound Tracking</div>
                              <div className="text-xs text-gray-500">2-3 minutes, 2x daily</div>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600">Gently shake a rattle and move it slowly for baby to follow with eyes</p>
                        </div>
                        
                        <div className="bg-white border border-gray-200 rounded-xl p-4">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                              <span className="text-green-600">🔄</span>
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">Tummy Time</div>
                              <div className="text-xs text-gray-500">3-5 minutes, 2-3x daily</div>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600">Place baby on tummy while awake and supervised to strengthen neck muscles</p>
                        </div>
                        
                        <div className="bg-white border border-gray-200 rounded-xl p-4">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                              <span className="text-purple-600">🎵</span>
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">Vocal Play</div>
                              <div className="text-xs text-gray-500">Throughout the day</div>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600">Imitate baby's sounds and have "conversations" to encourage vocalization</p>
                        </div>
                      </div>
                    </div>

                    {/* Health & Safety Checklist */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-4">🏥 Health & Safety Checklist</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-green-600 text-sm">✓</span>
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">Weight Check</div>
                            <div className="text-sm text-gray-600">Weekly growth monitoring</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-green-600 text-sm">✓</span>
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">Feeding Pattern</div>
                            <div className="text-sm text-gray-600">8-12 feeds per 24 hours</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                          <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-yellow-600 text-sm">!</span>
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">Sleep Safety</div>
                            <div className="text-sm text-gray-600">Back to sleep, clear crib</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-blue-600 text-sm">○</span>
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">Vaccination Prep</div>
                            <div className="text-sm text-gray-600">Schedule 2-month vaccines</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Development Notes */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">📝 Development Observations & Notes</h4>
                      <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                        <textarea 
                          className="w-full h-32 bg-white border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="Record your observations: When did you notice the first social smile? How is head control progressing? Any concerns about feeding or sleep patterns?"
                        ></textarea>
                        <div className="flex justify-between items-center mt-3">
                          <div className="flex gap-2">
                            <button className="px-3 py-1 bg-white border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition-colors">
                              Add Photo
                            </button>
                            <button className="px-3 py-1 bg-white border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition-colors">
                              Record Video
                            </button>
                          </div>
                          <button className="px-4 py-2 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700 transition-colors font-semibold">
                            Save Development Log
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Health Tools */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button className="bg-white p-4 rounded-xl shadow-md border border-gray-200 hover:border-blue-300 transition-colors text-center group">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200 transition-colors">
                        <span className="text-blue-600 text-xl">📈</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">Growth Charts</h4>
                      <p className="text-gray-500 text-sm">Track percentiles & trends</p>
                    </button>

                    <button className="bg-white p-4 rounded-xl shadow-md border border-gray-200 hover:border-green-300 transition-colors text-center group">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-green-200 transition-colors">
                        <span className="text-green-600 text-xl">💉</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">Vaccination Tracker</h4>
                      <p className="text-gray-500 text-sm">Schedule & records</p>
                    </button>

                    <button className="bg-white p-4 rounded-xl shadow-md border border-gray-200 hover:border-orange-300 transition-colors text-center group">
                      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-orange-200 transition-colors">
                        <span className="text-orange-600 text-xl">📋</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">Health Log</h4>
                      <p className="text-gray-500 text-sm">Symptoms & medications</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Care Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {topics.map((topic) => (
                <CareCard
                  key={topic.id}
                  title={topic.title}
                  subtitle={topic.subtitle}
                  icon={topic.icon}
                  gradient={topic.gradient}
                  onClick={() => setSelectedTopic(topic.id)}
                />
              ))}
            </div>

            {/* Daily Tips */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">💡 Daily Parenting Tip</h3>
              <p className="text-xl font-medium">{dailyTips[currentTip]}</p>
            </div>

            {/* Footer Quote */}
            <div className="text-center py-8">
              <p className="text-gray-600 italic">
                "Tradition meets care — in your Baby Care Hub."
              </p>
            </div>
          </>
        )}

        {activeSection === 'videos' && (
          <div className="space-y-16">
            {/* Hero Section */}
            <section className="text-center py-8">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                Baby Care Video Guides
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Professional parenting advice, traditional wisdom, and modern techniques in beautiful, engaging videos
              </p>
            </section>

            {/* Recommended Videos */}
            <section className="relative">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Guides</h2>
                  <p className="text-gray-600">Essential baby care techniques from experts</p>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-semibold">
                  {landscapeVideos.length} Videos
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {landscapeVideos.map((video, index) => (
                  <VideoCard 
                    key={video.id} 
                    video={video} 
                    type="landscape" 
                    index={index}
                  />
                ))}
              </div>
            </section>

            {/* Shorts Section */}
            <section className="relative">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-1 rounded-full font-bold text-sm">
                    SHORTS
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Quick Tips & Tricks</h2>
                  </div>
                </div>
                <div className="text-gray-500 font-semibold">
                  {shortsVideos.length} Shorts
                </div>
              </div>

              {/* Shorts Horizontal Scroll */}
              <div className="relative">
                <div className="flex space-x-6 overflow-x-auto pb-8 hide-scrollbar">
                  {shortsVideos.map((short, index) => (
                    <ShortsCard 
                      key={short.id} 
                      short={short} 
                      index={index}
                      onShortsClick={handleShortsClick}
                    />
                  ))}
                </div>
                
                {/* Scroll Indicator */}
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-l from-white to-transparent w-20 h-full pointer-events-none" />
              </div>
            </section>

            {/* Parent Guides Section */}
            <section className="relative">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Parent Wellness Guides</h2>
                  <p className="text-gray-600">Self-care and wellness for new parents</p>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 rounded-full font-semibold">
                  {parentGuidesVideos.length} Guides
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {parentGuidesVideos.map((video, index) => (
                  <VideoCard 
                    key={video.id} 
                    video={video} 
                    type="landscape" 
                    index={index + landscapeVideos.length + mixVideos.length}
                  />
                ))}
              </div>
            </section>

            {/* Mix Section */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Learning Series</h2>
                  <p className="text-gray-600">Comprehensive baby development guides</p>
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full font-semibold">
                  Mixed Content
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mixVideos.map((video, index) => (
                  <VideoCard 
                    key={video.id} 
                    video={video} 
                    type="landscape" 
                    index={index + landscapeVideos.length}
                  />
                ))}
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Modal */}
      {selectedTopic && (
        <Modal 
          isOpen={selectedTopic !== null}
          onClose={() => setSelectedTopic(null)}
          title={currentTopic?.title || ''}
        >
          {renderModalContent(selectedTopic)}
        </Modal>
      )}

      {/* Enhanced Fullscreen Shorts Player */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 bg-black z-50"
          onWheel={handleScroll}
        >
          <div className="h-screen flex flex-col">
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/70 to-transparent p-6">
              <div className="flex justify-between items-center">
                <button
                  onClick={toggleFullscreen}
                  className="text-white p-3 rounded-full hover:bg-white/20 transition-colors duration-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="text-white font-bold text-lg bg-white/20 backdrop-blur-lg px-4 py-2 rounded-full">
                  Shorts • {currentShortIndex + 1}/{shortsVideos.length}
                </div>
                <div className="w-12"></div>
              </div>
            </div>

            {/* Video Container */}
            <div className="flex-1 flex items-center justify-center relative">
              {shortsVideos.map((short, index) => (
                <div
                  key={short.id}
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                    index === currentShortIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <video
                    ref={el => videoRefs.current[index] = el}
                    src={short.videoUrl}
                    className="w-full h-full object-contain"
                    muted={muted}
                    loop={false}
                    playsInline
                    onEnded={handleVideoEnd}
                    onClick={togglePlayPause}
                  />
                </div>
              ))}

              {/* Play/Pause Overlay */}
              {!isPlaying && (
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer z-30"
                  onClick={togglePlayPause}
                >
                  <div className="bg-white/20 backdrop-blur-lg rounded-full p-6">
                    <div className="bg-white rounded-full p-8">
                      <span className="text-6xl text-gray-800">▶</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Video Info */}
              <div className="absolute bottom-24 left-6 text-white max-w-md z-40">
                <h3 className="text-2xl font-bold mb-3 drop-shadow-2xl">{shortsVideos[currentShortIndex]?.title}</h3>
              </div>

              {/* Progress Dots */}
              <div className="absolute top-1/2 right-8 transform -translate-y-1/2 flex flex-col gap-3 z-40">
                {shortsVideos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentShortIndex(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      i === currentShortIndex 
                        ? 'bg-white scale-125' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/80 text-sm z-40">
              <div className="bg-black/50 backdrop-blur-lg px-6 py-3 rounded-full">
                <span>Scroll or use buttons to navigate • {currentShortIndex + 1}/{shortsVideos.length}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}