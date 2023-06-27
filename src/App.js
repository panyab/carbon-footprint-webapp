import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home'
import Results from './pages/results/Results'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
      <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/partners" element={<Results/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
