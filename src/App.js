import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Favorite from './components/Favorite/Favorite';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound'; 

const App = () => {
  return (
    <Router>
      <main>
        <NavBar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} /> {}
          </Routes>
        </Container>
      </main>
    </Router>
  );
};

export default App;
