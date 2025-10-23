import React, { useState } from 'react';
import './Nutrition.css';

const Nutrition = () => {
  const [activeStage, setActiveStage] = useState('pregnancy');
  const [activeTab, setActiveTab] = useState('diet');

  const nutritionData = {
    pregnancy: {
      title: 'Pregnancy Nutrition',
      description: 'Essential nutrients for mother and baby development',
      diet: {
        title: 'Daily Diet Plan',
        meals: [
          {
            time: 'Breakfast (8:00 AM)',
            items: ['2 whole wheat chapatis', '1 bowl vegetable curry', '1 glass milk', 'Handful of nuts']
          },
          {
            time: 'Mid-morning (11:00 AM)',
            items: ['1 bowl fresh fruits', '1 cup yogurt', 'Handful of roasted chana']
          },
          {
            time: 'Lunch (1:00 PM)',
            items: ['1 bowl brown rice', '2 chapatis', 'Dal & vegetables', 'Salad', '1 bowl curd']
          },
          {
            time: 'Evening (4:00 PM)',
            items: ['1 glass fruit juice', 'Sprouts salad', '1-2 whole grain biscuits']
          },
          {
            time: 'Dinner (7:00 PM)',
            items: ['2 chapatis', 'Seasonal vegetables', 'Dal', '1 glass milk before bed']
          }
        ]
      },
      nutrients: [
        { name: 'Folic Acid', sources: 'Leafy greens, citrus fruits, beans', importance: 'Prevents neural tube defects' },
        { name: 'Iron', sources: 'Spinach, lentils, jaggery', importance: 'Prevents anemia, supports baby growth' },
        { name: 'Calcium', sources: 'Milk, cheese, ragi, sesame', importance: 'Bone development for baby' },
        { name: 'Protein', sources: 'Pulses, eggs, dairy, nuts', importance: 'Tissue and organ development' },
        { name: 'Omega-3', sources: 'Walnuts, flaxseeds, fish', importance: 'Brain development' }
      ],
      recipes: [
        {
          name: 'Pregnancy Laddu',
          ingredients: ['1 cup gond', '1 cup ghee', '1 cup dry fruits', '1 cup jaggery', '1 cup whole wheat flour'],
          preparation: 'Roast gond in ghee, add flour and dry fruits. Mix with jaggery syrup and make laddus.',
          benefits: 'Energy booster, strengthens bones, prevents weakness'
        },
        {
          name: 'Ragi Malt',
          ingredients: ['2 tbsp ragi flour', '1 glass milk', 'Jaggery to taste', 'Cardamom powder'],
          preparation: 'Mix ragi flour with milk, cook on low flame. Add jaggery and cardamom.',
          benefits: 'Rich in calcium and iron, easy digestion'
        }
      ]
    },
    postpartum: {
      title: 'Postpartum Nutrition',
      description: 'Recovery and lactation support through diet',
      diet: {
        title: 'Traditional Recovery Diet',
        meals: [
          {
            time: 'Early Morning',
            items: ['Dry fruit milkshake', 'Gond ke laddoo', 'Ajwain water']
          },
          {
            time: 'Breakfast',
            items: ['Poha/Upma', 'Vegetable stuffed paratha', 'Milk with turmeric']
          },
          {
            time: 'Lunch',
            items: ['2-3 chapatis with ghee', 'Dal & vegetables', 'Rice', 'Salad', 'Bowl of curd']
          },
          {
            time: 'Evening',
            items: ['Soups', 'Fruit bowl', 'Nuts & seeds']
          },
          {
            time: 'Dinner',
            items: ['Khichdi', 'Vegetable soup', 'Milk with nuts']
          }
        ]
      },
      nutrients: [
        { name: 'Galactagogues', sources: 'Fenugreek, fennel, garlic', importance: 'Increase milk production' },
        { name: 'Iron & Calcium', sources: 'Leafy greens, dairy, sesame', importance: 'Recovery and bone health' },
        { name: 'Protein', sources: 'Pulses, eggs, dairy', importance: 'Tissue repair and milk quality' },
        { name: 'Healthy Fats', sources: 'Ghee, nuts, seeds', importance: 'Hormone balance and energy' }
      ],
      recipes: [
        {
          name: 'Lactation Laddu',
          ingredients: ['1 cup fenugreek seeds', '1 cup fennel seeds', '1 cup gond', '1 cup ghee', '1 cup jaggery'],
          preparation: 'Roast all ingredients in ghee, mix with jaggery syrup and make laddus.',
          benefits: 'Boosts milk supply, aids digestion, provides energy'
        },
        {
          name: 'Panjiri',
          ingredients: ['1 cup whole wheat flour', '1/2 cup ghee', '1/2 cup dry fruits', '1/2 cup gond', 'Edible gum'],
          preparation: 'Roast flour in ghee, add crushed dry fruits and gond. Store and have 2 spoons daily.',
          benefits: 'Strengthens joints, provides energy, helps recovery'
        }
      ]
    },
    baby: {
      title: 'Baby Nutrition (6+ Months)',
      description: 'Introduction to solid foods and balanced nutrition',
      diet: {
        title: 'Weaning Foods Introduction',
        meals: [
          {
            time: 'Stage 1 (6-7 months)',
            items: ['Rice water', 'Mashed banana', 'Moong dal water', 'Apple puree']
          },
          {
            time: 'Stage 2 (7-8 months)',
            items: ['Khichdi', 'Vegetable puree', 'Fruit mash', 'Ragi porridge']
          },
          {
            time: 'Stage 3 (8-10 months)',
            items: ['Soft idli', 'Paneer mash', 'Egg yolk', 'Lentil soups']
          },
          {
            time: 'Stage 4 (10-12 months)',
            items: ['Soft roti pieces', 'Mashed vegetables', 'Finger foods', 'Family foods (mashed)']
          }
        ]
      },
      nutrients: [
        { name: 'Iron', sources: 'Fortified cereals, lentils, greens', importance: 'Brain development' },
        { name: 'Calcium', sources: 'Milk, cheese, ragi', importance: 'Bone and teeth growth' },
        { name: 'Protein', sources: 'Lentils, eggs, dairy', importance: 'Muscle development' },
        { name: 'Healthy Fats', sources: 'Ghee, avocado, nuts (paste)', importance: 'Brain development' }
      ],
      recipes: [
        {
          name: 'Baby Khichdi',
          ingredients: ['2 tbsp rice', '1 tbsp moong dal', '1/2 cup vegetables', '1 tsp ghee', 'Turmeric pinch'],
          preparation: 'Pressure cook all ingredients until soft. Mash well and serve warm.',
          benefits: 'Easy to digest, complete nutrition, energy rich'
        },
        {
          name: 'Ragi Porridge',
          ingredients: ['2 tbsp ragi flour', '1 cup water/milk', 'Jaggery to taste'],
          preparation: 'Mix ragi flour with water, cook on low flame. Add jaggery and serve.',
          benefits: 'High in calcium and iron, brain development'
        }
      ]
    }
  };

  const currentData = nutritionData[activeStage];

  return (
    <div className="nutrition-page">
      <div className="page-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Nutrition & Diet Plans 🥗</h1>
            <p>Balanced diet plans and traditional recipes for every stage of motherhood</p>
          </div>
        </div>
      </div>

      <div className="nutrition-content">
        <div className="container">
          <div className="stage-selector">
            <button 
              className={`stage-btn ${activeStage === 'pregnancy' ? 'active' : ''}`}
              onClick={() => setActiveStage('pregnancy')}
            >
              🤰 Pregnancy
            </button>
            <button 
              className={`stage-btn ${activeStage === 'postpartum' ? 'active' : ''}`}
              onClick={() => setActiveStage('postpartum')}
            >
              👶 Postpartum
            </button>
            <button 
              className={`stage-btn ${activeStage === 'baby' ? 'active' : ''}`}
              onClick={() => setActiveStage('baby')}
            >
              🍼 Baby Nutrition
            </button>
          </div>

          <div className="nutrition-section">
            <div className="section-header">
              <h2>{currentData.title}</h2>
              <p>{currentData.description}</p>
            </div>

            <div className="nutrition-tabs">
              <div className="tab-buttons">
                <button 
                  className={`tab-btn ${activeTab === 'diet' ? 'active' : ''}`}
                  onClick={() => setActiveTab('diet')}
                >
                  🍽️ Diet Plan
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'nutrients' ? 'active' : ''}`}
                  onClick={() => setActiveTab('nutrients')}
                >
                  💊 Key Nutrients
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'recipes' ? 'active' : ''}`}
                  onClick={() => setActiveTab('recipes')}
                >
                  👩‍🍳 Traditional Recipes
                </button>
              </div>

              <div className="tab-content">
                {activeTab === 'diet' && (
                  <div className="diet-plan">
                    <h3>{currentData.diet.title}</h3>
                    <div className="meals-timeline">
                      {currentData.diet.meals.map((meal, index) => (
                        <div key={index} className="meal-card">
                          <div className="meal-time">{meal.time}</div>
                          <div className="meal-items">
                            {meal.items.map((item, itemIndex) => (
                              <span key={itemIndex} className="meal-item">• {item}</span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'nutrients' && (
                  <div className="nutrients-section">
                    <h3>Essential Nutrients</h3>
                    <div className="nutrients-grid">
                      {currentData.nutrients.map((nutrient, index) => (
                        <div key={index} className="nutrient-card">
                          <h4>{nutrient.name}</h4>
                          <div className="nutrient-details">
                            <p><strong>Sources:</strong> {nutrient.sources}</p>
                            <p><strong>Importance:</strong> {nutrient.importance}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'recipes' && (
                  <div className="recipes-section">
                    <h3>Traditional Recipes</h3>
                    <div className="recipes-grid">
                      {currentData.recipes.map((recipe, index) => (
                        <div key={index} className="recipe-card">
                          <h4>{recipe.name}</h4>
                          <div className="recipe-ingredients">
                            <h5>Ingredients:</h5>
                            <ul>
                              {recipe.ingredients.map((ingredient, ingIndex) => (
                                <li key={ingIndex}>{ingredient}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="recipe-preparation">
                            <h5>Preparation:</h5>
                            <p>{recipe.preparation}</p>
                          </div>
                          <div className="recipe-benefits">
                            <h5>Benefits:</h5>
                            <p>{recipe.benefits}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="nutrition-tips">
            <h2>General Nutrition Tips</h2>
            <div className="tips-grid">
              <div className="tip-card">
                <div className="tip-icon">💧</div>
                <h4>Stay Hydrated</h4>
                <p>Drink 8-10 glasses of water daily. Include coconut water, buttermilk, and fresh juices.</p>
              </div>
              <div className="tip-card">
                <div className="tip-icon">🍎</div>
                <h4>Eat Fresh</h4>
                <p>Choose seasonal, locally available fruits and vegetables for maximum nutrition.</p>
              </div>
              <div className="tip-card">
                <div className="tip-icon">⏰</div>
                <h4>Regular Meals</h4>
                <p>Eat small, frequent meals every 2-3 hours to maintain energy levels.</p>
              </div>
              <div className="tip-card">
                <div className="tip-icon">🚫</div>
                <h4>Avoid Processed Foods</h4>
                <p>Limit packaged foods, excess sugar, and fried items. Choose homemade meals.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nutrition;