import styled from 'styled-components';
import { Body2 } from '../Typography';

const ErrorMessage = styled(Body2)`
  color: ${({ theme }) => theme.e};
  margin-top: 0.4rem;
`;

export default ErrorMessage;
