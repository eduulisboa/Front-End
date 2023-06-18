import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ExampleComponent: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {/* Rest of your component */}
    </div>
  );
};

export default ExampleComponent;