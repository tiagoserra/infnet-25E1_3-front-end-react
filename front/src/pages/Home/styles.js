import styled from 'styled-components';
import { Container as BootstrapContainer, Button as BootstrapButton } from 'reactstrap';

export const Container = styled(BootstrapContainer)`
  padding: 2rem 1rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Title = styled.h2`
  color: #333;
  margin: 0;
`;

export const ActionButton = styled(BootstrapButton)`
  &.btn-info, &.btn-danger {
    padding: 0.375rem 0.75rem;
    margin: 0 0.25rem;
  }
`;

export const TableActions = styled.div`
  display: flex;
  gap: 0.5rem;
`; 