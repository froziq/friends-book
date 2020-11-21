import Button from 'Button';

import normal from './normal.svg';
import hover from './hover.svg';

const ButtonDelete = Button.extend`
  background-image: url(${normal});

  &:hover {
    background-image: url(${hover});
    transition: background-image 0.15s;
  }

  &:focus {
    background-image: url(${hover});
  }
`;

export default ButtonDelete;
