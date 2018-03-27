import { css } from 'styled-components';

import Button from 'Button';

import normal from './normal.svg';
import hover from './hover.svg';

const ButtonReject = Button.extend`
  ${(props) => props.size && css`
    width: ${props.size}px;
    height: ${props.size}px;
  `}
  background-image: url(${normal});

  &:hover {
    background-image: url(${hover});
    transition: background-image 0.15s;
  }

  &:focus {
    background-image: url(${hover});
  }
`;

export default ButtonReject;
