import { Container } from 'reactstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { isDarkTheme } = useTheme();
  
  return (
    <footer 
      className={`py-3 mt-4 ${isDarkTheme ? 'bg-dark text-light' : 'bg-light text-dark'}`}
    >
      <Container className="text-center">
        <p className="mb-3">Desenvolvido por Tiago Serra</p>
        <div className="d-flex justify-content-center gap-3">
          <a 
            href="https://github.com/seu-usuario" 
            target="_blank" 
            rel="noopener noreferrer"
            className={isDarkTheme ? "text-light" : "text-dark"}
          >
            <FaGithub size={24} />
          </a>
          <a 
            href="www.linkedin.com/in/tserra" 
            target="_blank" 
            rel="noopener noreferrer"
            className={isDarkTheme ? "text-light" : "text-dark"}
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer; 