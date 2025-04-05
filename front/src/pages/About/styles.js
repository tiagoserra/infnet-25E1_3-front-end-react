import styled from 'styled-components';
import { Container as BootstrapContainer } from 'reactstrap';

export const Container = styled(BootstrapContainer)`
  padding: 2rem 1rem;
`;

export const Title = styled.h2`
  color: #333;
  margin-bottom: 2rem;
`;

export const Content = styled.div`
  margin: 2rem 0;
  line-height: 1.6;
  
  p {
    margin-bottom: 1rem;
    color: #666;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  a {
    color: #333;
    transition: color 0.2s;

    &:hover {
      color: #007bff;
    }
  }
`; 