import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home';
import List from './Pages/List';
import Hotel from './Pages/Hotel';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hotels' element={<List />} />
          <Route path='/hotels/:id' element={<Hotel />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
