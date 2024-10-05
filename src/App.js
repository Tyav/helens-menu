import './App.css';
import React from 'react';

function App() {

  return (
    <>
       <header>
        <h1>Helen's Menu</h1>
        <p>Experience the delicious three-course meal</p>
    </header>

    <main>
        <section class="menu">
            <h2>Our Three-Course Meal</h2>

            <h3>Starter</h3>
            <ul>
              <li>Shredded Beef with Garri Balls Soup</li>
            </ul>

            <h3>Main Courses</h3>
            <ul>
                <li>Grilled Turkey with Honey Sauce, Fried Plantain, and Dirty Rice</li>
            </ul>

            <h3>Desserts</h3>
            <ul>
                <li>Soursop Ice Cream with Chocolate Flavor Biscuits and Chocolate Mousse</li>
            </ul>
        </section>
    </main>

    <footer>
        <p className='small-text'>Phone: (+234) 810 571 7110</p>
    </footer>
    </>
  );
}

export default App;

    // <div className="App">
    //   <div className="App-header">Helen's Menu</div>
    //   <div className="recipe-container">
        // {
        //   data.map((recipe) => {
        //     return (
        //       <div
        //         className="recipe"
        //         key={recipe.id}
        //         style={{ cursor: 'pointer' }}
        //       >
        //         <h6 className="title" onClick={() => toggleCollapse(recipe.id)} >{recipe.name} <span className='title-tag'>{recipe.tag}</span></h6>
        //         {(
        //           <div className={`recipe-ingredients ${ isCollapsed === recipe.id ? "expanded": "" }`}>
        //             <p className='desc'>{recipe.description}</p>
        //             <p>Ingredients:</p>
        //             <div className="ingredient-container">
        //               {
        //                 recipe.ingredients.map((ingredient, i) => {
        //                   return (
        //                     <div className="ingredients" key={i}>{ingredient}</div>
        //                   );
        //                 })
        //               }
        //             </div>
        //           </div>
        //         )}
        //       </div>
        //     );
        //   })
        // }

    //   </div>
    // </div>