import React from "react";

const Ingredientes = ({ ingredientes }) => {
  {
    if (ingredientes) {
      return (
        <div>
          <span className="rojito">Ingredientes</span>
          <div className="linea"></div>
          <div className="ingredientes-container">
            {ingredientes.map((ingrediente) => {
              switch (ingrediente) {
                case "Artisan Roll":
                  return (
                    <div className="ingrediente">
                      <img
                        src="https://www.mcdonalds.com/content/dam/usa/nfl/nutrition/ingredients/regular/artisan_bun.png"
                        alt=""
                      />
                      <p>{ingrediente}</p>
                    </div>
                  );
                case "Beef Patty":
                  return (
                    <div className="ingrediente">
                      <img
                        src="https://www.mcdonalds.com/content/dam/usa/nfl/nutrition/ingredients/regular/10_1_patty.png"
                        alt=""
                      />
                      <p>{ingrediente}</p>
                    </div>
                  );
                case "Crispy Chicken":
                  return (
                    <div className="ingrediente">
                      <img
                        src="https://www.mcdonalds.com/content/dam/usa/nfl/nutrition/ingredients/regular/buttermilk_crispy_chicken.png"
                        alt=""
                      />
                      <p>{ingrediente}</p>
                    </div>
                  );
                case "Bacon":
                  return (
                    <div className="ingrediente">
                      <img
                        src="https://www.mcdonalds.com/content/dam/usa/nfl/nutrition/ingredients/regular/applewood_bacon.png"
                        alt=""
                      />
                      <p>{ingrediente}</p>
                    </div>
                  );
                case "Egg":
                  return (
                    <div className="ingrediente">
                      <img
                        src="https://www.mcdonalds.com/content/dam/usa/nfl/nutrition/ingredients/regular/round_egg.png"
                        alt=""
                      />
                      <p>{ingrediente}</p>
                    </div>
                  );
                case "American Cheese":
                  return (
                    <div className="ingrediente">
                      <img
                        src="https://www.mcdonalds.com/content/dam/usa/nfl/nutrition/ingredients/regular/ingredient_american_cheese_180x180.png"
                        alt=""
                      />
                      <p>{ingrediente}</p>
                    </div>
                  );
                case "Shredded Lettuce":
                  return (
                    <div className="ingrediente">
                      <img
                        src="https://www.mcdonalds.com/content/dam/usa/nfl/nutrition/ingredients/regular/shredded_lettuce.png"
                        alt=""
                      />
                      <p>{ingrediente}</p>
                    </div>
                  );
                case "Roma Tomato":
                  return (
                    <div className="ingrediente">
                      <img
                        src="https://www.mcdonalds.com/content/dam/usa/nfl/nutrition/ingredients/regular/Ingredients_Tomato_180x180.png"
                        alt=""
                      />
                      <p>{ingrediente}</p>
                    </div>
                  );
                case "Pickle Slices":
                  return (
                    <div className="ingrediente">
                      <img
                        src="https://www.mcdonalds.com/content/dam/usa/nfl/nutrition/ingredients/regular/pickles.png"
                        alt=""
                      />
                      <p>{ingrediente}</p>
                    </div>
                  );
                case "American Sauce":
                  return (
                    <div className="ingrediente">
                      <img
                        src="https://www.mcdonalds.com/content/dam/usa/nfl/nutrition/ingredients/regular/big_mac_sauce.png"
                        alt=""
                      />
                      <p>{ingrediente}</p>
                    </div>
                  );
                case "Ketchup":
                  return (
                    <div className="ingrediente">
                      <img
                        src="https://www.mcdonalds.com/content/dam/usa/nfl/nutrition/ingredients/regular/ketchup.png"
                        alt=""
                      />
                      <p>{ingrediente}</p>
                    </div>
                  );
                case "Honey Mustard":
                  return (
                    <div className="ingrediente">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/mcdonalds-shop.appspot.com/o/mostaza.png?alt=media&token=50eea572-335d-452f-9ab7-2c319d51ac2e"
                        alt=""
                      />
                      <p>{ingrediente}</p>
                    </div>
                  );
                case "Vanilla Reduced Fat Ice Cream":
                  return (
                    <div className="ingrediente">
                      <img
                        src="https://www.mcdonalds.com/content/dam/usa/nfl/nutrition/ingredients/regular/vanilla_reduced_fat_cream.png"
                        alt=""
                      />
                      <p>{ingrediente}</p>
                    </div>
                  );
                case "Chocolate Shake Syrup":
                  return (
                    <div className="ingrediente">
                      <img
                        src="https://www.mcdonalds.com/content/dam/usa/nfl/nutrition/ingredients/regular/chocolate_shake_syrup.png"
                        alt=""
                      />
                      <p>{ingrediente}</p>
                    </div>
                  );
                case "Whipped Light Cream":
                  return (
                    <div className="ingrediente">
                      <img
                        src="https://www.mcdonalds.com/content/dam/usa/nfl/nutrition/ingredients/regular/whipped_cream.png"
                        alt=""
                      />
                      <p>{ingrediente}</p>
                    </div>
                  );

                default:
                  return (
                    <div className="ingrediente">
                      <img
                        src="https://www.mcdonalds.com/content/dam/usa/nfl/nutrition/ingredients/regular/Ingredients_Tomato_180x180.png"
                        alt=""
                      />
                      <p>{ingrediente}</p>
                    </div>
                  );
              }
            })}
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
};
export default Ingredientes;
