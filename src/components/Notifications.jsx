const Notifications = () => { 
  const notifications = [ 
    { 
      id: 1, 
      type: 'like', 
      message: 'Sarah_MomToBe liked your post', 
      timestamp: '5 min ago', 
      read: false 
    }, 
    { 
      id: 2, 
      type: 'comment', 
      message: 'Jessica_Mom commented on your post', 
      timestamp: '1 hour ago', 
      read: false 
    }, 
    { 
      id: 3, 
      type: 'reply', 
      message: 'Anna_FirstTimeMom replied to your comment', 
      timestamp: '2 hours ago', 
      read: true 
    } 
  ]; 
 
  const getNotificationIcon = (type) => { 
    switch (type) { 
      case 'like': return '❤️'; 
      case 'comment': return '💬'; 
      case 'reply': return '↩️'; 
      default: return '🔔'; 
    } 
  }; 
 
  return ( 
    <div className="bg-white rounded-2xl shadow-lg p-6"> 
      <h3 className="text-xl font-semibold text-gray-800 mb-6">Notifications 🔔</h3> 
       
      <div className="space-y-4"> 
        {notifications.map((notification) => ( 
          <div 
            key={notification.id} 
            className={`flex items-center space-x-4 p-4 rounded-xl border transition-all duration-300 ${ 
              notification.read 
                ? 'bg-gray-50 border-gray-200' 
                : 'bg-pink-50 border-pink-200 shadow-sm' 
            }`} 
          > 
            <div className="w-12 h-12 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full flex 
items-center justify-center"> 
              <span className="text-pink-600 text-lg"> 
                {getNotificationIcon(notification.type)} 
              </span> 
            </div> 
             
            <div className="flex-1"> 
              <p className="text-gray-800 font-medium">{notification.message}</p> 
              <p className="text-sm text-gray-500">{notification.timestamp}</p> 
            </div> 
             
            {!notification.read && ( 
              <div className="w-3 h-3 bg-pink-500 rounded-full"></div> 
            )} 
          </div> 
        ))} 
      </div> 
</div> 
); 
}; 
export default Notifications;