import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Popular = () => {
  const apiKey = import.meta.env.VITE_API_KEY;

  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem('popular');

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=9`
      );
      const data = await api.json();

      localStorage.setItem('popular', JSON.stringify(data.recipes));
      setPopular(data.recipes);
      console.log(data.recipes);
    }
  };

  return (
    <div className='mb-4 p-4'>
      <h1 className='mb-4 text-center text-2xl'>Popular foods</h1>
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '2.5rem',
        }}
      >
        {popular.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <div className='relative h-[50vh] w-full overflow-hidden'>
                <Link to={'/recipe/' + recipe.id}>
                  <img
                    className='absolute h-full w-full rounded-lg object-cover'
                    src={recipe.image}
                    alt={recipe.title}
                  />
                  <p className='absolute bottom-0 w-full rounded-b-lg bg-black bg-opacity-20 p-2 text-center text-sm text-white'>
                    {recipe.title}
                  </p>
                </Link>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default Popular;
