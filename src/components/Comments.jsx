import { useState } from 'react'; 
 
const Comments = ({ postId, onCommentAdded }) => { 
  const [commentText, setCommentText] = useState(''); 
  const [comments, setComments] = useState([ 
    { 
      id: 1, 
      username: "Jessica_Mom", 
      content: "So happy for you! I remember that feeling ❤️", 
      timestamp: "1 hour ago" 
    }, 
    { 
      id: 2, 
      username: "Anna_FirstTimeMom", 
      content: "Congratulations! When is your due date?", 
      timestamp: "45 minutes ago" 
    } 
  ]); 
 
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    if (!commentText.trim()) return; 
 
    const newComment = { 
      id: Date.now(), 
      username: "You", 
      content: commentText, 
      timestamp: "Just now" 
    }; 
 
    setComments([newComment, ...comments]); 
    setCommentText(''); 
    onCommentAdded(postId); 
  }; 
 
  return ( 
    <div className="mt-4 pt-4 border-t border-gray-100"> 
      {/* Comment Input */} 
      <form onSubmit={handleSubmit} className="mb-4"> 
        <div className="flex space-x-3"> 
          <div className="w-8 h-8 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full flex
shrink-0 flex items-center justify-center"> 
            <span className="text-purple-600 text-sm">👩</span> 
          </div> 
          <input 
            type="text" 
            value={commentText} 
            onChange={(e) => setCommentText(e.target.value)} 
            placeholder="Write a comment..." 
            className="flex-1 px-4 py-2 border border-gray-200 rounded-full focus:ring-2 focus:ring
purple-300 focus:outline-none" 
          /> 
          <button 
            type="submit" 
            disabled={!commentText.trim()} 
            className="px-4 py-2 bg-purple-500 text-white rounded-full disabled:opacity-50 
disabled:cursor-not-allowed hover:bg-purple-600 transition-colors" 
          > 
            Post 
          </button> 
        </div> 
      </form> 
 
      {/* Comments List */} 
      <div className="space-y-3"> 
        {comments.map((comment) => ( 
          <div key={comment.id} className="flex space-x-3"> 
            <div className="w-8 h-8 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex
shrink-0 flex items-center justify-center"> 
              <span className="text-purple-500 text-sm">👩</span> 
            </div> 
            <div className="flex-1 bg-gray-50 rounded-2xl p-3"> 
              <div className="flex items-center space-x-2 mb-1"> 
                <span className="font-semibold text-gray-800 text-sm">{comment.username}</span> 
                <span className="text-xs text-gray-500">{comment.timestamp}</span> 
              </div> 
              <p className="text-gray-700 text-sm">{comment.content}</p> 
            </div> 
          </div> 
        ))} 
      </div> 
    </div> 
  ); 
}; 
 
export default Comments; 