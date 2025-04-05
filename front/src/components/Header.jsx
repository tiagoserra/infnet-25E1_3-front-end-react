import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/react.svg';
import ThemeSwitcher from './ThemeSwitcher';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const { isDarkTheme } = useTheme();
  
  return (
    <Navbar
      color={isDarkTheme ? 'dark' : 'light'}
      dark={isDarkTheme}
      light={!isDarkTheme}
      expand="md"
      className="px-3"
    >
      <NavbarBrand tag={Link} to="/">
        <img src={logo} alt="Logo" height="30" />
      </NavbarBrand>
      <Nav className="ms-auto" navbar>
        <NavItem>
          <NavLink tag={Link} to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/sobre">Sobre</NavLink>
        </NavItem>
        <NavItem className="d-flex align-items-center ms-2">
          <ThemeSwitcher />
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Header; 