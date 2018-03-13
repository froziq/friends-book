import React from 'react';
import PropTypes from 'prop-types';

import HeaderWrapper from './HeaderWrapper';
import AddForm from '../AddForm';

class Header extends React.PureComponent {
  render() {
    return (
      <HeaderWrapper>
        <AddForm onFriendAdd={this.props.onFriendAdd} />
      </HeaderWrapper>
    );
  }
}

Header.propTypes = {
  onFriendAdd: PropTypes.func,
};

export default Header;
