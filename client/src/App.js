import './App.css';
import NavBar from './components/structure/NavBar'
import Middlepart from './components/structure/Middlepart';
import Footer from './components/structure/Footer'
import RArrow from './assets/arrrowrotate.svg'


function App() {
  return (
    <div className='mx-5 md:mx-20'>
      <NavBar className="overflow-hidden"/>
      <Middlepart className="overflow-hidden" />
      <div className='md:hidden overflow-hidden text-[28px] font-[Optima] uppercase mx-6 mt-[-850px] md:mt-0'>
        <p>Curious about what </p> 
          <p>we can do for you? </p>
        <p className='underline inline-flex'>Let's talk <img src={RArrow} alt="rotateArrow" className='mx-2' />
        </p>
      </div>
      <Footer className="overflow-hidden"  />
    </div>
  );
}

export default App;
