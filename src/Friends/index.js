import React from 'react';
import PropTypes from 'prop-types';

import { Map, OrderedSet } from 'immutable';

import Table from 'Table/index';
import Header from 'Header/index';
import FriendsWrapper from './FriendsWrapper';

class Friends extends React.PureComponent {
  render() {
    return (
      <FriendsWrapper>
        <Header onFriendAdd={this.props.onFriendAdd} />
        <Table
          friends={this.props.friends}
          ids={this.props.ids}
          onDelete={this.props.onDelete}
        />
      </FriendsWrapper>
    );
  }
}

Friends.propTypes = {
  friends: PropTypes.instanceOf(Map),
  ids: PropTypes.instanceOf(OrderedSet),
  onFriendAdd: PropTypes.func,
  onDelete: PropTypes.func,
};

export default Friends;
