import { useState, useEffect } from 'react'; 
 
const DadJournal = ({ storageKey }) => { 
  const [entries, setEntries] = useState([]); 
  const [newEntry, setNewEntry] = useState(''); 
  const [showForm, setShowForm] = useState(false); 
 
  useEffect(() => { 
    const savedEntries = localStorage.getItem(storageKey); 
    if (savedEntries) { 
      setEntries(JSON.parse(savedEntries)); 
    } 
  }, [storageKey]); 
 
  useEffect(() => { 
    localStorage.setItem(storageKey, JSON.stringify(entries)); 
  }, [entries, storageKey]); 
 
  const addEntry = () => { 
    if (newEntry.trim()) { 
      const entry = { 
        id: Date.now(), 
        text: newEntry, 
        date: new Date().toLocaleDateString(), 
        timestamp: new Date().toLocaleTimeString([], {  
          hour: '2-digit',  
          minute: '2-digit'  
        }), 
      }; 
      setEntries([entry, ...entries]); 
      setNewEntry(''); 
      setShowForm(false); 
    } 
  }; 
 
  const deleteEntry = (id) => { 
    setEntries(entries.filter(entry => entry.id !== id)); 
  }; 
 
  return ( 
    <div className="bg-white/80 p-6 rounded-2xl shadow-md"> 
      <div className="flex justify-between items-center mb-6"> 
        <h3 className="text-2xl font-semibold text-pink-700"> 
          Dad's Journal 
        </h3> 
        <button 
          onClick={() => setShowForm(true)} 
          className="bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full px-4 py-2 
hover:shadow-lg transition-all duration-300" 
        > 
          + New Entry 
        </button> 
      </div> 
 
      {/* Journal Form */} 
      {showForm && ( 
        <div className="mb-6 p-4 bg-pink-50 rounded-xl border border-pink-200"> 
          <textarea 
            value={newEntry} 
            onChange={(e) => setNewEntry(e.target.value)} 
            placeholder="Write a message for your partner or baby 💌" 
            className="w-full h-32 border border-pink-200 focus:ring-2 ring-pink-400 rounded-lg p-3 
resize-none" 
          /> 
          <div className="flex gap-3 mt-3"> 
            <button 
              onClick={addEntry} 
              className="bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full px-6 py-2 
hover:shadow-lg transition-all duration-300" 
            > 
              Save Entry 
            </button> 
            <button 
              onClick={() => setShowForm(false)} 
              className="border border-pink-300 text-pink-600 rounded-full px-6 py-2 hover:bg-pink-50 
transition-all duration-300" 
            > 
              Cancel 
            </button> 
          </div> 
        </div> 
      )} 
 
      {/* Journal Entries */} 
      <div className="space-y-4 max-h-96 overflow-y-auto"> 
        {entries.length === 0 ? ( 
          <p className="text-center text-purple-500 py-8"> 
            No journal entries yet. Share your thoughts and feelings! 💭 
          </p> 
        ) : ( 
          entries.map((entry) => ( 
            <div 
              key={entry.id} 
              className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-xl border border-pink
200 hover:shadow-md transition-all duration-300" 
            > 
              <div className="flex justify-between items-start mb-2"> 
                <span className="text-sm text-purple-600 font-medium"> 
                  {entry.date} • {entry.timestamp} 
                </span> 
                <button 
                  onClick={() => deleteEntry(entry.id)} 
                  className="text-pink-400 hover:text-pink-600 transition-colors duration-200" 
                > 
                  × 
                </button> 
              </div> 
              <p className="text-purple-800 whitespace-pre-wrap"> 
                {entry.text} 
              </p> 
</div> 
)) 
)} 
</div> 
</div> 
); 
}; 
export default DadJournal;