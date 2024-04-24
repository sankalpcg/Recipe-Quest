import React from "react";
import FryingPan from "./FryingPan";
import Recipe from "./Recipe";
import Spinner from "./Spinner";

const Home = ({ recipes, loading, error }) => {
  return (
    <div className="home container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      {/* Introduction Section */}
      <section className="introduction text-center mb-12">
        <h1 className="home-title text-6xl font-bold mb-6 text-gray-900">
          Welcome to Recipe Quest!
        </h1>
        <p className="home-description text-xl mb-8 text-gray-700">
          Embark on a culinary adventure like no other! Recipe Quest is your
          gateway to a world of exquisite flavors and culinary wonders.
        </p>
        <div className="features text-left mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Features:</h2>
          <ul className="list-disc list-inside">
            <li className="text-xl text-gray-700">
              Explore a diverse collection of recipes from around the globe.
            </li>
            <li className="text-xl text-gray-700">
              Discover recipes for every taste, including hearty comfort foods,
              vibrant plant-based dishes, and decadent desserts.
            </li>
            <li className="text-xl text-gray-700">
              Experience cuisines from every corner of the world, ensuring
              there's something for every palate.
            </li>
            <li className="text-xl text-gray-700">
              Engage in culinary creativity and elevate your cooking skills
              with our curated selection of recipes.
            </li>
            <li className="text-xl text-gray-700">
              Join a community of food enthusiasts and share your own culinary
              creations.
            </li>
          </ul>
        </div>
        <p className="home-description text-xl mb-8 text-gray-700">
          Join us as we embark on a quest to tantalize your taste buds, inspire
          your culinary creativity, and elevate your cooking experience to new
          heights. Get ready to unlock a world of delicious possibilities with
          Recipe Quest!
        </p>
      </section>

      {/* Recipe List Section */}
      {!loading && !error && recipes.length === 0 ? (
        <div>
          <ul className="recipe-list">
            {recipes.map((recipe) => (
              <Recipe key={recipe.id} recipe={recipe} />
            ))}
          </ul>
          <FryingPan />
        </div>
      ) : null}

      {/* Loading/Error Handling */}
      {loading && (
        <div className="flex items-center justify-center">
          <Spinner />
        </div>
      )}

      {/* Render Recipes */}
      {recipes?.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <Recipe key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
