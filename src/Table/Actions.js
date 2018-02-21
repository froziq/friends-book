import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

import Edit from '../ButtonEdit';
import Delete from '../ButtonDelete';

import ActionsWrapper from './ActionsWrapper';

class Actions extends Component {
  handleDelete = () => {
    this.props.onDelete(this.props.id);
  }

  handleEdit = () => {
    this.props.history.push(`/edit/${this.props.id}`);
  }

  render() {
    return (
      <ActionsWrapper>
        <Edit type="button" onClick={this.handleEdit} />
        <Delete type="button" onClick={this.handleDelete} />
      </ActionsWrapper>
    );
  }
}

export default withRouter(Actions);
