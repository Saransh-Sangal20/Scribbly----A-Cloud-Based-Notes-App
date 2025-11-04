import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NoteState from './context/notes/NoteState';
import Home from './components/Home';
import About from './components/About';
import Signup from './components/Signup';
import Login from './components/Login';
import Alert from './components/Alert';
import { useState } from 'react';

function App() {
  const [alert, setalert] = useState(null);  // to set alert messages

  function showalert(msg, type) {
    setalert({ msg: msg, type: type });
    setTimeout(() => {
      setalert(null);
    }, 5000);
  }

  return (
    <NoteState>
      <Router>
        <Navbar />
        <div style={{ height: "50px" }}>
          <Alert alert={alert} />
        </div>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home showalert={showalert} />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login showalert={showalert} />} />
            <Route path="/signup" element={<Signup showalert={showalert} />} />
          </Routes>
        </div>
      </Router>
    </NoteState>  // every component inside NoteState can access the state values
  );
}

export default App;