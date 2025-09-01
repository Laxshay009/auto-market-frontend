import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import ShowroomPage from './pages/ShowroomPage';
import VehicleDetailPage from './pages/VehicleDetailPage';
import ComparePage from './pages/ComparePage';
import ConfiguratorPage from './pages/ConfiguratorPage';
import CheckoutPage from './pages/CheckoutPage';
import SavedPage from './pages/SavedPage';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // const saved = localStorage.getItem('darkMode');
    // return saved ? JSON.parse(saved) : false;
    return true;
  });
  
  const [theme, setTheme] = useState(() => {
    // const saved = localStorage.getItem('theme');
    // return saved || 'default';
    return 'golden'
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    // Remove all theme classes
    document.documentElement.classList.remove('theme-golden');
    // Add the selected theme class
    if (theme === 'golden') {
      document.documentElement.classList.add('theme-golden');
    }
  }, [theme]);


  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? 'bg-dark-bg' : 'bg-light-bg'
      }`}>
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} theme={theme} setTheme={setTheme} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage isDarkMode={isDarkMode} />} />
            <Route path="/catalog" element={<CatalogPage isDarkMode={isDarkMode} />} />
            <Route path="/showroom" element={<ShowroomPage isDarkMode={isDarkMode} />} />
            <Route path="/vehicle/:id" element={<VehicleDetailPage isDarkMode={isDarkMode} />} />
            <Route path="/compare" element={<ComparePage isDarkMode={isDarkMode} />} />
            <Route path="/configure/:id" element={<ConfiguratorPage isDarkMode={isDarkMode} />} />
            <Route path="/saved" element={<SavedPage isDarkMode={isDarkMode} />} />
            <Route path="/checkout" element={<CheckoutPage isDarkMode={isDarkMode} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;