import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../assets/react.svg';
import ThemeSwitcher from './ThemeSwitcher';
import { useTheme } from '../contexts/ThemeContext';
import { logout } from "../redux/slices/authSlice";

const Header = () => {
  const { isDarkTheme } = useTheme();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  
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
        {user && (
          <>
            <NavItem>
              <NavLink tag={Link} to="/">Home</NavLink>
            </NavItem>
            <NavItem>
                <Button color="secondary" onClick={() => dispatch(logout())}>
                    Logout
                </Button>
            </NavItem>
          </>
        )}
        {!user &&(
          <NavItem>
            <NavLink tag={Link} to="/login">Login</NavLink>
          </NavItem>
        )}
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