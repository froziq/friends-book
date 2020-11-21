import styled from 'styled-components';

const Button = styled.button`
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  margin: 0 10px;
  padding: 0;
  border: none;
  border-radius: 3px;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

export default Button;
