import React, { Component } from 'react';
import uuidv1 from 'uuid/v1';

import AddFormWrapper from './AddFormWrapper';
import Name from './Name';
import Tel from './Tel';
import Input from './Input';
import Button from './Button';

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      tel: '',
    };
    this.handleNameInput = this.handleInput.bind(this, 'name');
    this.handleTelInput = this.handleInput.bind(this, 'tel');
  }

  handleInput = (type, { target }) => {
    this.setState({ [type]: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onFriendAdd({
      name: this.state.name,
      tel: this.state.tel,
      id: uuidv1(),
    });
  }

  render() {
    return (
      <AddFormWrapper onSubmit={this.handleSubmit}>
        <Name>Имя:</Name>
        <Input
          type="text"
          value={this.state.name}
          onInput={this.handleNameInput}
          required
        />
        <Tel>Телефон:</Tel>
        <Input
          type="text"
          value={this.state.tel}
          onInput={this.handleTelInput}
        />
        <Button
          type="submit"
          value="Добавить запись о друге"
          aria-label="Добавить запись о друге"
        />
      </AddFormWrapper>
    );
  }
}

export default AddForm;
