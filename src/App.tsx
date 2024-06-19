import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import MyProjects from './components/projects/MyProjects';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<MyProjects />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
