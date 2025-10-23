// import React, { useState } from 'react';
// import '../../pages/Styles/settings.css';

// const HelpSupport = () => {
//   const [activeFAQ, setActiveFAQ] = useState(null);

//   const faqs = [
//     {
//       question: "How do I track my pregnancy progress?",
//       answer: "Use our Monitoring feature to log your symptoms, weight, and baby's movements. The system will provide personalized insights based on your trimester."
//     },
//     {
//       question: "Can I share my progress with my partner?",
//       answer: "Yes! In the Premium plan, you can invite family members to view your progress and receive updates."
//     },
//     {
//       question: "How accurate are the growth predictions?",
//       answer: "Our predictions are based on medical guidelines and average growth patterns. Always consult with your healthcare provider for medical advice."
//     },
//     {
//       question: "What should I do if I notice unusual symptoms?",
//       answer: "Contact your healthcare provider immediately. Our app provides information but is not a substitute for professional medical advice."
//     }
//   ];

//   const contactMethods = [
//     {
//       icon: '📧',
//       method: 'Email Support',
//       details: 'support@aararo360.com',
//       response: 'Typically within 24 hours'
//     },
//     {
//       icon: '💬',
//       method: 'Live Chat',
//       details: 'Available 9AM-6PM IST',
//       response: 'Instant response during business hours'
//     },
//     {
//       icon: '📞',
//       method: 'Emergency Hotline',
//       details: '1-800-AARARO-1',
//       response: '24/7 for urgent parenting questions'
//     }
//   ];

//   return (
//     <div className="help-page">
//       <div className="page-header">
//         <h1>Help & Support</h1>
//         <p>We're here to help you through every step of your parenting journey</p>
//       </div>

//       <div className="contact-methods">
//         <h2>Get in Touch</h2>
//         <div className="methods-grid">
//           {contactMethods.map((method, index) => (
//             <div key={index} className="method-card">
//               <div className="method-icon">{method.icon}</div>
//               <h3>{method.method}</h3>
//               <p className="method-details">{method.details}</p>
//               <p className="method-response">{method.response}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="faq-section">
//         <h2>Frequently Asked Questions</h2>
//         <div className="faq-list">
//           {faqs.map((faq, index) => (
//             <div key={index} className="faq-item">
//               <button 
//                 className="faq-question"
//                 onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
//               >
//                 {faq.question}
//                 <span className="faq-toggle">{activeFAQ === index ? '−' : '+'}</span>
//               </button>
//               {activeFAQ === index && (
//                 <div className="faq-answer">
//                   <p>{faq.answer}</p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="support-form-section">
//         <h2>Still Need Help?</h2>
//         <div className="support-form">
//           <div className="form-group">
//             <label className="form-label">Subject</label>
//             <input type="text" className="form-input" placeholder="What do you need help with?" />
//           </div>
//           <div className="form-group">
//             <label className="form-label">Description</label>
//             <textarea 
//               className="form-textarea" 
//               rows="5" 
//               placeholder="Please describe your issue in detail..."
//             ></textarea>
//           </div>
//           <button className="btn primary">Send Message</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HelpSupport;