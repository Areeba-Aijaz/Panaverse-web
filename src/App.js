import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Syllabus from './components/Syllabus';
import Videos from './components/Videos';
import Signup from './components/Signup';
import About from './components/About';

function App() {
  return (
    <Router>
      <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/videos" element={<Videos />} /> 
            <Route path="/Syllabus" element={<Syllabus />} />
            <Route path="/login" element={<Login />} /> 
            <Route path="/signup" element={<Signup />} />
            <Route path="/About" element={<About />} />

          </Routes>
       <Footer /> 
    </Router>
  );
}

export default App;