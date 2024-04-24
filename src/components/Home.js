import FryingPan from "./FryingPan";
import Recipe from "./Recipe";
import Spinner from "./Spinner";

const Home = ({ recipes, loading, error }) => {
  return (
    <div className="home container mx-auto py-10 flex flex-wrap gap-10 justify-center">

      {/* condition for ideal position */}
      {!loading && !error && recipes.length === 0 ? (
        <div>
<h1 className="home-title">Welcome to Recipe Quest!</h1>
      <p className="home-description">
      "Welcome to Recipe Quest, your ultimate destination for culinary exploration! Dive into a world of delightful flavors and discover a treasure trove of mouth-watering recipes crafted to perfection. Whether you're a seasoned chef or a cooking enthusiast, Recipe Quest is your guide to culinary adventures. Explore a diverse collection of recipes, from traditional classics to innovative creations, and embark on a quest to tantalize your taste buds. Get ready to elevate your cooking experience and unlock a world of delicious possibilities with Recipe Quest!"
      </p>
      <ul className="recipe-list">
        {recipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </ul>
          <FryingPan />
        </div>
      ) : null}

      {/* condition for loading position */}
      {loading && <p>{error ? error : <Spinner />}</p>}

      {/* condition after getting the recipes */}
      {recipes?.length > 0 &&
        recipes.map((recipe) => <Recipe recipe={recipe} key={recipe.id} />)}
    </div>
  );
};

export default Home;
