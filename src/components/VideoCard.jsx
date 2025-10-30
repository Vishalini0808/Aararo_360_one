import React, { useState, useEffect, useRef } from 'react';

// Video Card Component
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

// Shorts Card Component
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

// Fullscreen Shorts Player Component
const FullscreenShortsPlayer = ({ 
  isOpen, 
  onClose, 
  shortsVideos, 
  currentShortIndex, 
  setCurrentShortIndex,
  isPlaying,
  setIsPlaying,
  muted,
  setMuted 
}) => {
  const videoRefs = useRef([]);

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
    if (!isOpen) return;
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
    if (isOpen && videoRefs.current[currentShortIndex]) {
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
  }, [currentShortIndex, isPlaying, isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black z-50"
      onWheel={handleScroll}
    >
      <div className="h-screen flex flex-col">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/70 to-transparent p-6">
          <div className="flex justify-between items-center">
            <button
              onClick={onClose}
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
  );
};

// Main Video Guides Component
const VideoGuides = () => {
  const [currentShortIndex, setCurrentShortIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Video Data
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Navigation Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-pink-400 to-purple-600 rounded-full p-2">
                <span className="text-white text-xl">🎬</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Baby Care Video Guides</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
      </main>

      {/* Fullscreen Shorts Player */}
      <FullscreenShortsPlayer
        isOpen={isFullscreen}
        onClose={toggleFullscreen}
        shortsVideos={shortsVideos}
        currentShortIndex={currentShortIndex}
        setCurrentShortIndex={setCurrentShortIndex}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        muted={muted}
        setMuted={setMuted}
      />

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
};

export default VideoCard;