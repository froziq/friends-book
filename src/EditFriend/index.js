import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { Map } from 'immutable';

import Edit from '../ButtonEdit';
import Reject from '../ButtonReject';
import Submit from '../ButtonSubmit';

import EditFriendWrapper from './EditFriendWrapper';
import InfoField from './InfoField';
import Input from './Input';
import Span from './Span';
import Error from './Error';
import ButtonHome from './ButtonHome';

class EditFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editedValue: '',
      inputForEdit: '',
      error: '',
    };
    this.handleNameInput = this.handleInput.bind(this, 'name');
    this.handleTelInput = this.handleInput.bind(this, 'tel');
    this.handleNameEditClick = this.handleEditClick.bind(this, 'name');
    this.handleTelEditClick = this.handleEditClick.bind(this, 'tel');
    this.handleNameEditsSubmit = this.handleEditsSubmit.bind(this, 'name');
    this.handleTelEditsSubmit = this.handleEditsSubmit.bind(this, 'tel');
  }

  componentWillMount() {
    if (!this.props.friends.has(this.props.match.params.id)) {
      this.setState({ error: 'notFound' });
    }
  }

  handleInput = (type, { target }) => {
    this.setState({ editedValue: target.value });
  }

  handleEditClick = (inputForEdit) => {
    this.setState({
      inputForEdit,
      editedValue: this.props.friends.getIn([this.props.match.params.id, inputForEdit]),
    });
  }

  handleEditsSubmit = () => {
    this.setState({ inputForEdit: '' });
    this.props.onEdit(this.props.match.params.id, this.state.inputForEdit, this.state.editedValue);
  }

  handleEditsReject = () => {
    this.setState({
      inputForEdit: '',
    });
  }

  goHome = () => {
    this.props.history.push('/');
  }

  render() {
    return (
      <EditFriendWrapper>
        {this.state.error ? (
          <React.Fragment>
            <Error>Друг не найден</Error>
            <ButtonHome
              type="button"
              onClick={this.goHome}
              aria-label="Перейти на главную"
            >
              Перейти на главную
            </ButtonHome>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <ButtonHome
              type="button"
              onClick={this.goHome}
              aria-label="Перейти на главную"
            >
              Перейти на главную
            </ButtonHome>
            <InfoField>
              Имя:
              {this.state.inputForEdit === 'name' ?
                <React.Fragment>
                  <Input
                    type="text"
                    value={this.state.editedValue}
                    onInput={this.handleNameInput}
                    required
                  />
                  <Submit
                    size={35}
                    type="button"
                    onClick={this.handleNameEditsSubmit}
                    aria-label="Подтвердить изменения"
                  />
                  <Reject
                    size={35}
                    type="button"
                    onClick={this.handleEditsReject}
                    aria-label="Отклонить изменения"
                  />
                </React.Fragment>
              :
                <React.Fragment>
                  <Span>{this.props.friends.getIn([this.props.match.params.id, 'name'])}</Span>
                  <Edit
                    size={22}
                    type="button"
                    onClick={this.handleNameEditClick}
                    disabled={!this.props.friends.getIn([this.props.match.params.id, 'name'])}
                    aria-label="Редактировать имя"
                  />
                </React.Fragment>
              }
            </InfoField>

            <InfoField>
              Телефон:
              {this.state.inputForEdit === 'tel' ?
                <React.Fragment>
                  <Input
                    type="text"
                    value={this.state.editedValue}
                    onInput={this.handleTelInput}
                    required
                  />
                  <Submit
                    size={35}
                    type="button"
                    onClick={this.handleTelEditsSubmit}
                    aria-label="Подтвердить изменения"
                  />
                  <Reject
                    size={35}
                    type="button"
                    onClick={this.handleEditsReject}
                    aria-label="Отклонить изменения"
                  />
                </React.Fragment>
              :
                <React.Fragment>
                  <Span>{this.props.friends.getIn([this.props.match.params.id, 'tel'])}</Span>
                  <Edit
                    size={22}
                    type="button"
                    onClick={this.handleTelEditClick}
                    disabled={!this.props.friends.getIn([this.props.match.params.id, 'tel'])}
                    aria-label="Редактировать номер телефона"
                  />
                </React.Fragment>
              }
            </InfoField>
          </React.Fragment>
        )}
      </EditFriendWrapper>
    );
  }
}

EditFriend.propTypes = {
  friends: PropTypes.instanceOf(Map),
  match: PropTypes.object,
  history: PropTypes.object,
  onEdit: PropTypes.func,
};

export default withRouter(EditFriend);
