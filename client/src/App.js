import './App.css';
import NavBar from './components/structure/NavBar'
import Middlepart from './components/structure/Middlepart';
import Footer from './components/structure/Footer'


function App() {
  return (
    <div className='mx-5 md:mx-20'>
      <NavBar/>
      <Middlepart />
      <Footer  />
    </div>
  );
}

export default App;
