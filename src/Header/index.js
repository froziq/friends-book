import React from 'react';

import HeaderWrapper from './HeaderWrapper';
import AddForm from 'AddForm';

class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper>
        <AddForm onFriendAdd={this.props.onFriendAdd}/>
      </HeaderWrapper>
    );
  }
}

export default Header;
