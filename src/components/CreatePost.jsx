import { useState } from 'react'; 
 
const CreatePost = ({ onPostCreated, categories }) => { 
  const [postContent, setPostContent] = useState(''); 
  const [selectedCategory, setSelectedCategory] = useState(''); 
  const [isSubmitting, setIsSubmitting] = useState(false); 
 
  const handleSubmit = async (e) => { 
    e.preventDefault(); 
    if (!postContent.trim()) return; 
 
    setIsSubmitting(true); 
     
    // Simulate API call 
    setTimeout(() => { 
      const newPost = { 
        id: Date.now(), 
        username: "Current_User", 
        content: postContent, 
        timestamp: "Just now", 
        likes: 0, 
        comments: 0, 
        category: selectedCategory || "General", 
        saved: false, 
        liked: false 
      }; 
 
      onPostCreated(newPost); 
      setPostContent(''); 
      setSelectedCategory(''); 
      setIsSubmitting(false); 
    }, 500); 
  }; 
 
  return ( 
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-pink-100"> 
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Share your thoughts</h3> 
       
      <form onSubmit={handleSubmit}> 
        <textarea 
          value={postContent} 
          onChange={(e) => setPostContent(e.target.value)} 
          placeholder="What's on your mind, mama? Share your pregnancy journey..." 
          className="w-full h-32 p-4 border border-gray-200 rounded-xl resize-none focus:ring-2 
focus:ring-pink-300 focus:border-transparent focus:outline-none" 
        /> 
         
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-4 space-y-3 
sm:space-y-0"> 
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)} 
            className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-300 
focus:outline-none" 
          > 
            <option value="">Select a category</option> 
            {categories.map((category) => ( 
              <option key={category} value={category}>{category}</option> 
            ))} 
          </select> 
           
          <button 
            type="submit" 
            disabled={isSubmitting || !postContent.trim()} 
            className="px-6 py-2 bg-gradient-to-r from-pink-400 to-purple-500 text-white rounded-lg 
font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:from-pink-500 hover:to-purple
600 transition-all duration-300" 
          > 
            {isSubmitting ? 'Posting...' : 'Post'} 
          </button> 
        </div> 
      </form> 
    </div> 
  ); 
}; 
 
export default CreatePost;