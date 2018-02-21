import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  withRouter,
} from 'react-router-dom';
import { fromJS, OrderedSet } from 'immutable';

import Friends from '../Friends/index';
import EditFriend from '../EditFriend/index';

class Main extends React.Component {
  state = {
    friends: fromJS({}),
    ids: OrderedSet(),
  }

  handleFriendAdd = ({ name, tel, id}) => {
    this.setState((prevState) => ({
      friends: prevState.friends.concat(fromJS({
        [id]: {
          name,
          tel,
        }
      })),
      ids: prevState.ids.concat(id),
    }));
  }

  handleDelete = (id) => {
    this.setState((prevState) => ({
      friends: prevState.friends.delete(id),
      ids: prevState.ids.delete(id)
    }));
  }

  handleEdit = (id, field, corrections) => {
    this.setState((prevState) => ({
      friends: prevState.friends.setIn([id, field], corrections),
    }));
  }

  render() {
    console.log(this.state.friends);
    return (
      <Switch>
        <Route exact path="/" render={(props) =>
          <Friends
            friends={this.state.friends}
            ids={this.state.ids}
            onFriendAdd={this.handleFriendAdd}
            onDelete={this.handleDelete}
          />}
        />
        <Route path="/edit/:id" render={(props) =>
          <EditFriend friends={this.state.friends} onEdit={this.handleEdit} />}
        />
        <Redirect from="/edit" to="/" />
      </Switch>
    );
  }
}

export default withRouter(Main);
