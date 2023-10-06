import './App.css';
import './testuser.css'
import Navbar from './pages/Navbar';
import Navlink from './pages/Navlink';
import TMDBFooter from './pages/Componant/TMDBFooter';


// "backdrop_path
const App = () => {
  return (
    <div className="flex relative justify-center flex-col">
      <div className='p-1  '>
        <Navbar />
      </div>
      <div className='w-full absolute top-20  h-full z-30 '>
        <Navlink />
      </div>
    </div>
  );
}

export default App;
