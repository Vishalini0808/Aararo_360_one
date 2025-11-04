// Placeholder API functions for backend integration 
export const getPosts = async () => { 
  // Will be replaced with actual axios call: return axios.get("/api/posts"); 
  return new Promise((resolve) => { 
    setTimeout(() => { 
      resolve({ 
        data: [ 
          { 
            id: 1, 
            username: "Sarah_MomToBe", 
            content: "Just felt the first kicks today! So magical! 💕 Anyone else in their second trimester?", 
            timestamp: "2 hours ago", 
            likes: 24, 
            comments: 8, 
            category: "Pregnancy by Trimester", 
            saved: false, 
            liked: false 
          }, 
          { 
            id: 2, 
            username: "Emily_Jones", 
            content: "Looking for healthy snack ideas that are easy to prepare. Any suggestions?", 
            timestamp: "5 hours ago", 
            likes: 15, 
            comments: 12, 
            category: "Nutrition & Fitness", 
            saved: true, 
            liked: true 
          } 
        ] 
      }); 
    }, 500); 
  }); 
}; 
 
export const createPost = async (data) => { 
  // Will be replaced with: return axios.post("/api/posts", data); 
  return new Promise((resolve) => { 
    setTimeout(() => { 
      resolve({ data: { ...data, id: Date.now() } }); 
    }, 300); 
  }); 
}; 
 
export const getCategories = async () => { 
  return new Promise((resolve) => { 
    setTimeout(() => { 
      resolve({ 
        data: [ 
          "All Topics", 
          "Pregnancy by Trimester", 
          "Nutrition & Fitness", 
          "Emotional Health", 
          "Newborn Care", 
          "Relationships", 
          "Baby Names", 
          "Health & Doctor Visits" 
        ] 
      }); 
    }, 200); 
  }); 
}; 
 
export const getExperts = async () => { 
  return new Promise((resolve) => { 
    setTimeout(() => { 
      resolve({ 
        data: [ 
          { 
            id: 1, 
            name: "Dr. Maria Rodriguez", 
            specialization: "OB-GYN Specialist", 
            experience: "15+ years" 
          }, 
          { 
            id: 2, 
            name: "Dr. James Wilson", 
            specialization: "Pediatric Care", 
            experience: "12+ years" 
          }, 
          { 
            id: 3, 
            name: "Lisa Chen, RN", 
            specialization: "Pregnancy Nutrition", 
            experience: "8+ years" 
          } 
        ] 
      }); 
    }, 300); 
  }); 
};