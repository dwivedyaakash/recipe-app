import { FaBurger, FaPizzaSlice } from 'react-icons/fa6';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

const Category = () => {
  return (
    <div className='my-8 flex justify-center gap-10'>
      <NavLink
        className='flex
      h-20 w-20 flex-col items-center justify-center gap-1 rounded-full border bg-white text-xs text-black shadow'
        to={'/cuisine/american'}
      >
        <FaBurger />
        <h1>American</h1>
      </NavLink>
      <NavLink
        className='flex
      h-20 w-20 flex-col items-center justify-center gap-1 rounded-full border bg-white text-xs text-black shadow'
        to={'/cuisine/italian'}
      >
        <FaPizzaSlice />
        <h1>Italian</h1>
      </NavLink>
      <NavLink
        className='flex
      h-20 w-20 flex-col items-center justify-center gap-1 rounded-full border bg-white text-xs text-black shadow'
        to={'/cuisine/chinese'}
      >
        <GiNoodles />
        <h1>Chinese</h1>
      </NavLink>
      <NavLink
        className='flex
      h-20 w-20 flex-col items-center justify-center gap-1 rounded-full border bg-white text-xs text-black shadow'
        to={'/cuisine/japanese'}
      >
        <GiChopsticks />
        <h1>Japanese</h1>
      </NavLink>
    </div>
  );
};

export default Category;
