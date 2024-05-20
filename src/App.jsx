import { useState } from 'react';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleButtonClick = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div style={{ backgroundColor: isDarkMode ? 'black' : 'white', height: '100vh',width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button onClick={handleButtonClick} style={{ color: isDarkMode ? 'white' : 'black', backgroundColor: 'transparent',border: isDarkMode ? '2px solid white' : '2px solid black' }}>
        {isDarkMode ? 'White' : 'Dark'}
      </button>
    </div>
  );
};

export default App;