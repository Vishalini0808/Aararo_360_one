// components/ExerciseYogaPage.jsx
import React, { useState, useRef } from 'react';

const ExerciseContent = () => {
  const [activeCategory, setActiveCategory] = useState('prenatal');
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const videoPlayerRef = useRef(null);

  // Combined video data for Yoga & Exercise
  const videoData = {
    prenatal: [
      // Yoga Videos
      {
        id: 1,
        title: "Cat-Cow Pose for Pregnancy",
        description: "Gentle spinal movement to relieve back pain",
      
        trimester: "1st & 2nd Trimester",
        benefits: "Relieves back pain, improves spinal flexibility",
        videoUrl: "yp1.mp4",
        duration: "5 min"
      },
      {
        id: 2,
        title: "Bound Angle Pose",
        description: "Strengthen legs and open hips safely",
      
        trimester: "2nd trimester onward",
        benefits: "Gently opens the hips and groins, relieves lower-back tension and aids pelvic alignment",
        videoUrl: "yp2.mp4",
        duration: "7 min"
      },
      {
        id: 3,
        title: "Pelvic Tilts",
        description: "Balance and gentle lower back movement while standing or on all fours",
   
        trimester: "All Trimesters",
        benefits: "Strengthens lower back and core muscles, easing back pain and improving posture.",
        videoUrl: "yp3.mp4",
        duration: "6 min"
      },
      {
        id: 4,
        title: "Side-Lying Leg Lifts",
        description: "Side-Lying Leg Lifts",
       
        trimester: "All Trimesters",
        benefits: "Strengthens hips, tones thighs, and improves body stability, relieves tension",
        videoUrl: "yp4.mp4",
        duration: "8 min"
      },
      {
        id: 5,
        title: "Supported Squats",
        description: "Balance-focused squatting posture using wall",
    
        trimester: "2nd Trimester",
        benefits: "Strengthens legs and pelvic muscles, and improves blood circulation.",
        videoUrl: "yp5.mp4",
        duration: "10 min"
      },
      {
        id: 6,
        title: "Deep Breathing",
        description: "Slow and mindful breathing practice to enhance relaxation and oxygen flow",
        
        trimester: "All Trimesters",
        benefits: "Reduces stress, promotes calmness during pregnancy.",
        videoUrl: "yp6.mp4",
        duration: "5 min"
      },
      
      // // Exercise Videos
      // {
      //   id: 7,
      //   title: "Gentle Prenatal Cardio",
      //   description: "Low-impact walking and light aerobics",
      //   type: "exercise",
      //   trimester: "All Trimesters",
      //   benefits: "Improves cardiovascular health, boosts energy",
      //   videoUrl: "ex1.mp4",
      //   duration: "15 min"
      // },
      // {
      //   id: 8,
      //   title: "Prenatal Strength Training",
      //   description: "Light weights and resistance bands",
      //   type: "exercise",
      //   trimester: "2nd & 3rd Trimester",
      //   benefits: "Builds strength, supports posture",
      //   videoUrl: "ex2.mp4",
      //   duration: "12 min"
      // },
      // {
      //   id: 9,
      //   title: "Pelvic Floor Exercises",
      //   description: "Kegels and pelvic tilts tutorial",
      //   type: "exercise",
      //   trimester: "All Trimesters",
      //   benefits: "Prepares for labor, aids recovery",
      //   videoUrl: "ex3.mp4",
      //   duration: "8 min"
      // },
      // {
      //   id: 10,
      //   title: "Prenatal Stretching Routine",
      //   description: "Full body gentle stretching",
      //   type: "exercise",
      //   trimester: "All Trimesters",
      //   benefits: "Reduces muscle tension, improves flexibility",
      //   videoUrl: "ex4.mp4",
      //   duration: "10 min"
      // },
      // {
      //   id: 11,
      //   title: "Gentle Prenatal Cardio",
      //   description: "Low-impact walking and light aerobics",
      //   type: "exercise",
      //   trimester: "1st Trimester",
      //   benefits: "Improves cardiovascular health, boosts energy",
      //   videoUrl: "ex5.mp4",
      //   duration: "12 min"
      // },
      // {
      //   id: 12,
      //   title: "Prenatal Strength Training",
      //   description: "Light weights and resistance bands",
      //   type: "exercise",
      //   trimester: "2nd Trimester",
      //   benefits: "Builds strength, supports posture",
      //   videoUrl: "ex6.mp4",
      //   duration: "14 min"
      // }
    ],
    postnatal: [
      // Yoga Videos
      {
    id: 1,
    title: "Bridge Pose (Setu Bandhasana)",
    description: "Lie on your back and lift your hips upward while keeping feet flat.",
    when: "After 6 Weeks Postpartum (with doctor’s approval)",
    benefits: "Strengthens back, hips, and core while improving circulation.",
    videoUrl: "post1.mp4",
    duration: "6 min"
  },
     {
    id: 2,
    title: "Cat-Cow Pose (Marjaryasana–Bitilasana)",
    description: "Move between arching and rounding the spine while on all fours.",
    when: "After core and back healing",
    benefits: "Improves spine flexibility, relieves back tension, and enhances posture.",
    videoUrl: "post2.mp4",
    duration: "7 min"
  },
       {
    id: 3,
    title: "Child’s Pose (Balasana)",
    description: "Sit back on heels and stretch arms forward to rest the forehead on the mat.",
    when: "Anytime after recovery",
    benefits: "Calms the mind, relaxes shoulders and back muscles.",
    videoUrl: "post3.mp4",
    duration: "5 min"
  },
      {
        id: 4,
        title: "Gentle Cat-Cow for Recovery",
        description: "Modified version for postpartum",
      
        when: "6+ Weeks Postpartum",
        benefits: "Restores core strength, improves posture",
        videoUrl: "post4.mp4",
        duration: "7 min"
      },
       {
        id: 5,
        title: "Legs Up the Wall Recovery",
        description: "Restorative pose for circulation",
     
        when: "Anytime",
        benefits: "Reduces swelling, improves circulation",
        videoUrl: "post5.mp4",
        duration: "8 min"
      },
      {
        id: 6,
        title: "Seated Forward Bend",
        description: "Sit with legs extended and reach forward toward your toes",
      
        when: "After abdominal healing",
        benefits: "Restores core strength, improves posture",
        videoUrl: "post6.mp4",
        duration: "7 min"
      },
      
      // Exercise Videos
      // {
      //   id: 5,
      //   title: "Postpartum Cardio",
      //   description: "Low-impact walking and light aerobics",
        
      //   when: "6+ Weeks Postpartum",
      //   benefits: "Improves cardiovascular health, boosts energy",
      //   videoUrl: "px1.mp4",
      //   duration: "15 min"
      // },
      // {
      //   id: 6,
      //   title: "Postnatal Strength Training",
      //   description: "Light weights and resistance bands",
       
      //   when: "8+ Weeks Postpartum",
      //   benefits: "Builds strength, supports posture",
      //   videoUrl: "px2.mp4",
      //   duration: "12 min"
      // },
      // {
      //   id: 7,
      //   title: "Pelvic Floor Recovery",
      //   description: "Kegels and pelvic tilts tutorial",
      
      //   when: "6+ Weeks Postpartum",
      //   benefits: "Aids recovery, strengthens core",
      //   videoUrl: "px3.mp4",
      //   duration: "8 min"
      // },
      // {
      //   id: 8,
      //   title: "Postnatal Stretching Routine",
      //   description: "Full body gentle stretching",
       
      //   when: "When Comfortable",
      //   benefits: "Reduces muscle tension, improves flexibility",
      //   videoUrl: "px4.mp4",
      //   duration: "10 min"
      // }
    ]
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

  const currentVideos = videoData[activeCategory];

  const VideoCard = ({ video }) => {
    return (
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
        {/* Video Type Badge */}
        <div className="absolute top-4 left-4 z-10">
          
        </div>

        {/* Video Thumbnail */}
        <div className="relative aspect-video bg-gray-800">
          <video
            src={video.videoUrl}
            className="w-full h-full object-cover"
            muted
            playsInline
            preload="metadata"
          />
          
          {/* Duration Badge */}
          <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
            {video.duration}
          </div>
          
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
              Yoga & Exercise for Every Mother
            </h1>
            <p className="text-xl md:text-2xl text-pink-100 leading-relaxed max-w-3xl mx-auto">
              Nurture your body, calm your mind — for you and your little one.
            </p>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <div className="bg-white shadow-lg sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center py-6">
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveCategory('prenatal')}
                className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === 'prenatal'
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                🤰 Prenatal
              </button>
              <button
                onClick={() => setActiveCategory('postnatal')}
                className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === 'postnatal'
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                👶 Postnatal
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
            {activeCategory === 'prenatal' ? 'Prenatal' : 'Postnatal'} Yoga & Exercise Videos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A complete collection of safe yoga poses and exercises designed specifically for {activeCategory === 'prenatal' ? 'pregnancy' : 'postpartum recovery'}
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
              <div className="flex items-center gap-2 mb-2">
                <span className={`px-2 py-1 rounded text-xs font-semibold ${
                  currentVideo.type === 'yoga' 
                    ? 'bg-purple-500' 
                    : 'bg-pink-500'
                }`}>
                  {currentVideo.type === 'yoga' ? '🧘 Yoga' : '💪 Exercise'}
                </span>
                <span className="text-gray-300 text-sm">{currentVideo.duration}</span>
              </div>
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