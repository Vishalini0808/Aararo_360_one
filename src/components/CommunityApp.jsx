import { useState } from "react";
import Categories from "./Categories";
import CommunityFeed from "./CommunityFeed";
import CreatePost from "./CreatePost";
import ExpertCorner from "./ExpertCorner";
import Notifications from "./Notifications";
import CommunityNavbar from "./CommunityNavbar";
import CommunitySidebar from "./CommunitySidebar";

// Community App Component - Add this new component
const CommunityApp = () => {
  const [activeSection, setActiveSection] = useState('feed');
  const [selectedCategory, setSelectedCategory] = useState('All Topics');
  const [newPost, setNewPost] = useState(null);
  
  const categories = [
    "All Topics",
    "Pregnancy by Trimester",
    "Nutrition & Fitness",
    "Emotional Health",
    "Newborn Care",
    "Relationships",
    "Baby Names",
    "Health & Doctor Visits"
  ];

  const handlePostCreated = (post) => {
    setNewPost(post);
    setActiveSection('feed');
    // Scroll to top to see the new post
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderMainContent = () => {
    switch (activeSection) {
      case 'feed':
        return (
          <>
            <CreatePost
              onPostCreated={handlePostCreated}
              categories={categories.filter(cat => cat !== 'All Topics')}
            />
            <Categories
              categories={categories}
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
            />
            <CommunityFeed 
              newPost={newPost} 
              selectedCategory={selectedCategory}
            />
          </>
        );
      case 'categories':
        return (
          <div className="space-y-6">
            <Categories
              categories={categories}
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
            />
            <CommunityFeed 
              newPost={newPost} 
              selectedCategory={selectedCategory}
            />
          </div>
        );
      case 'create':
        return (
          <CreatePost
            onPostCreated={handlePostCreated}
            categories={categories.filter(cat => cat !== 'All Topics')}
          />
        );
      case 'experts':
        return <ExpertCorner />;
      case 'notifications':
        return <Notifications />;
      case 'saved':
        return (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">💾</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Saved Posts</h3>
            <p className="text-gray-600">Your saved posts will appear here</p>
          </div>
        );
      default:
        return (
          <CommunityFeed 
            newPost={newPost} 
            selectedCategory={selectedCategory}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-white">
      <CommunityNavbar />
       
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <CommunitySidebar
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          </div>
           
          {/* Main Content */}
          <div className="flex-1 max-w-4xl">
            {renderMainContent()}
          </div>
           
          {/* Right Sidebar (empty for now, can be used for ads or additional features) */}
          <div className="lg:w-80 flex-shrink-0">
            {/* Space for future components */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityApp;