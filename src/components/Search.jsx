import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMagnifyingGlass } from 'react-icons/fa6';

const Search = () => {
  const [input, setInput] = useState('');

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + input);
  };

  return (
    <form className='relative m-8' onSubmit={submitHandler}>
      <input
        className='w-full rounded-lg border bg-white p-2 pl-10 text-black shadow'
        onChange={(e) => setInput(e.target.value)}
        type='text'
        value={input}
        placeholder='Search your favourite food'
      />
      <FaMagnifyingGlass className='absolute left-0 top-2/4 -translate-y-1/2 translate-x-full text-black' />
    </form>
  );
};

export default Search;
