import React from "react";
import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp.js";

const requestConfig = {};
function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  console.log("meals==>", loadedMeals);

  if (isLoading) {
    return <p>Fetching meals....</p>;
  }

  // if (!loadedMeals) {
  //   return <p>No Meals found...</p>;
  // }

  return (
    <>
      <ul id="meals">
        {loadedMeals.map((meal) => (
          <MealItem key={meal.id} meal={meal} />
        ))}
      </ul>
    </>
  );
}

export default Meals;
