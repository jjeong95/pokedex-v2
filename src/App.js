import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';

import Main from './Pages/Main/Main'

import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path ="/" element={<Main/>}>
        </Route>
      </Routes>
    </Router>
    
  );
}

export default App;
