import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const BabyCareHub = () => {
  const [activeSection, setActiveSection] = useState('care-hub');
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [currentTip, setCurrentTip] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);

  // Video states
  const [currentShortIndex, setCurrentShortIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // Mini player states
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isMiniPlayerOpen, setIsMiniPlayerOpen] = useState(false);
  const [isMiniPlayerMinimized, setIsMiniPlayerMinimized] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
  const videoRefs = useRef([]);
  const modalRef = useRef();

  // Data
  const topics = [ 
    { 
      id: 'daily-care', 
      title: 'Daily Care & Routines', 
      subtitle: 'Feeding, diapering, bath time, gentle skincare, daily routines.', 
      icon: '👶', 
      gradient: 'bg-gradient-to-br from-pink-400 to-pink-600' 
    }, 
    { 
      id: 'traditional-wisdom', 
      title: 'Elderly / Traditional Wisdom', 
      subtitle: 'Timeless care practices passed down safely.', 
      icon: '✨', 
      gradient: 'bg-gradient-to-br from-blue-400 to-blue-600' 
    }, 
    { 
      id: 'community-wellness', 
      title: 'Community & Parent Wellness', 
      subtitle: "You're not alone — connect & care for yourself too.", 
      icon: '👥', 
      gradient: 'bg-gradient-to-br from-purple-400 to-purple-600' 
    } 
  ];

  const dailyTips = [ 
    "Massage your baby's legs gently after bath.", 
    "Talk often — your voice builds connection.", 
    "Keep tummy time fun with toys.", 
    "A calm baby begins with a calm parent." 
  ];

  const sections = [
    {
      id: 'growth',
      title: 'Growth & Development Milestones',
      emoji: '👶',
      gradient: 'bg-gradient-to-br from-pink-400 to-pink-600',
      content: {
        description: 'Track your baby\'s amazing development journey from 0-5 years',
        ageRanges: [
          {
            age: '0–6 Months',
            milestones: ['Learns to lift head', 'Recognize faces', 'Respond to sounds'],
            tips: ['Encourage tummy time', 'Gentle talking', 'Smiling responses']
          },
          {
            age: '6–12 Months',
            milestones: ['Crawls', 'Sits independently', 'Babbles', 'Imitates expressions'],
            tips: ['Use colorful toys', 'Play peek-a-boo', 'Safe exploration']
          },
          {
            age: '1–2 Years',
            milestones: ['Starts walking', 'Says first words', 'Learns self-feeding'],
            tips: ['Provide safe spaces', 'Read picture books', 'Encourage trying new things']
          },
          {
            age: '2–3 Years',
            milestones: ['Speaks small sentences', 'Understands emotions', 'Follows simple instructions'],
            tips: ['Allow choice-making', 'Practice patience', 'Positive reinforcement']
          },
          {
            age: '3–5 Years',
            milestones: ['Runs and jumps', 'Shares toys', 'Learns basic counting', 'Dresses independently'],
            tips: ['Teach emotional control', 'Introduce preschool readiness', 'Encourage social play']
          }
        ]
      }
    },
    {
      id: 'nutrition',
      title: 'Nutrition & Food Guide',
      emoji: '🍼',
      gradient: 'bg-gradient-to-br from-green-400 to-green-600',
      content: {
        description: 'Healthy eating habits for your growing baby',
        guidelines: [
          {
            age: '0–6 Months',
            foods: 'Breast milk or formula only',
            tips: ['Feed on demand', 'Ensure burping after feeding']
          },
          {
            age: '6–12 Months',
            foods: 'Mashed fruits, veggies, rice cereal, soft dal',
            tips: ['Start with single-ingredient foods', 'Introduce gradually']
          },
          {
            age: '1–2 Years',
            foods: 'Family foods — rice, roti, paneer, fruits, lentils',
            tips: ['Offer variety', 'Encourage self-feeding']
          },
          {
            age: '2–5 Years',
            foods: 'Balanced meals — proteins, whole grains, milk, veggies, fruits',
            tips: ['Limit processed snacks', 'Encourage water drinking']
          }
        ],
        warnings: ['Avoid honey before 1 year', 'Avoid too much salt and sugar', 'No processed snacks']
      }
    },
    {
      id: 'emotional',
      title: 'Emotional Bonding & Pampering',
      emoji: '💕',
      gradient: 'bg-gradient-to-br from-red-400 to-red-600',
      content: {
        description: 'Build lifelong trust through loving connections',
        dailyRituals: [
          'Skin-to-skin hugs',
          'Gentle lullabies',
          'Smile and respond to coos',
          'Maintain eye contact during feeding'
        ],
        dos: [
          'Comfort crying with presence, not distractions',
          'Maintain consistent routines',
          'Respond promptly to needs',
          'Use gentle touch and massage'
        ],
        donts: [
          'Avoid over-buying toys; focus on attention',
          'Avoid using screens as comfort',
          "Don't rush bonding moments",
          'Avoid harsh tones or sudden movements'
        ],
        tip: 'Emotional safety builds lifelong trust and secure attachment.'
      }
    },
    {
      id: 'screen-time',
      title: 'Screen Time Guidelines',
      emoji: '📱',
      gradient: 'bg-gradient-to-br from-blue-400 to-blue-600',
      content: {
        description: 'Healthy digital habits for developing minds',
        guidelines: [
          {
            age: '0–2 Years',
            recommendation: 'No screens',
            details: 'Focus on real-world play and interactions'
          },
          {
            age: '2–5 Years',
            recommendation: '< 1 hour/day',
            details: 'Co-watch educational content together'
          }
        ],
        alternatives: [
          'Outdoor play and exploration',
          'Reading physical books together',
          'Art & creative activities',
          'Music and movement',
          'Puzzle games and building blocks'
        ]
      }
    },
    {
      id: 'activities',
      title: 'Motor & Cognitive Activities',
      emoji: '🧩',
      gradient: 'bg-gradient-to-br from-purple-400 to-purple-600',
      content: {
        description: 'Fun activities to support physical and mental development',
        ageActivities: [
          {
            age: '0–1 Year',
            activities: ['Grasping toys', 'Tummy time', 'Reaching for objects', 'Texture exploration'],
            tips: ['Use safe open space', 'Supervise closely']
          },
          {
            age: '1–3 Years',
            activities: ['Stacking blocks', 'Pushing small carts', 'Dancing to music', 'Simple puzzles'],
            tips: ['Encourage repetition', 'Praise efforts']
          },
          {
            age: '3–5 Years',
            activities: ['Tricycle riding', 'Shape-sorting', 'Drawing and coloring', 'Obstacle courses'],
            tips: ['Let them fall and try again', 'Build coordination and confidence']
          }
        ]
      }
    },
    {
      id: 'storytelling',
      title: 'Storytelling & Language Growth',
      emoji: '📚',
      gradient: 'bg-gradient-to-br from-yellow-400 to-yellow-600',
      content: {
        description: 'Nurture imagination and communication skills through stories',
        benefits: ['Improves speech development', 'Builds imagination', 'Expands emotional vocabulary', 'Strengthens bond'],
        ageApproach: [
          {
            age: '0–1 Year',
            approach: 'Simple rhymes and sounds',
            examples: ['Nursery rhymes', 'Animal sounds', 'Peek-a-boo games']
          },
          {
            age: '1–3 Years',
            approach: 'Picture stories and animal tales',
            examples: ['Board books', 'Simple narratives', 'Repetitive phrases']
          },
          {
            age: '3–5 Years',
            approach: 'Short moral stories with feelings',
            examples: ['Sharing stories', 'Kindness tales', 'Adventure stories']
          }
        ],
        stories: [
          {
            title: 'The Kind Elephant 🐘',
            content: 'Ellie the elephant always shared her water with thirsty animals in the forest. One day, when she needed help, all her friends came to support her.'
          },
          {
            title: 'Tiny Turtle Learns Patience 🐢',
            content: 'Tommy Turtle wanted to do everything fast, but he learned that taking his time helped him do things better and enjoy the journey.'
          },
          {
            title: 'Moonlight Lullaby 🌙',
            content: 'Every night, Mama Owl would sing a gentle lullaby that helped all the forest animals sleep peacefully under the moonlight.'
          }
        ]
      }
    }
  ];

  // Enhanced Video Data from first content
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
      videoUrl: './videoguide4.mp4',
      title: 'Mirror Behaviour',
    },
    {
      id: 5,
      videoUrl: './videoguide5.mp4',
      title: 'Mirror Behaviour',
    },
    {
      id: 6,
      videoUrl: './videoguide6.mp4',
      title: 'Mirror Behaviour',
    },
    {
      id: 7,
      videoUrl: './videoguide7.mp4',
      title: 'Mirror Behaviour',
    },
    {
      id: 8,
      videoUrl: './videoguide8.mp4',
      title: 'Mirror Behaviour',
    },
    {
      id: 9,
      videoUrl: './videoguide9.mp4',
      title: 'Mirror Behaviour',
    },
    {
      id: 10,
      videoUrl: './vs1.mp4',
      title: 'Entertainment Shorts',
    },
    {
      id: 11,
      videoUrl: './vs2.mp4',
      title: 'Entertainment Shorts',
    },
    {
      id: 12,
      videoUrl: './vs3.mp4',
      title: 'Entertainment Shorts',
    },
    {
      id: 13,
      videoUrl: './vs4.mp4',
      title: 'Entertainment Shorts',
    },
    {
      id: 14,
      videoUrl: './vs5.mp4',
      title: 'Entertainment Shorts',
    },
    {
      id: 15,
      videoUrl: './vs6.mp4',
      title: 'Entertainment Shorts',
    },
    {
      id: 16,
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

  // Combine all videos for navigation
  const allVideos = [...landscapeVideos, ...mixVideos, ...parentGuidesVideos];

  // Effects
  useEffect(() => { 
    const timer = setInterval(() => { 
      setCurrentTip((prev) => (prev + 1) % dailyTips.length); 
    }, 5000); 
    return () => clearInterval(timer); 
  }, [dailyTips.length]);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
        setSelectedSection(null);
      }
    };

    if (showModal) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [showModal]);

  // Video Handlers from first content
  const handleShortsClick = (index) => {
    setCurrentShortIndex(index);
    setIsFullscreen(true);
    setIsPlaying(true);
    document.body.style.overflow = 'hidden';
  };

  const handleVideoPlay = (video, index) => {
    setCurrentVideo(video);
    setCurrentVideoIndex(index);
    setIsMiniPlayerOpen(true);
    setIsMiniPlayerMinimized(false);
  };

  const toggleMiniPlayerSize = () => {
    setIsMiniPlayerMinimized(!isMiniPlayerMinimized);
  };

  const closeMiniPlayer = () => {
    setIsMiniPlayerOpen(false);
    setCurrentVideo(null);
  };

  const playNextVideo = () => {
    const nextIndex = (currentVideoIndex + 1) % allVideos.length;
    setCurrentVideo(allVideos[nextIndex]);
    setCurrentVideoIndex(nextIndex);
  };

  const playPreviousVideo = () => {
    const prevIndex = currentVideoIndex === 0 ? allVideos.length - 1 : currentVideoIndex - 1;
    setCurrentVideo(allVideos[prevIndex]);
    setCurrentVideoIndex(prevIndex);
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
    const newMutedState = !muted;
    setMuted(newMutedState);
    
    // Update all video elements
    videoRefs.current.forEach(video => {
      if (video) {
        video.muted = newMutedState;
      }
    });
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
      
      // Sync mute state with current video
      currentVideo.muted = muted;
      
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
  }, [currentShortIndex, isPlaying, isFullscreen, muted]);

  // Handlers
  const handleSectionClick = (section) => {
    setSelectedSection(section);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedSection(null);
  };

  // Sub-components
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

  // Video Card Component from first content
  const VideoCard = ({ video, type = 'landscape', index, onVideoPlay }) => {
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = useRef(null);

    const handleClick = () => {
      if (onVideoPlay) {
        onVideoPlay(video, index);
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

  // Shorts Card from first content
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

  // Mini Video Player Component from first content
  const MiniVideoPlayer = ({ video, isMinimized, onToggleSize, onClose, onNext, onPrevious }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(0.5);
    const [showVolume, setShowVolume] = useState(false);

    useEffect(() => {
      const video = videoRef.current;
      if (!video) return;

      const updateTime = () => setCurrentTime(video.currentTime);
      const updateDuration = () => setDuration(video.duration);
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);

      video.addEventListener('timeupdate', updateTime);
      video.addEventListener('loadedmetadata', updateDuration);
      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);

      return () => {
        video.removeEventListener('timeupdate', updateTime);
        video.removeEventListener('loadedmetadata', updateDuration);
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
      };
    }, []);

    const togglePlay = () => {
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
      }
    };

    const handleSeek = (e) => {
      if (videoRef.current) {
        const newTime = (e.target.value / 100) * duration;
        videoRef.current.currentTime = newTime;
        setCurrentTime(newTime);
      }
    };

    const handleVolumeChange = (e) => {
      const newVolume = parseFloat(e.target.value);
      setVolume(newVolume);
      if (videoRef.current) {
        videoRef.current.volume = newVolume;
      }
    };

    const toggleMute = () => {
      if (videoRef.current) {
        videoRef.current.muted = !videoRef.current.muted;
        if (videoRef.current.muted) {
          setVolume(0);
        } else {
          setVolume(0.5);
        }
      }
    };

    const formatTime = (time) => {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    if (isMinimized) {
      return (
        <div className="fixed bottom-4 right-4 w-80 bg-black rounded-xl shadow-2xl z-50 border border-gray-700 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-3 bg-gray-900">
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                {video.channel?.charAt(0) || 'C'}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-medium truncate">{video.title}</p>
                <p className="text-gray-400 text-xs truncate">{video.channel}</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={onToggleSize}
                className="text-gray-400 hover:text-white p-1 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                </svg>
              </button>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white p-1 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Video */}
          <div className="relative aspect-video bg-black">
            <video
              ref={videoRef}
              src={video.videoUrl}
              className="w-full h-full object-contain"
              playsInline
              loop={false}
              volume={volume}
            />
            
            {/* Play/Pause Overlay */}
            <div 
              className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer"
              onClick={togglePlay}
            >
              <div className="bg-white/20 backdrop-blur-lg rounded-full p-2">
                <div className="bg-white rounded-full p-2">
                  <span className="text-xl text-gray-800">
                    {isPlaying ? '❚❚' : '▶'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="p-3 bg-gray-900">
            <div className="flex items-center gap-2 mb-2">
              <button
                onClick={togglePlay}
                className="text-white p-1 hover:bg-white/20 rounded transition-colors"
              >
                {isPlaying ? (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6zM14 4h4v16h-4z"/>
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                )}
              </button>

              <div className="flex-1 text-white text-xs">
                {formatTime(currentTime)} / {formatTime(duration)}
              </div>

              <div className="relative">
                <button
                  onClick={toggleMute}
                  className="text-white p-1 hover:bg-white/20 rounded transition-colors"
                  onMouseEnter={() => setShowVolume(true)}
                >
                  {volume === 0 ? (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
                    </svg>
                  )}
                </button>

                {showVolume && (
                  <div 
                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-black/90 backdrop-blur-lg rounded-lg p-3"
                    onMouseLeave={() => setShowVolume(false)}
                  >
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={volume}
                      onChange={handleVolumeChange}
                      className="w-20 h-1 bg-gray-600 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Progress Bar */}
            <input
              type="range"
              min="0"
              max="100"
              value={(currentTime / duration) * 100 || 0}
              onChange={handleSeek}
              className="w-full h-1 bg-gray-600 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
            />
          </div>
        </div>
      );
    }

    // Fullscreen Mode
    return (
      <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white p-2 hover:bg-white/20 rounded-full transition-colors z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Minimize Button */}
        <button
          onClick={onToggleSize}
          className="absolute top-4 right-16 text-white p-2 hover:bg-white/20 rounded-full transition-colors z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5v14" />
          </svg>
        </button>

        {/* Video Container */}
        <div className="w-full max-w-6xl mx-4">
          {/* Video */}
          <div className="relative aspect-video bg-black rounded-xl overflow-hidden">
            <video
              ref={videoRef}
              src={video.videoUrl}
              className="w-full h-full object-contain"
              playsInline
              loop={false}
              volume={volume}
              autoPlay
            />
            
            {/* Controls Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <div className="flex items-center gap-4 mb-4">
                <button
                  onClick={togglePlay}
                  className="text-white p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  {isPlaying ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 4h4v16H6zM14 4h4v16h-4z"/>
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </button>

                <div className="flex-1 text-white text-lg">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </div>

                <div className="relative">
                  <button
                    onClick={toggleMute}
                    className="text-white p-2 hover:bg-white/20 rounded-full transition-colors"
                    onMouseEnter={() => setShowVolume(true)}
                  >
                    {volume === 0 ? (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                      </svg>
                    ) : (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
                      </svg>
                    )}
                  </button>

                  {showVolume && (
                    <div 
                      className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-black/90 backdrop-blur-lg rounded-lg p-3"
                      onMouseLeave={() => setShowVolume(false)}
                    >
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="w-20 h-1 bg-gray-600 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Progress Bar */}
              <input
                type="range"
                min="0"
                max="100"
                value={(currentTime / duration) * 100 || 0}
                onChange={handleSeek}
                className="w-full h-2 bg-gray-600 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
              />
            </div>
          </div>

          {/* Video Info */}
          <div className="mt-6 text-white">
            <h2 className="text-2xl font-bold mb-2">{video.title}</h2>
            <div className="flex items-center gap-4 text-gray-300">
              <span className="font-medium">{video.channel}</span>
              <span>{video.views}</span>
              <span>{video.time}</span>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={onPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-4 hover:bg-white/20 rounded-full transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-4 hover:bg-white/20 rounded-full transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    );
  };

  // Section Modal Component
  const SectionModal = () => {
    if (!selectedSection) return null;

    const renderSectionContent = () => {
      switch (selectedSection.id) {
        case 'growth':
          return (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">📈 Development Timeline</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selectedSection.content.ageRanges.map((range, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                    <h4 className="text-lg font-bold text-pink-700 mb-3">{range.age}</h4>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-semibold text-purple-600 text-sm mb-2">Key Milestones:</h5>
                        <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                          {range.milestones.map((milestone, idx) => (
                            <li key={idx}>{milestone}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-green-600 text-sm mb-2">Parent Tips:</h5>
                        <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                          {range.tips.map((tip, idx) => (
                            <li key={idx}>{tip}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );

        case 'nutrition':
          return (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">🍎 Feeding Guidelines</h3>
              <div className="space-y-4">
                {selectedSection.content.guidelines.map((guide, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 border border-gray-200">
                    <h4 className="text-lg font-bold text-green-700 mb-2">{guide.age}</h4>
                    <p className="text-gray-800 font-medium mb-3">{guide.foods}</p>
                    <div className="bg-yellow-50 rounded-lg p-3">
                      <h5 className="font-semibold text-yellow-800 text-sm mb-2">Tips:</h5>
                      <ul className="list-disc list-inside text-sm space-y-1 text-yellow-700">
                        {guide.tips.map((tip, idx) => (
                          <li key={idx}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                <h4 className="text-lg font-bold text-red-700 mb-3">⚠ Important Warnings</h4>
                <ul className="list-disc list-inside text-sm space-y-2 text-red-700">
                  {selectedSection.content.warnings.map((warning, idx) => (
                    <li key={idx}>{warning}</li>
                  ))}
                </ul>
              </div>
            </div>
          );

        case 'emotional':
          return (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">💖 Bonding & Connection</h3>
              
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <h4 className="text-lg font-bold text-blue-700 mb-3">🌟 Daily Rituals</h4>
                <ul className="list-disc list-inside text-sm space-y-2 text-blue-700">
                  {selectedSection.content.dailyRituals.map((ritual, idx) => (
                    <li key={idx}>{ritual}</li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                  <h4 className="text-lg font-bold text-green-700 mb-3">✅ Do's</h4>
                  <ul className="list-disc list-inside text-sm space-y-2 text-green-700">
                    {selectedSection.content.dos.map((doItem, idx) => (
                      <li key={idx}>{doItem}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                  <h4 className="text-lg font-bold text-red-700 mb-3">❌ Don'ts</h4>
                  <ul className="list-disc list-inside text-sm space-y-2 text-red-700">
                    {selectedSection.content.donts.map((dont, idx) => (
                      <li key={idx}>{dont}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <p className="text-purple-700 text-sm italic">💡 {selectedSection.content.tip}</p>
              </div>
            </div>
          );

        case 'screen-time':
          return (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">📱 Digital Wellness</h3>
              
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <h4 className="text-lg font-bold text-blue-700 mb-4">Recommended Guidelines</h4>
                <div className="space-y-4">
                  {selectedSection.content.guidelines.map((guide, index) => (
                    <div key={index} className="flex items-start gap-4 p-3 bg-gray-50 rounded-lg">
                      <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold min-w-20 text-center">
                        {guide.age}
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800">{guide.recommendation}</h5>
                        <p className="text-sm text-gray-600 mt-1">{guide.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                <h4 className="text-lg font-bold text-green-700 mb-3">🎯 Healthy Alternatives</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedSection.content.alternatives.map((alternative, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-green-700">
                      <span className="text-green-500">✓</span>
                      {alternative}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );

        case 'activities':
          return (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">🎯 Development Activities</h3>
              
              <div className="space-y-6">
                {selectedSection.content.ageActivities.map((ageGroup, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 border border-gray-200">
                    <h4 className="text-lg font-bold text-purple-700 mb-3">{ageGroup.age}</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-blue-600 text-sm mb-2">Activities:</h5>
                        <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                          {ageGroup.activities.map((activity, idx) => (
                            <li key={idx}>{activity}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-green-600 text-sm mb-2">Tips:</h5>
                        <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                          {ageGroup.tips.map((tip, idx) => (
                            <li key={idx}>{tip}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );

        case 'storytelling':
          return (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">📖 Language & Imagination</h3>
              
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <h4 className="text-lg font-bold text-blue-700 mb-3">✨ Benefits of Storytelling</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedSection.content.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-blue-700">
                      <span className="text-blue-500">🌟</span>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-bold text-gray-800">Age-Appropriate Approaches</h4>
                {selectedSection.content.ageApproach.map((approach, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 border border-gray-200">
                    <h5 className="font-bold text-yellow-700 mb-2">{approach.age}</h5>
                    <p className="text-sm text-gray-600 mb-3">{approach.approach}</p>
                    <div className="flex flex-wrap gap-2">
                      {approach.examples.map((example, idx) => (
                        <span key={idx} className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-bold text-gray-800">📚 Example Stories</h4>
                {selectedSection.content.stories.map((story, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 border border-gray-200">
                    <h5 className="font-bold text-purple-700 mb-2">{story.title}</h5>
                    <p className="text-sm text-gray-700 leading-relaxed">{story.content}</p>
                  </div>
                ))}
              </div>
            </div>
          );

        default:
          return null;
      }
    };

    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div 
          ref={modalRef}
          className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden transform transition-all duration-300 scale-100"
        >
          {/* Modal Header */}
          <div className={`${selectedSection.gradient} p-6 text-white relative`}>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors duration-200 text-2xl w-8 h-8 flex items-center justify-center"
            >
              ×
            </button>
            <div className="flex items-center gap-4">
              <div className="text-4xl">{selectedSection.emoji}</div>
              <div>
                <h2 className="text-2xl font-bold">{selectedSection.title}</h2>
                <p className="text-white/90 mt-1">{selectedSection.content.description}</p>
              </div>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 max-h-[calc(90vh-120px)] overflow-y-auto">
            {renderSectionContent()}
          </div>

          {/* Modal Footer */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <p className="text-gray-600 text-sm">
                Use this guidance to support your baby's unique development journey
              </p>
              <button
                onClick={closeModal}
                className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">
      {/* Navigation Header */}
      <header className="bg-white/90 backdrop-blur-lg shadow-lg border-b border-pink-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className='flex items-center space-x-3'>
              <div className="bg-gradient-to-br from-pink-500 to-blue-500 rounded-xl p-2">
                <span className="text-white text-2xl">👶</span>
              </div>
              <h1 className="text-3xl font-black bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
                Baby Care Hub
              </h1>
            </Link>
            
            <nav className="flex gap-2 bg-white/80 backdrop-blur-sm rounded-2xl p-1.5 shadow-lg border border-pink-200">
              <button
                onClick={() => setActiveSection('care-hub')}
                className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                  activeSection === 'care-hub'
                    ? 'bg-gradient-to-r from-pink-500 to-blue-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-pink-600 hover:bg-white/50'
                }`}
              >
                Care Hub
              </button>
              <button
                onClick={() => setActiveSection('videos')}
                className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                  activeSection === 'videos'
                    ? 'bg-gradient-to-r from-pink-500 to-blue-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-pink-600 hover:bg-white/50'
                }`}
              >
                Video Guides
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Care Hub Section */}
        {activeSection === 'care-hub' && (
          <div className="space-y-12">
            {/* Hero Section */}
            <div className="text-center py-8">
              <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent mb-6">
                Complete Baby Care Guide
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Professional guidance, traditional wisdom, and modern techniques to nurture your child's development from newborn to preschool years.
              </p>
            </div>

            {/* Care Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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
            <div className="bg-gradient-to-r from-pink-500 to-blue-500 rounded-2xl p-8 text-white text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">💡 Daily Parenting Tip</h3>
              <p className="text-xl font-medium">{dailyTips[currentTip]}</p>
            </div>

            {/* Educational Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sections.map((section) => (
                <div 
                  key={section.id} 
                  className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-white/50 transition-all duration-500 ease-in-out hover:shadow-xl cursor-pointer"
                  onClick={() => handleSectionClick(section)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{section.emoji}</span>
                      <h3 className="text-xl font-bold text-purple-700">{section.title}</h3>
                    </div>
                    <span className="text-2xl text-pink-500 transform transition-transform duration-300">
                      👆
                    </span>
                  </div>
                  <p className="mt-2 text-pink-700 font-semibold text-sm">{section.content.description}</p>
                  <p className="mt-3 text-gray-500 text-sm">Click to view detailed guide →</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Video Guides Section */}
        {activeSection === 'videos' && (
          <div className="space-y-16">
            {/* Hero Section */}
            <section className="text-center py-8">
              <h1 className="text-5xl font-black bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent mb-6">
                Baby Care Video Guides
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Professional parenting advice, traditional wisdom, and modern techniques in beautiful, engaging videos
              </p>
            </section>

            {/* Featured Videos */}
            <section className="relative">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Guides</h2>
                  <p className="text-gray-600">Essential baby care techniques from experts</p>
                </div>
                <div className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-6 py-2 rounded-full font-bold">
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
                    onVideoPlay={handleVideoPlay}
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
                    index={index + landscapeVideos.length}
                    onVideoPlay={handleVideoPlay}
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
                    onVideoPlay={handleVideoPlay}
                  />
                ))}
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Section Modal */}
      {showModal && <SectionModal />}

      {/* Mini Video Player */}
      {isMiniPlayerOpen && currentVideo && (
        <MiniVideoPlayer
          video={currentVideo}
          isMinimized={isMiniPlayerMinimized}
          onToggleSize={toggleMiniPlayerSize}
          onClose={closeMiniPlayer}
          onNext={playNextVideo}
          onPrevious={playPreviousVideo}
        />
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
                {/* Mute/Unmute Button */}
                <button
                  onClick={toggleMute}
                  className="text-white p-3 rounded-full hover:bg-white/20 transition-colors duration-300"
                >
                  {muted ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M12 6a9 9 0 010 12m-4.5-9.5L12 3v18l-4.5-4.5H4a1 1 0 01-1-1v-7a1 1 0 011-1h3.5z" />
                    </svg>
                  )}
                </button>
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
                    ref={el => {
                      videoRefs.current[index] = el;
                      // Sync mute state when video element is created
                      if (el && index === currentShortIndex) {
                        el.muted = muted;
                      }
                    }}
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

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-lg border-t border-pink-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-600">
              "Tradition meets modern care — in your Baby Care Hub."
            </p>
          </div>
        </div>
      </footer>

      <style>{`
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
};

export default BabyCareHub;