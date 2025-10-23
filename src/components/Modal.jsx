import React, { useEffect } from 'react';

export default function Modal({ isOpen, onClose, title, children }) { 
  useEffect(() => { 
    const handleEscape = (e) => { 
      if (e.key === 'Escape') onClose(); 
    }; 
    
    if (isOpen) { 
      document.addEventListener('keydown', handleEscape); 
      document.body.style.overflow = 'hidden'; 
    } 
 
    return () => { 
      document.removeEventListener('keydown', handleEscape); 
      document.body.style.overflow = 'unset'; 
    }; 
  }, [isOpen, onClose]); 

  if (!isOpen) return null;
 
  return ( 
    <> 
      {/* Backdrop */} 
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 animate-fadeIn" 
        aria-hidden="true" 
        onClick={onClose}
      /> 
 
      {/* Modal */} 
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4"> 
        <div 
          className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden animate-modalSlideIn"
          role="dialog" 
          aria-modal="true" 
          aria-labelledby="modal-title" 
          onClick={(e) => e.stopPropagation()} 
        > 
          {/* Header */} 
          <div className="sticky top-0 bg-gradient-to-r from-[#FFB6C1] to-[#C084FC] px-6 py-5 flex items-center justify-between"> 
            <h2 id="modal-title" className="text-white text-xl font-semibold">{title}</h2> 
            <button 
              onClick={onClose} 
              className="text-white hover:bg-white/20 rounded-full p-2 transition-colors" 
              aria-label="Close modal" 
            > 
              <span className="text-xl">×</span>
            </button> 
          </div> 
 
          {/* Content */} 
          <div className="p-6 overflow-y-auto max-h-[calc(85vh-80px)]"> 
            {children} 
          </div> 
        </div> 
      </div> 

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalSlideIn {
          from { 
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to { 
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-modalSlideIn {
          animation: modalSlideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </> 
  ); 
}