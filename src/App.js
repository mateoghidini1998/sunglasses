import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import './assets/css/styles.css'

import Sunglasses from './components/Products/Sunglasses';
import Landing from './components/ui/Landing';
import Navbar from './components/ui/Navbar'



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route exact path='/sunglasses' element={<Sunglasses />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
