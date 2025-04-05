import { Button } from 'reactstrap';
import { useTheme } from '../contexts/ThemeContext';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

const ThemeSwitcher = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <Button
      color="link"
      onClick={toggleTheme}
      className="p-1 border-0 d-flex align-items-center justify-content-center"
      style={{ 
        backgroundColor: 'transparent',
        width: '32px',
        height: '32px',
        minWidth: 'auto'
      }}
    >
      {isDarkTheme ? (
        <MdLightMode size={24} style={{ color: '#ffd700' }} />
      ) : (
        <MdDarkMode size={24} style={{ color: '#666' }} />
      )}
    </Button>
  );
};

export default ThemeSwitcher; 