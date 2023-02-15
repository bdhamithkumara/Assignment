import './App.css';
import NavBar from './components/structure/NavBar'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Showdatapage from './components/structure/ViewData'
import Home from './components/structure/Home'


function App() {
  return (
    <div className='mx-5 md:mx-20'>

      <NavBar className="overflow-hidden" />
      <Router>
        <Routes>
          <Route path='/allData' element={<Showdatapage />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
