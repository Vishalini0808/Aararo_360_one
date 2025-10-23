import React, { useState, useRef, useEffect } from 'react';

const ElderlyAdvice = () => {
  // Landscape Videos Data (for cards)
  const landscapeVideos = [
    {
      id: 1,
      videoUrl: 'v1.mp4',
      views: '61K views',
      title: 'Parenting Tips for New Mothers',
      channel: 'Parenting Guide',
      time: '2 weeks ago'
    },
    {
      id: 2,
      videoUrl: 'v2.mp4',
      views: '11K views',
      title: 'Baby Care Essentials',
      channel: 'Baby Care Expert',
      time: '1 month ago'
    },
    {
      id: 3,
      videoUrl: 'v3.mp4',
      views: '2.7M views',
      title: 'Child Development Milestones',
      channel: 'Child Specialist',
      time: '3 days ago'
    }
  ];

  // Shorts Videos Data (vertical)
  const shortsVideos = [
    {
      id: 1,
      videoUrl: 'vs1.mp4',
      title: 'Quick Parenting Tip',
      username: 'ParentingPro',
      views: '1.2M views',
      likes: '45K',
      description: 'Learn this simple trick for better parenting',
      hashtag: '#parenting'
    },
    {
      id: 2,
      videoUrl: 'vs2.mp4',
      title: 'Baby Sleep Tips',
      username: 'SleepExpert',
      views: '890K views',
      likes: '32K',
      description: 'Help your baby sleep through the night',
      hashtag: '#babysleep'
    },
    {
      id: 3,
      videoUrl: 'vs3.mp4',
      title: 'Healthy Baby Food',
      username: 'Nutritionist',
      views: '2.1M views',
      likes: '78K',
      description: 'Easy and healthy baby food recipes',
      hashtag: '#babyfood'
    },
    {
      id: 4,
      videoUrl: 'vs4.mp4',
      title: 'Playtime Activities',
      username: 'ChildTherapist',
      views: '1.5M views',
      likes: '56K',
      description: 'Fun activities for child development',
      hashtag: '#playtime'
    },
    {
      id: 5,
      videoUrl: 'vs5.mp4',
      title: 'Safety Tips',
      username: 'SafetyFirst',
      views: '3.4M views',
      likes: '120K',
      description: 'Keep your baby safe at home',
      hashtag: '#babysafety'
    },
    {
      id: 6,
      videoUrl: 'vs6.mp4',
      title: 'Bonding Time',
      username: 'FamilyBond',
      views: '980K views',
      likes: '41K',
      description: 'Strengthen your bond with your baby',
      hashtag: '#bonding'
    },
    {
      id: 7,
      videoUrl: 'vs7.mp4',
      title: 'Development Games',
      username: 'ChildExpert',
      views: '1.8M views',
      likes: '67K',
      description: 'Games that help in child development',
      hashtag: '#development'
    }
  ];

  // Mix Videos Data (for bottom cards)
  const mixVideos = [
    {
      id: 1,
      videoUrl: 'v4.mp4',
      views: '4K views',
      title: 'Postpartum Care Guide',
      channel: 'Health Expert',
      time: '1 week ago'
    },
    {
      id: 2,
      videoUrl: 'v5.mp4',
      views: '1.2M views',
      title: 'Breastfeeding Tips',
      channel: 'Lactation Consultant',
      time: '2 days ago'
    },
    {
      id: 3,
      videoUrl: 'v6.mp4',
      views: 'Updated today',
      title: 'Newborn Care Basics',
      channel: 'Pediatric Guide',
      time: 'Just now'
    }
  ];

  const [currentShortIndex, setCurrentShortIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentVideoType, setCurrentVideoType] = useState('shorts');
  const containerRef = useRef(null);
  const videoRefs = useRef([]);
  const landscapeVideoRefs = useRef([]);

  // Handle card video click (landscape videos)
  const handleCardVideoClick = (index) => {
    const videoElement = landscapeVideoRefs.current[index];
    if (videoElement) {
      if (videoElement.paused) {
        videoElement.play();
      } else {
        videoElement.pause();
      }
    }
  };

  // Shorts Player Functions
  const scrollToVideo = (index) => {
    if (isFullscreen && containerRef.current) {
      containerRef.current.scrollTo({
        top: index * containerRef.current.clientHeight,
        behavior: 'smooth'
      });
    }
  };

  const handleWheel = (e) => {
    if (!isFullscreen || currentVideoType !== 'shorts') return;
    e.preventDefault();
    const delta = e.deltaY;
    
    if (delta > 0) {
      const nextIndex = (currentShortIndex + 1) % shortsVideos.length;
      scrollToVideo(nextIndex);
    } else if (delta < 0) {
      const prevIndex = currentShortIndex === 0 ? shortsVideos.length - 1 : currentShortIndex - 1;
      scrollToVideo(prevIndex);
    }
  };

  const [touchStart, setTouchStart] = useState(0);
  
  const handleTouchStart = (e) => {
    if (!isFullscreen || currentVideoType !== 'shorts') return;
    setTouchStart(e.touches[0].clientY);
  };

  const handleTouchEnd = (e) => {
    if (!isFullscreen || currentVideoType !== 'shorts') return;
    const touchEnd = e.changedTouches[0].clientY;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        const nextIndex = (currentShortIndex + 1) % shortsVideos.length;
        scrollToVideo(nextIndex);
      } else {
        const prevIndex = currentShortIndex === 0 ? shortsVideos.length - 1 : currentShortIndex - 1;
        scrollToVideo(prevIndex);
      }
    }
  };

  const handleScroll = () => {
    if (!isFullscreen || !containerRef.current || currentVideoType !== 'shorts') return;
    const container = containerRef.current;
    const scrollTop = container.scrollTop;
    const containerHeight = container.clientHeight;
    const newIndex = Math.round(scrollTop / containerHeight);
    
    if (newIndex !== currentShortIndex) {
      if (videoRefs.current[currentShortIndex]) {
        videoRefs.current[currentShortIndex].pause();
      }
      
      setCurrentShortIndex(newIndex);
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (isFullscreen && currentVideoType === 'shorts') {
      const currentVideo = videoRefs.current[currentShortIndex];
      
      if (currentVideo && isPlaying) {
        currentVideo.play().catch(error => {
          console.log('Auto-play prevented:', error);
        });
      }

      videoRefs.current.forEach((video, index) => {
        if (video && index !== currentShortIndex) {
          video.pause();
        }
      });
    }
  }, [currentShortIndex, isPlaying, isFullscreen, currentVideoType]);

  const handleVideoEnd = () => {
    if (currentVideoType === 'shorts') {
      const nextIndex = (currentShortIndex + 1) % shortsVideos.length;
      scrollToVideo(nextIndex);
    }
  };

  const togglePlayPause = () => {
    if (currentVideoType === 'shorts') {
      const currentVideo = videoRefs.current[currentShortIndex];
      if (currentVideo) {
        if (isPlaying) {
          currentVideo.pause();
        } else {
          currentVideo.play();
        }
        setIsPlaying(!isPlaying);
      }
    }
  };

  const toggleMute = () => {
    setMuted(!muted);
  };

  const toggleFullscreen = (index, type = 'shorts') => {
    if (isFullscreen) {
      setIsFullscreen(false);
      setCurrentVideoType('shorts');
      document.body.style.overflow = 'auto';
    } else {
      if (type === 'shorts') {
        setCurrentShortIndex(index);
        setCurrentVideoType('shorts');
      }
      setIsFullscreen(true);
      setIsPlaying(true);
      document.body.style.overflow = 'hidden';
    }
  };

  // Video Card Component
  const VideoCard = ({ video, type = 'landscape', index }) => (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] cursor-pointer"
      onClick={() => handleCardVideoClick(index)}
    >
      <div className={`relative ${type === 'landscape' ? 'aspect-video' : 'aspect-[9/16]'} bg-gray-800`}>
        <video
          ref={el => landscapeVideoRefs.current[index] = el}
          src={video.videoUrl}
          className="w-full h-full object-cover"
          muted
          playsInline
          loop
        />
        <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <div className="text-white text-4xl opacity-0 hover:opacity-100 transition-opacity duration-300">
            ▶
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-1 line-clamp-2">{video.title}</h3>
        <p className="text-gray-600 text-sm mb-1">{video.channel}</p>
        <div className="flex items-center text-gray-500 text-sm">
          <span>{video.views}</span>
          {video.time && <span className="mx-1">•</span>}
          <span>{video.time}</span>
        </div>
      </div>
    </div>
  );

  // Shorts Card Component
  const ShortsCard = ({ short, index }) => (
    <div 
      className="flex-shrink-0 w-36 cursor-pointer"
      onClick={() => toggleFullscreen(index, 'shorts')}
    >
      <div className="relative aspect-[9/16] bg-gray-800 rounded-xl overflow-hidden">
        <video
          ref={el => videoRefs.current[index] = el}
          src={short.videoUrl}
          className="w-full h-full object-cover"
          muted={muted}
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-2 left-2 right-2">
          <h4 className="text-white font-semibold text-sm line-clamp-2 mb-1">{short.title}</h4>
          <p className="text-white/80 text-xs">{short.views}</p>
        </div>
        <div className="absolute top-2 right-2">
          <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">S</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">YT</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">YouTube</span>
            </div>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5z" />
                </svg>
              </button>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* First Row - 3 Landscape Video Cards */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Recommended Videos</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {landscapeVideos.map((video, index) => (
              <VideoCard key={video.id} video={video} type="landscape" index={index} />
            ))}
          </div>
        </section>

        {/* Second Row - Shorts Horizontal Scroll */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <h2 className="text-2xl font-bold text-gray-900">Shorts</h2>
            </div>
          </div>

          {/* Shorts Horizontal Scroll */}
          <div className="relative">
            <div className="flex space-x-4 overflow-x-auto pb-4 hide-scrollbar">
              {shortsVideos.map((short, index) => (
                <ShortsCard key={short.id} short={short} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Third Row - 3 Mix Video Cards */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <h2 className="text-2xl font-bold text-gray-900">Mix</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mixVideos.map((video, index) => (
              <VideoCard key={video.id} video={video} type="landscape" index={index + landscapeVideos.length} />
            ))}
          </div>
        </section>
      </main>

      {/* Fullscreen Shorts Player */}
      {isFullscreen && currentVideoType === 'shorts' && (
        <div className="fixed inset-0 bg-black z-50">
          <div 
            ref={containerRef}
            className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth hide-scrollbar"
            onScroll={handleScroll}
            onWheel={handleWheel}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {shortsVideos.map((short, index) => (
              <div 
                key={short.id} 
                className="h-screen w-full snap-start flex justify-center items-center bg-black relative"
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

                {/* YouTube-like Controls */}
                <div className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/50 to-transparent p-4">
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => toggleFullscreen(0)}
                      className="text-white p-2 rounded-full hover:bg-white/20 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    <div className="text-white font-semibold">Shorts</div>
                    <div className="w-6"></div>
                  </div>
                </div>

                <div className="absolute bottom-20 left-4 text-white max-w-[65%] z-50">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                    <span className="font-semibold">{short.username}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 drop-shadow-lg">{short.title}</h3>
                  <p className="text-sm opacity-90 mb-2 drop-shadow-lg">{short.description}</p>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm opacity-90">{short.views}</span>
                    <span className="text-blue-300 text-sm font-medium">{short.hashtag}</span>
                  </div>
                </div>

                <div className="absolute bottom-20 right-4 flex flex-col gap-6 items-center z-50">
                  <button className="flex flex-col items-center gap-1 text-white">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                      <span className="text-2xl">❤</span>
                    </div>
                    <span className="text-xs font-medium mt-1">{short.likes}</span>
                  </button>
                  
                  <button className="flex flex-col items-center gap-1 text-white">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                      <span className="text-2xl">💬</span>
                    </div>
                    <span className="text-xs font-medium mt-1">Comment</span>
                  </button>

                  <button 
                    className="flex flex-col items-center gap-1 text-white"
                    onClick={toggleMute}
                  >
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                      <span className="text-2xl">{muted ? '🔇' : '🔊'}</span>
                    </div>
                  </button>
                </div>

                <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex flex-col gap-3 z-50">
                  {shortsVideos.map((_, i) => (
                    <div 
                      key={i}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i === currentShortIndex ? 'bg-white scale-150' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>

                {!isPlaying && (
                  <div 
                    className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer z-40"
                    onClick={togglePlayPause}
                  >
                    <div className="text-white text-8xl bg-black/50 rounded-full w-24 h-24 flex items-center justify-center">
                      ▶
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/70 text-sm z-50">
            <div className="flex items-center gap-2 bg-black/50 px-4 py-2 rounded-full">
              <span>↑ Scroll to navigate • {currentShortIndex + 1}/{shortsVideos.length}</span>
            </div>
          </div>
        </div>
      )}

      {/* Add CSS for hide-scrollbar */}
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
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default ElderlyAdvice;