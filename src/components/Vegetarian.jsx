import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Vegetarian = () => {
  const apiKey = import.meta.env.VITE_API_KEY;

  const [vegetarian, setVegetarian] = useState([]);

  useEffect(() => {
    getVegetarian();
  }, []);

  const getVegetarian = async () => {
    const check = localStorage.getItem('vegetarian');

    if (check) {
      setVegetarian(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=9&tags=vegetarian`
      );
      const data = await api.json();

      localStorage.setItem('vegetarian', JSON.stringify(data.recipes));
      setVegetarian(data.recipes);
      console.log(data.recipes);
    }
  };

  return (
    <div className='mb-4 p-4'>
      <h1 className='mb-4 text-center text-2xl'>Vegetarian foods</h1>
      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '5rem',
        }}
      >
        {vegetarian.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <Link to={'/recipe/' + recipe.id}>
                <img
                  className='relative h-full w-full rounded-lg'
                  src={recipe.image}
                  alt={recipe.title}
                />
                <p className='absolute bottom-0 w-full rounded-b-lg bg-black bg-opacity-20 p-2 text-center text-sm text-white'>
                  {recipe.title}
                </p>
              </Link>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default Vegetarian;
