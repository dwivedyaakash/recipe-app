import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Cuisine = () => {
  const apiKey = import.meta.env.VITE_API_KEY;

  let params = useParams();

  const [cuisine, setCuisine] = useState([]);

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
    <div className='grid grid-cols-4 gap-4'>
      {cuisine.map((item) => {
        return (
          <div className='rounded-lg ' key={cuisine.id}>
            <Link to={'/recipe/' + item.id}>
              <img className='rounded-lg' src={item.image} alt={item.title} />
              <h3 className='p-2 text-center text-sm '>{item.title}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Cuisine;
