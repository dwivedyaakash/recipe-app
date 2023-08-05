import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Recipe = () => {
  const apiKey = import.meta.env.VITE_API_KEY;

  let params = useParams();

  let counter = 1;
  const [details, setDetails] = useState({});
  const [activeBtn, setActiveBtn] = useState('instructions');

  const fetchRecipe = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${apiKey}`
    );
    const recipeDetails = await data.json();
    setDetails(recipeDetails);
  };

  useEffect(() => {
    fetchRecipe();
  }, [params.name]);

  return (
    <div className='mt-8 grid grid-cols-2 gap-4 p-2'>
      <div className='flex flex-col items-start'>
        <h1 className='font-semibold'>{details.title}</h1>
        <img className='mt-4 w-full' src={details.image} alt={details.title} />
      </div>
      <div>
        <button
          className={activeBtn === 'instructions' ? 'active' : ''}
          onClick={() => setActiveBtn('instructions')}
        >
          Instructions
        </button>
        <button
          className={activeBtn === 'ingredients' ? 'active' : ''}
          onClick={() => setActiveBtn('ingredients')}
        >
          Ingredients
        </button>
        {activeBtn === 'instructions' && (
          <div>
            <h3
              className='p-2'
              dangerouslySetInnerHTML={{ __html: details.instructions }}
            ></h3>
          </div>
        )}
        {activeBtn === 'ingredients' && (
          <ul className='p-2'>
            {details.extendedIngredients.map((item) => (
              <li key={item.id}>
                {counter++}. {item.original}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Recipe;
