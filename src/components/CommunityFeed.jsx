import { useState, useEffect } from 'react'; 
import { getPosts } from '../services/api'; 
import PostCard from './PostCard'; 
 
const CommunityFeed = ({ newPost }) => { 
  const [localPosts, setLocalPosts] = useState([]); 
 
  useEffect(() => { 
    const fetchPosts = async () => { 
      try { 
        const response = await getPosts(); 
        setLocalPosts(response.data); 
      } catch (error) { 
        console.error('Error fetching posts:', error); 
      } 
    }; 
 
    fetchPosts(); 
  }, []); 
 
  // Combine fetched posts with new posts from props 
  const allPosts = newPost ? [newPost, ...localPosts] : localPosts; 
 
  const handleLike = (postId, liked) => { 
    setLocalPosts(posts =>  
      posts.map(post =>  
        post.id === postId  
          ? { ...post, liked, likes: liked ? post.likes + 1 : post.likes - 1 } 
          : post 
      ) 
    ); 
  }; 
 
  const handleSave = (postId, saved) => { 
    setLocalPosts(posts =>  
      posts.map(post =>  
        post.id === postId ? { ...post, saved } : post 
      ) 
    ); 
  }; 
 
  const handleComment = (postId) => { 
    setLocalPosts(posts =>  
      posts.map(post =>  
        post.id === postId ? { ...post, comments: post.comments + 1 } : post 
      ) 
    ); 
  }; 
 
  return ( 
    <div className="space-y-4"> 
      {allPosts.map((post) => ( 
        <PostCard 
          key={post.id} 
          post={post} 
          onLike={handleLike} 
          onSave={handleSave} 
          onComment={handleComment} 
        /> 
      ))} 
    </div> 
  ); 
}; 
 
export default CommunityFeed;