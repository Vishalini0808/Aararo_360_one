// components/ExerciseYogaPage.jsx
import React, { useState,  useRef } from 'react';

const ExerciseContent = () => {
  const [activeSection, setActiveSection] = useState('yoga');
  const [activeCategory, setActiveCategory] = useState('prenatal');
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const videoPlayerRef = useRef(null);

  // Video data using your video URLs
  const videoData = {
    yoga: {
      prenatal: [
        {
          id: 1,
          title: "Cat-Cow Pose for Pregnancy",
          description: "Gentle spinal movement to relieve back pain",
          trimester: "1st & 2nd Trimester",
          benefits: "Relieves back pain, improves spinal flexibility",
          videoUrl: "yp1.mp4",
        },
        {
          id: 2,
          title: "Goddess Squat & Hip Opening",
          description: "Strengthen legs and open hips safely",
          trimester: "2nd Trimester",
          benefits: "Strengthens legs, opens hips, improves circulation",
          videoUrl: "yp2.mp4",
        },
        {
          id: 3,
          title: "Supported Triangle Pose",
          description: "Balance and side stretching with support",
          trimester: "All Trimesters",
          benefits: "Improves balance, stretches sides, reduces swelling",
          videoUrl: "yp3.mp4",
        },
        {
          id: 4,
          title: "Butterfly Pose Flow",
          description: "Gentle hip opening sequence",
          trimester: "All Trimesters",
          benefits: "Opens hips, improves flexibility, relieves tension",
          videoUrl: "yp4.mp4",
        },
        {
          id: 5,
          title: "Goddess Squat & Hip Opening",
          description: "Strengthen legs and open hips safely",
          trimester: "2nd Trimester",
          benefits: "Strengthens legs, opens hips, improves circulation",
          videoUrl: "yp5.mp4",
        },
        {
          id: 6,
          title: "Supported Triangle Pose",
          description: "Balance and side stretching with support",
          trimester: "All Trimesters",
          benefits: "Improves balance, stretches sides, reduces swelling",
          videoUrl: "yp6.mp4",
        },
        {
          id: 7,
          title: "Butterfly Pose Flow",
          description: "Gentle hip opening sequence",
          trimester: "All Trimesters",
          benefits: "Opens hips, improves flexibility, relieves tension",
          videoUrl: "yp7.mp4",
        }
      ],
      postnatal: [
        {
          id: 1,
          title: "Postpartum Bridge Pose",
          description: "Gentle core and glute activation",
          when: "6+ Weeks Postpartum",
          benefits: "Strengthens glutes, supports pelvic floor",
          videoUrl: "post1.mp4",
        },
        {
          id: 2,
          title: "Restorative Child's Pose",
          description: "Calming pose for tired moms",
          when: "When Comfortable",
          benefits: "Relieves back tension, calming for mind",
          videoUrl: "post2.mp4",
        },
        {
          id: 3,
          title: "Legs Up the Wall Recovery",
          description: "Restorative pose for circulation",
          when: "Anytime",
          benefits: "Reduces swelling, improves circulation",
          videoUrl: "post3.mp4",
        },
        {
          id: 4,
          title: "Gentle Cat-Cow for Recovery",
          description: "Modified version for postpartum",
          when: "6+ Weeks Postpartum",
          benefits: "Restores core strength, improves posture",
          videoUrl: "post4.mp4",
        }
      ]
    },
    exercise: {
      prenatal: [
        {
          id: 1,
          title: "Gentle Prenatal Cardio",
          description: "Low-impact walking and light aerobics",
          benefits: "Improves cardiovascular health, boosts energy",
          videoUrl: "ex1.mp4",
        },
        {
          id: 2,
          title: "Prenatal Strength Training",
          description: "Light weights and resistance bands",
          benefits: "Builds strength, supports posture",
          videoUrl: "ex2.mp4",
        },
        {
          id: 3,
          title: "Pelvic Floor Exercises",
          description: "Kegels and pelvic tilts tutorial",
          benefits: "Prepares for labor, aids recovery",
          videoUrl: "ex3.mp4",
        },
        {
          id: 4,
          title: "Prenatal Stretching Routine",
          description: "Full body gentle stretching",
          benefits: "Reduces muscle tension, improves flexibility",
          videoUrl: "ex4.mp4",
        },
        {
          id: 5,
          title: "Gentle Prenatal Cardio",
          description: "Low-impact walking and light aerobics",
          benefits: "Improves cardiovascular health, boosts energy",
          videoUrl: "ex5.mp4",
        },
        {
          id: 6,
          title: "Prenatal Strength Training",
          description: "Light weights and resistance bands",
          benefits: "Builds strength, supports posture",
          videoUrl: "ex6.mp4",
        },
        {
          id: 7,
          title: "Pelvic Floor Exercises",
          description: "Kegels and pelvic tilts tutorial",
          benefits: "Prepares for labor, aids recovery",
          videoUrl: "ex7.mp4",
        },
        {
          id: 8,
          title: "Prenatal Stretching Routine",
          description: "Full body gentle stretching",
          benefits: "Reduces muscle tension, improves flexibility",
          videoUrl: "ex8.mp4",
        }
      ],
      postnatal: [
        {
          id: 1,
          title: "Gentle Prenatal Cardio",
          description: "Low-impact walking and light aerobics",
          benefits: "Improves cardiovascular health, boosts energy",
          videoUrl: "px1.mp4",
        },
        {
          id: 2,
          title: "Prenatal Strength Training",
          description: "Light weights and resistance bands",
          benefits: "Builds strength, supports posture",
          videoUrl: "px2.mp4",
        },
        {
          id: 3,
          title: "Pelvic Floor Exercises",
          description: "Kegels and pelvic tilts tutorial",
          benefits: "Prepares for labor, aids recovery",
          videoUrl: "px3.mp4",
        },
        {
          id: 4,
          title: "Prenatal Stretching Routine",
          description: "Full body gentle stretching",
          benefits: "Reduces muscle tension, improves flexibility",
          videoUrl: "px4.mp4",
        },
        {
          id: 5,
          title: "Gentle Prenatal Cardio",
          description: "Low-impact walking and light aerobics",
          benefits: "Improves cardiovascular health, boosts energy",
          videoUrl: "px5.mp4",
        },
        {
          id: 6,
          title: "Prenatal Strength Training",
          description: "Light weights and resistance bands",
          benefits: "Builds strength, supports posture",
          videoUrl: "px6.mp4",
        }
      ]
    }
  };

  // Play video function
  const playVideo = (video) => {
    setCurrentVideo(video);
    setIsVideoPlaying(true);
    setIsMinimized(false);
  };

  // Close video player
  const closeVideo = () => {
    setIsVideoPlaying(false);
    setCurrentVideo(null);
    if (videoPlayerRef.current) {
      videoPlayerRef.current.pause();
    }
  };

  // Toggle minimize/maximize
  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  // Handle video end
  const handleVideoEnd = () => {
    setIsVideoPlaying(false);
  };

  const currentVideos = videoData[activeSection][activeCategory];

  const VideoCard = ({ video }) => {
    return (
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
        {/* Video Thumbnail for both Yoga and Exercise */}
        <div className="relative aspect-video bg-gray-800">
          <video
            src={video.videoUrl}
            className="w-full h-full object-cover"
            muted
            playsInline
            preload="metadata"
          />
          
          {/* Play Button Overlay */}
          <div 
            className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 flex items-center justify-center cursor-pointer"
            onClick={() => playVideo(video)}
          >
            <div className="text-white text-4xl opacity-0 hover:opacity-100 transition-opacity duration-300">
              ▶
            </div>
          </div>
        </div>

        {/* Video Info */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
            {video.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {video.description}
          </p>

          {/* Video Details */}
          <div className="space-y-2 mb-4">
            <div className="flex items-start text-sm text-gray-500">
              <span className="font-medium text-purple-600 w-20">Benefits:</span>
              <span>{video.benefits}</span>
            </div>
            {video.trimester && (
              <div className="flex items-center text-sm text-gray-500">
                <span className="font-medium text-pink-600 w-20">When:</span>
                <span>{video.trimester}</span>
              </div>
            )}
            {video.when && (
              <div className="flex items-center text-sm text-gray-500">
                <span className="font-medium text-pink-600 w-20">When:</span>
                <span>{video.when}</span>
              </div>
            )}
          </div>

          {/* Watch Now Button */}
          <button 
            onClick={() => playVideo(video)}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
          >
            Watch Now
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-400 to-purple-600 rounded-b-3xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Exercise & Yoga for Every Mother
            </h1>
            <p className="text-xl md:text-2xl text-pink-100 leading-relaxed max-w-3xl mx-auto">
              Nurture your body, calm your mind — for you and your little one.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-lg sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Section Tabs */}
          <div className="flex justify-center border-b border-gray-200">
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveSection('yoga')}
                className={`py-4 px-6 font-semibold text-lg border-b-2 transition-all duration-300 ${
                  activeSection === 'yoga'
                    ? 'border-purple-600 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Yoga Videos 
              </button>
              <button
                onClick={() => setActiveSection('exercise')}
                className={`py-4 px-6 font-semibold text-lg border-b-2 transition-all duration-300 ${
                  activeSection === 'exercise'
                    ? 'border-pink-600 text-pink-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Exercise Videos
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center py-4">
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveCategory('prenatal')}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === 'prenatal'
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Prenatal
              </button>
              <button
                onClick={() => setActiveCategory('postnatal')}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === 'postnatal'
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Postnatal
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
            {activeCategory === 'prenatal' ? 'Prenatal' : 'Postnatal'} {activeSection === 'yoga' ? 'Yoga' : 'Exercise'} Videos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {activeSection === 'yoga' 
              ? 'Gentle yoga poses designed to support you and your baby'
              : 'Safe exercises to maintain strength and wellness'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

        {/* Empty State */}
        {currentVideos.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📹</div>
            <h3 className="text-2xl font-bold text-gray-600 mb-2">No Videos Available</h3>
            <p className="text-gray-500">Check back later for new content!</p>
          </div>
        )}
      </main>

      {/* Video Player Overlay */}
      {isVideoPlaying && currentVideo && (
        <div className={`fixed inset-0 bg-black z-50 transition-all duration-300 ${
          isMinimized ? 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-60 rounded-2xl' : 'top-0 left-0 w-full h-full'
        }`}>
          {/* Video Player */}
          <video
            ref={videoPlayerRef}
            src={currentVideo.videoUrl}
            className="w-full h-full object-contain bg-black"
            autoPlay
            controls
            onEnded={handleVideoEnd}
          />

          {/* Control Bar */}
          <div className="absolute top-4 right-4 flex space-x-2">
            {/* Minimize/Maximize Button */}
            <button
              onClick={toggleMinimize}
              className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              {isMinimized ? '⬜' : '➖'}
            </button>
            
            {/* Close Button */}
            <button
              onClick={closeVideo}
              className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Video Info */}
          {!isMinimized && (
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-xl font-bold mb-1">{currentVideo.title}</h3>
              <p className="text-gray-300 text-sm">{currentVideo.description}</p>
            </div>
          )}
        </div>
      )}

      <style jsx>{`
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

export default ExerciseContent;