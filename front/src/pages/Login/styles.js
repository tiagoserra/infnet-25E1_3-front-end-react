import styled from 'styled-components';
import { Container as BootstrapContainer } from 'reactstrap';

export const Container = styled(BootstrapContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 200px);
  padding: 2rem;
`;

export const LoginCard = styled.div`
  background-color: ${props => props.theme.isDark ? '#2c2c2c' : '#ffffff'};
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

export const Title = styled.h2`
  color: ${props => props.theme.isDark ? '#ffffff' : '#333333'};
  text-align: center;
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid ${props => props.theme.isDark ? '#444444' : '#dddddd'};
  border-radius: 4px;
  background-color: ${props => props.theme.isDark ? '#333333' : '#ffffff'};
  color: ${props => props.theme.isDark ? '#ffffff' : '#333333'};
  
  &:focus {
    outline: none;
    border-color: #646cff;
  }
`;

export const Button = styled.button`
  background-color: #646cff;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #535bf2;
  }
`;

export const ErrorMessage = styled.p`
  color: #ff4444;
  text-align: center;
  margin-bottom: 1rem;
`;

export const LoadingMessage = styled.p`
  color: ${props => props.theme.isDark ? '#ffffff' : '#333333'};
  text-align: center;
  margin-top: 1rem;
`; 