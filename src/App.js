import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import data from './data.json';

function App() {
  const [isCollapsed, setIsCollapsed] = useState(null);

  const toggleCollapse = (num) => {
    if (isCollapsed === num) {
      setIsCollapsed(null);
      return;
    }

    setIsCollapsed(num);
  };

  return (
    <div className="App">
      <div className="App-header">Helen's Menu</div>
      <div className="recipe-container">
        {
          data.map((recipe) => {
            return (
              <div
                className="recipe"
                key={recipe.id}
                style={{ cursor: 'pointer' }}
              >
                <h6 className="title" onClick={() => toggleCollapse(recipe.id)} >{recipe.name} <span className='title-tag'>{recipe.tag}</span></h6>
                {(
                  <div className={`recipe-ingredients ${ isCollapsed === recipe.id ? "expanded": "" }`}>
                    <p className='desc'>{recipe.description}</p>
                    <p>Ingredients:</p>
                    <div className="ingredient-container">
                      {
                        recipe.ingredients.map((ingredient, i) => {
                          return (
                            <div className="ingredients" key={i}>{ingredient}</div>
                          );
                        })
                      }
                    </div>
                  </div>
                )}
              </div>
            );
          })
        }

      </div>
    </div>
  );
}

export default App;
