import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Drawer from './components/Drawer';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <header className="h-16 border-b border-gray-200">
          <Navbar />
        </header>
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Drawer />
      </div>
    </Router>
  );
};

export default App; 