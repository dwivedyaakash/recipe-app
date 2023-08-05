import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const Searched = () => {
  const apiKey = import.meta.env.VITE_API_KEY;

  const [search, setSearched] = useState([]);

  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${name}`
    );
    const recipes = await data.json();
    setSearched(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <div className='grid grid-cols-4 gap-4'>
      {search.map((item) => {
        return (
          <div className='rounded-lg ' key={search.id}>
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

export default Searched;
