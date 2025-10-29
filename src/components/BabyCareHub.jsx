import { GalleryThumbnails } from 'lucide-react';
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

// Video Card Component
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

// Mini Video Player Component (YouTube-like)
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
  
  // Mini player states
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isMiniPlayerOpen, setIsMiniPlayerOpen] = useState(false);
  const [isMiniPlayerMinimized, setIsMiniPlayerMinimized] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
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
      GalleryThumbnails:"./guide1.mp4",
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

              {/* ... rest of care-hub content remains the same ... */}
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