import styled from 'styled-components';

const Button = styled.input`
  font-weight: 700;height: 40px;
  padding: 0 5px;
  border: 0;
  background: transparent;
  color: #2b87db;
  font-size: 15px;
  cursor: pointer;
  border-radius: 3px;
  transition: background 0.4s ease;

  &:hover {
    background: #dadbdd;
  }
`;

export default Button;
