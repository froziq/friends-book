import React from 'react';

import Table from 'Table/index';
import Header from 'Header/index';
import FriendsWrapper from './FriendsWrapper';

class Friends extends React.Component {
  render() {
    return (
      <FriendsWrapper>
        <Header onFriendAdd={this.props.onFriendAdd}/>
        <Table
          friends={this.props.friends}
          ids={this.props.ids}
          onDelete={this.props.onDelete}
        />
      </FriendsWrapper>
    );
  }
}

export default Friends;
