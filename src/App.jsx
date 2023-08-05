import { BrowserRouter } from 'react-router-dom';
import Logo from '../favicon.png';
import Search from './components/Search';
import Category from './components/Category';
import Pages from './pages/Pages';
import './App.css';

function App() {
  return (
    <div className='mx-40'>
      <a className='flex max-w-fit items-center py-8' href='/'>
        <img className='mr-1 w-8' src={Logo} alt='logo' />
        <h1 className='text-xl font-bold'>Recipe App</h1>
      </a>
      <BrowserRouter>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
