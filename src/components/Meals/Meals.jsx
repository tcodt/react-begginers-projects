import axios from "axios";
import { useState, useEffect } from "react";

const Meals = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => setItems(res.data.meals))
      .catch((err) => console.log(err));
  }, []);

  const itemsList = items.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section
        key={idMeal}
        className="flex flex-col gap-4 items-center justify-center"
      >
        <img
          src={strMealThumb}
          alt={strMeal}
          className="w-[80%] h-52 object-cover rounded"
        />
        <section className="flex justify-between gap-4">
          <p className="text-gray-700 text-base font-medium">{strMeal}</p>
          <p className="text-gray-700 text-base font-medium">#{idMeal}</p>
        </section>
      </section>
    );
  });

  return (
    <div className="container mx-auto py-8 grid grid-cols-2 gap-4">
      {itemsList}
    </div>
  );
};

export default Meals;
