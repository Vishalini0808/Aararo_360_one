// src/components/NotesSection.jsx 
import React, { useState, useEffect } from 'react'; 
const NotesSection = ({ sectionKey, placeholder }) => { 
const [note, setNote] = useState(''); 
const [isSaved, setIsSaved] = useState(false); 
const [checklist, setChecklist] = useState({}); 
useEffect(() => { 
const savedNote = localStorage.getItem(`notes-${sectionKey}`); 
const savedChecklist = localStorage.getItem(`checklist-${sectionKey}`); 
if (savedNote) { 
setNote(savedNote); 
} 
if (savedChecklist) { 
setChecklist(JSON.parse(savedChecklist)); 
} 
}, [sectionKey]); 
const handleSaveNote = () => { 
localStorage.setItem(`notes-${sectionKey}`, note); 
setIsSaved(true); 
setTimeout(() => setIsSaved(false), 2000); 
}; 
const handleChecklistChange = (item, checked) => { 
const newChecklist = { 
...checklist, 
[item]: checked 
}; 
setChecklist(newChecklist); 
localStorage.setItem(`checklist-${sectionKey}`, JSON.stringify(newChecklist)); 
}; 
const getChecklistItems = () => { 
const checklists = { 
'nutrition-notes': ['Fruits', 'Vegetables', 'Proteins', 'Grains', 'Dairy'], 
'screen-time-notes': ['Outdoor play', 'Reading books', 'Art activities', 'Music time', 'Puzzle games'], 
'activities-notes': ['Fine motor', 'Gross motor', 'Cognitive', 'Creative', 'Social'], 
'sharing-notes': ['Shared toys', 'Said thank you', 'Helped clean up', 'Comforted someone', 'Took turns'] 
}; 
return checklists[sectionKey] || []; 
}; 
const checklistItems = getChecklistItems(); 
return ( 
<div className="space-y-4"> 
{/* Notes Textarea */} 
<div className="bg-white/60 rounded-xl p-4 border border-pink-300"> 
<h4 className="text-purple-600 font-semibold mb-3">📝 Parent's Notes</h4> 
<textarea 
value={note} 
onChange={(e) => setNote(e.target.value)} 
placeholder={placeholder} 
className="w-full h-24 p-3 border border-gray-200 rounded-xl resize-none focus:ring-2 
focus:ring-pink-400 focus:border-transparent transition-all duration-200 text-sm" 
/> 
<div className="flex justify-between items-center mt-3"> 
<button 
onClick={handleSaveNote} 
className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-4 py-2 text-sm font
semibold transition-all duration-300 transform hover:scale-105" 
> 
Save Note 
</button> 
{isSaved && ( 
<span className="text-green-500 text-sm font-medium flex items-center"> 
<span className="mr-1">✓</span> Saved! 
</span> 
)} 
</div> 
</div> 
{/* Optional Checklist */} 
{checklistItems.length > 0 && ( 
<div className="bg-white/60 rounded-xl p-4 border border-purple-300"> 
<h4 className="text-purple-600 font-semibold mb-3">✅ Weekly Checklist</h4> 
<div className="grid grid-cols-1 md:grid-cols-2 gap-2"> 
{checklistItems.map((item, index) => ( 
<label key={index} className="flex items-center space-x-3 cursor-pointer group"> 
<input 
type="checkbox" 
checked={!!checklist[item]} 
onChange={(e) => handleChecklistChange(item, e.target.checked)} 
className="w-4 h-4 text-pink-400 rounded focus:ring-pink-400 transition-all duration-200" 
/> 
<span className="text-sm group-hover:text-purple-600 transition-colors duration-200"> 
{item} 
</span> 
</label> 
))} 
</div> 
</div> 
)} 
</div> 
); 
}; 
export default NotesSection;