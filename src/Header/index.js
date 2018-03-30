import React from 'react';
import PropTypes from 'prop-types';

import AddForm from 'AddForm';
import HeaderWrapper from './HeaderWrapper';

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
