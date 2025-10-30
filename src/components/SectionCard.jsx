// src/components/SectionCard.jsx 
import React, { useState } from 'react'; 
import NotesSection from './NotesSection'; 
const SectionCard = ({ title, emoji, content, sectionKey }) => { 
const [isExpanded, setIsExpanded] = useState(false); 
const [showStory, setShowStory] = useState({}); 
const toggleStory = (index) => { 
setShowStory(prev => ({ 
...prev, 
      [index]: !prev[index] 
    })); 
  }; 
 
  const renderContent = () => { 
    switch (title) { 
      case 'Growth & Development Milestones': 
        return ( 
          <div className="space-y-6"> 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
              {content.ageRanges.map((range, index) => ( 
                <div key={index} className="bg-white/60 rounded-xl p-4 border border-pink-200"> 
                  <h4 className="text-pink-700 font-semibold text-lg mb-3">{range.age}</h4> 
                  <div className="space-y-2"> 
                    <div> 
                      <h5 className="font-semibold text-purple-600">Milestones:</h5> 
                      <ul className="list-disc list-inside text-sm space-y-1"> 
                        {range.milestones.map((milestone, idx) => ( 
                          <li key={idx}>{milestone}</li> 
                        ))} 
                      </ul> 
                    </div> 
                    <div> 
                      <h5 className="font-semibold text-purple-600">Tips:</h5> 
                      <ul className="list-disc list-inside text-sm space-y-1"> 
                        {range.tips.map((tip, idx) => ( 
                          <li key={idx}>{tip}</li> 
                        ))} 
                      </ul> 
                    </div> 
                  </div> 
                </div> 
              ))} 
            </div> 
            <NotesSection  
              sectionKey={`${sectionKey}-notes`}  
              placeholder="Today's proud moment..." 
            /> 
          </div> 
        ); 
 
      case 'Nutrition & Food Guide': 
        return ( 
          <div className="space-y-6"> 
            <div className="divide-y divide-purple-200 p-4 bg-white/60 rounded-xl"> 
              {content.guidelines.map((guide, index) => ( 
                <div key={index} className="py-4 first:pt-0 last:pb-0"> 
                  <h4 className="text-pink-700 font-semibold text-lg">{guide.age}</h4> 
                  <p className="text-purple-600 font-medium">{guide.foods}</p> 
                  <ul className="list-disc list-inside text-sm space-y-1 mt-2"> 
                    {guide.tips.map((tip, idx) => ( 
                      <li key={idx}>{tip}</li> 
                    ))} 
                  </ul> 
                </div> 
              ))} 
            </div> 
            <div className="bg-yellow-50/80 rounded-xl p-4 border border-yellow-200"> 
              <h4 className="font-semibold text-red-600 mb-2">Important Notes:</h4> 
              <ul className="list-disc list-inside text-sm space-y-1"> 
                {content.warnings.map((warning, idx) => ( 
                  <li key={idx}>{warning}</li> 
                ))} 
              </ul> 
            </div> 
            <NotesSection  
              sectionKey={`${sectionKey}-notes`}  
              placeholder="My baby's favorite meals..." 
            /> 
          </div> 
        ); 
 
      case 'Emotional Bonding & Pampering': 
        return ( 
          <div className="space-y-6"> 
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> 
              <div className="bg-white/60 rounded-xl p-4"> 
                <h4 className="text-pink-700 font-semibold mb-3">Daily Connection</h4> 
                <ul className="space-y-2 text-sm"> 
                  {content.dailyRituals.map((ritual, idx) => ( 
                    <li key={idx} className="flex items-center"> 
                      <span className="text-pink-400 mr-2">❤️</span> 
                      {ritual} 
                    </li> 
                  ))} 
                </ul> 
              </div> 
              <div className="bg-white/60 rounded-xl p-4"> 
                <h4 className="text-green-600 font-semibold mb-3">Pampering Do's</h4> 
                <ul className="space-y-2 text-sm"> 
                  {content.dos.map((item, idx) => ( 
                    <li key={idx} className="flex items-center"> 
                      <span className="text-green-400 mr-2">✓</span> 
                      {item} 
                    </li> 
                  ))} 
                </ul> 
              </div> 
              <div className="bg-white/60 rounded-xl p-4"> 
                <h4 className="text-red-600 font-semibold mb-3">Pampering Don'ts</h4> 
                <ul className="space-y-2 text-sm"> 
                  {content.donts.map((item, idx) => ( 
                    <li key={idx} className="flex items-center"> 
                      <span className="text-red-400 mr-2">✗</span> 
                      {item} 
                    </li> 
                  ))} 
                </ul> 
              </div> 
            </div> 
            <div className="bg-blue-50/80 rounded-xl p-4 border border-blue-200"> 
              <p className="text-sm italic text-blue-700">💡 {content.tip}</p> 
            </div> 
            <NotesSection  
              sectionKey={`${sectionKey}-notes`}  
              placeholder="Special bonding moments today 💗" 
            /> 
          </div> 
        ); 
 
      case 'Screen Time Guidelines': 
        return ( 
          <div className="space-y-6"> 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
              {content.guidelines.map((guide, index) => ( 
                <div key={index} className="bg-white/60 rounded-xl p-4 text-center"> 
                  <h4 className="text-pink-700 font-semibold">{guide.age}</h4> 
                  <p className="text-xl font-bold text-purple-600 my-2">{guide.recommendation}</p> 
                  <p className="text-sm text-gray-600">{guide.details}</p> 
                </div> 
              ))} 
            </div> 
            <div className="bg-white/60 rounded-xl p-4"> 
              <h4 className="text-green-600 font-semibold mb-3">Healthy Alternatives</h4> 
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2"> 
                {content.alternatives.map((alt, idx) => ( 
                  <div key={idx} className="flex items-center space-x-2 text-sm"> 
                    <span className="text-green-400">✓</span> 
                    <span>{alt}</span> 
                  </div> 
                ))} 
              </div> 
            </div> 
            <NotesSection  
              sectionKey={`${sectionKey}-notes`}  
              placeholder="Screen-free activities we enjoyed today..." 
            /> 
          </div> 
        ); 
 
      case 'Motor & Cognitive Activities': 
        return ( 
          <div className="space-y-6"> 
            <div className="space-y-4"> 
              {content.ageActivities.map((ageGroup, index) => ( 
                <div key={index} className="bg-white/60 rounded-xl p-4"> 
                  <h4 className="text-pink-700 font-semibold text-lg mb-3">{ageGroup.age}</h4> 
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
                    <div> 
                      <h5 className="font-semibold text-purple-600">Activities:</h5> 
                      <ul className="list-disc list-inside text-sm space-y-1"> 
                        {ageGroup.activities.map((activity, idx) => ( 
                          <li key={idx}>{activity}</li> 
                        ))} 
                      </ul> 
                    </div> 
                    <div> 
                      <h5 className="font-semibold text-purple-600">Tips:</h5> 
                      <ul className="list-disc list-inside text-sm space-y-1"> 
                        {ageGroup.tips.map((tip, idx) => ( 
                          <li key={idx}>{tip}</li> 
                        ))} 
                      </ul> 
                    </div> 
                  </div> 
                </div> 
              ))} 
            </div> 
            <NotesSection  
              sectionKey={`${sectionKey}-notes`}  
              placeholder="Favorite activity this week..." 
            /> 
          </div> 
        ); 
 
      case 'Storytelling & Language Growth': 
        return ( 
          <div className="space-y-6"> 
            <div className="bg-white/60 rounded-xl p-4"> 
              <h4 className="text-pink-700 font-semibold mb-3">Why Storytelling Matters</h4> 
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm"> 
                {content.benefits.map((benefit, idx) => ( 
                  <li key={idx} className="flex items-center"> 
                    <span className="text-purple-400 mr-2">✨</span> 
                    {benefit} 
                  </li> 
                ))} 
              </ul> 
            </div> 
             
            <div className="space-y-4"> 
              <h4 className="text-pink-700 font-semibold">Example Stories</h4> 
              {content.stories.map((story, index) => ( 
                <div key={index} className="bg-white/60 rounded-xl p-4"> 
                  <button 
                    onClick={() => toggleStory(index)} 
                    className="w-full flex items-center justify-between text-left" 
                  > 
                    <h5 className="font-semibold text-purple-600 text-lg">{story.title}</h5> 
                    <span className="text-pink-500 transform transition-transform duration-300"> 
                      {showStory[index] ? '−' : '+'} 
                    </span> 
                  </button> 
                  {showStory[index] && ( 
                    <p className="mt-3 text-sm text-gray-700 leading-relaxed bg-white/40 p-3 rounded-lg"> 
                      {story.content} 
                    </p> 
                  )} 
                </div> 
              ))} 
            </div> 
             
            <NotesSection  
              sectionKey={`${sectionKey}-notes`}  
              placeholder="Baby's favorite story and reactions..." 
            /> 
          </div> 
        ); 
 
      case 'Early Schooling Readiness': 
        return ( 
          <div className="space-y-6"> 
            <div className="bg-white/60 rounded-xl p-4"> 
              <h4 className="text-pink-700 font-semibold mb-3">When to Start: {content.when}</h4> 
            </div> 
             
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
              <div className="bg-white/60 rounded-xl p-4"> 
                <h4 className="text-green-600 font-semibold mb-3">Preparation Steps</h4> 
                <ul className="space-y-2 text-sm"> 
                  {content.preparation.map((step, idx) => ( 
                    <li key={idx} className="flex items-center"> 
                      <span className="text-green-400 mr-2">✓</span> 
                      {step} 
                    </li> 
                  ))} 
                </ul> 
              </div> 
               
              <div className="bg-white/60 rounded-xl p-4"> 
                <h4 className="text-blue-600 font-semibold mb-3">Parent's Role</h4> 
                <ul className="space-y-2 text-sm"> 
                  {content.parentalRole.map((role, idx) => ( 
                    <li key={idx} className="flex items-center"> 
                      <span className="text-blue-400 mr-2">👨👩👧👦</span> 
                      {role} 
                    </li> 
                  ))} 
                </ul> 
              </div> 
            </div> 
             
            <NotesSection  
              sectionKey={`${sectionKey}-notes`}  
              placeholder="My child's school prep progress..." 
            /> 
          </div> 
        ); 
 
      case 'Sharing & Caring Habits': 
        return ( 
          <div className="space-y-6"> 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
              <div className="bg-white/60 rounded-xl p-4"> 
                <h4 className="text-pink-700 font-semibold mb-3">Teaching Empathy</h4> 
                <ul className="space-y-2 text-sm"> 
                  {content.teachingEmpathy.map((strategy, idx) => ( 
                    <li key={idx} className="flex items-center"> 
                      <span className="text-pink-400 mr-2">💝</span> 
                      {strategy} 
                    </li> 
                  ))} 
                </ul> 
              </div> 
               
              <div className="bg-white/60 rounded-xl p-4"> 
                <h4 className="text-purple-600 font-semibold mb-3">Practice Activities</h4> 
                <ul className="space-y-2 text-sm"> 
                  {content.activities.map((activity, idx) => ( 
                    <li key={idx} className="flex items-center"> 
                      <span className="text-purple-400 mr-2">🎯</span> 
                      {activity} 
                    </li> 
                  ))} 
                </ul> 
              </div> 
            </div> 
             
            <NotesSection  
              sectionKey={`${sectionKey}-notes`}  
              placeholder="Today's kind act we practiced..." 
            /> 
          </div> 
        ); 
 
      case 'Social Interaction & Playdates': 
        return ( 
          <div className="space-y-6"> 
            <div className="bg-white/60 rounded-xl p-4"> 
              <h4 className="text-pink-700 font-semibold mb-3">Benefits of Social Play</h4> 
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm"> 
                {content.benefits.map((benefit, idx) => ( 
                  <div key={idx} className="flex items-center"> 
                    <span className="text-green-400 mr-2">✓</span> 
                    {benefit} 
                  </div> 
                ))} 
              </div> 
            </div> 
             
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
              <div className="bg-white/60 rounded-xl p-4"> 
                <h4 className="text-purple-600 font-semibold mb-3">How to Encourage</h4> 
                <ul className="space-y-2 text-sm"> 
                  {content.encouragementStrategies.map((strategy, idx) => ( 
                    <li key={idx} className="flex items-center"> 
                      <span className="text-purple-400 mr-2">🎪</span> 
                      {strategy} 
                    </li> 
                  ))} 
                </ul> 
              </div> 
               
              <div className="bg-white/60 rounded-xl p-4"> 
                <h4 className="text-blue-600 font-semibold mb-3">Parent Tips</h4> 
                <ul className="space-y-2 text-sm"> 
                  {content.parentTips.map((tip, idx) => ( 
                    <li key={idx} className="flex items-center"> 
                      <span className="text-blue-400 mr-2">💡</span> 
                      {tip} 
                    </li> 
))} 
</ul> 
</div> 
</div> 
<NotesSection  
sectionKey={`${sectionKey}-notes`}  
placeholder="Playdate reflections and observations..." 
/> 
</div> 
); 
default: 
return <div className="text-gray-600">{content.description}</div>; 
} 
}; 
return ( 
<div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 border border
white/50 transition-all duration-500 ease-in-out hover:shadow-xl"> 
<button 
onClick={() => setIsExpanded(!isExpanded)} 
className="w-full text-left focus:outline-none" 
> 
<div className="flex items-center justify-between"> 
<div className="flex items-center space-x-3"> 
<span className="text-2xl">{emoji}</span> 
<h3 className="text-xl font-bold text-purple-700">{title}</h3> 
</div> 
<span className="text-2xl text-pink-500 transform transition-transform duration-300"> 
{isExpanded ? '−' : '+'} 
</span> 
</div> 
<p className="mt-2 text-pink-700 font-semibold text-sm">{content.description}</p> 
</button> 
<div className={`transition-all duration-500 ease-in-out overflow-hidden ${ 
isExpanded ? 'max-h-[2000px] opacity-100 mt-6' : 'max-h-0 opacity-0' 
}`}> 
{renderContent()} 
</div> 
</div> 
); 
}; 
export default SectionCard;