import Button from 'Button';

const ButtonEdit = Button.extend`
  width: 200px;
  height: 50px;
  margin: 50px 0;
  border: 1px solid #cacaca;
  transition: background-color 0.4s;

  &:hover {
    background-color: white;
  }

  &:focus {
  }
`;

export default ButtonEdit;
