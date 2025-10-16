import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NoteState from './context/notes/NoteState';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <NoteState>
      <Router>
        <Navbar />
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/about" element = {<About/>}/>
        </Routes>
      </Router>
    </NoteState>  // every component inside NoteState can access the state values
  );
}

export default App;