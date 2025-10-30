import { useEffect } from 'react'; 
 
const DadChecklist = ({ checklist, onToggle }) => { 
  useEffect(() => { 
    localStorage.setItem('dadCustomChecklist', JSON.stringify(checklist)); 
  }, [checklist]); 
 
  return ( 
    <div className="space-y-3"> 
      {checklist.map((item) => ( 
        <div 
          key={item.id} 
          className="flex items-center p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-colors 
duration-200" 
        > 
          <input 
            type="checkbox" 
            checked={item.completed} 
            onChange={() => onToggle(item.id)} 
            className="h-5 w-5 text-pink-500 rounded border-pink-300 focus:ring-pink-400" 
          /> 
          <span 
            className={`ml-3 text-lg ${ 
              item.completed 
                ? 'line-through text-purple-400' 
                : 'text-purple-700' 
            }`} 
          > 
            {item.text} 
          </span> 
        </div> 
      ))} 
    </div> 
  ); 
}; 
 
export default DadChecklist;