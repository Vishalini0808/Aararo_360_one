import { useState } from 'react'; 
import Comments from './Comments'; 
 
const PostCard = ({ post, onLike, onSave, onComment }) => { 
  const [showComments, setShowComments] = useState(false); 
  const [isLiked, setIsLiked] = useState(post.liked); 
  const [isSaved, setIsSaved] = useState(post.saved); 
  const [likeCount, setLikeCount] = useState(post.likes); 
 
  const handleLike = () => { 
    const newLikeState = !isLiked; 
    setIsLiked(newLikeState); 
    setLikeCount(newLikeState ? likeCount + 1 : likeCount - 1); 
    onLike(post.id, newLikeState); 
  }; 
 
  const handleSave = () => { 
    const newSaveState = !isSaved; 
    setIsSaved(newSaveState); 
    onSave(post.id, newSaveState); 
  }; 
 
  return ( 
    <div className="bg-white rounded-2xl shadow-md p-6 mb-4 border border-pink-50 
hover:shadow-lg transition-all duration-300"> 
      {/* Post Header */} 
      <div className="flex items-center space-x-3 mb-4"> 
        <div className="w-12 h-12 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full flex 
items-center justify-center"> 
          <span className="text-pink-600 text-lg">👩</span> 
        </div> 
        <div> 
          <h4 className="font-semibold text-gray-800">{post.username}</h4> 
          <p className="text-sm text-gray-500">{post.timestamp}</p> 
        </div> 
      </div> 
 
      {/* Category Tag */} 
      {post.category && ( 
        <span className="inline-block px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font
medium mb-3"> 
          {post.category} 
        </span> 
      )} 
 
      {/* Post Content */} 
      <p className="text-gray-700 mb-4 leading-relaxed">{post.content}</p> 
 
      {/* Action Buttons */} 
      <div className="flex items-center justify-between pt-4 border-t border-gray-100"> 
        <div className="flex items-center space-x-4"> 
          <button 
            onClick={handleLike} 
            className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${ 
              isLiked ? 'bg-pink-50 text-pink-500' : 'text-gray-600 hover:bg-pink-50' 
            }`} 
          > 
            <span>{isLiked ? '❤️' : '⚕️'}</span> 
            <span>{likeCount}</span> 
          </button> 
 
          <button 
            onClick={() => setShowComments(!showComments)} 
            className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-600 hover:bg-purple
50 transition-all duration-300" 
          > 
            <span>💬</span> 
            <span>{post.comments}</span> 
          </button> 
        </div> 
 
        <button 
          onClick={handleSave} 
          className={`p-2 rounded-lg transition-all duration-300 ${ 
            isSaved ? 'text-purple-500 bg-purple-50' : 'text-gray-600 hover:bg-purple-50' 
          }`} 
        > 
          {isSaved ? '🔖' : '📑'} 
        </button> 
      </div> 
 
      {/* Comments Section */} 
      {showComments && ( 
        <Comments  
          postId={post.id}  
          onCommentAdded={onComment} 
        /> 
      )} 
    </div> 
  ); 
}; 
 
export default PostCard;