import React from 'react';

import Row from './Row';
import Tel from './Tel';
import Name from './Name';
import Actions from './Actions';
import TableWrapper from './TableWrapper';

class Table extends React.Component {
  render() {
    return (
      <TableWrapper>
        <tbody>
          {this.props.ids.size === 0 ?
            <Row>
              <td>Список друзей пуст</td>
            </Row>
          :
            this.props.ids.map((id) => (
              <Row key={id}>
                <Name>
                  { this.props.friends.getIn([id, 'name'])}
                </Name>

                <Tel>
                  { this.props.friends.getIn([id, 'tel']) ? this.props.friends.getIn([id, 'tel']) : 'Информация о телефоне отсутствует' }
                </Tel>

                <Actions
                  id={id}
                  onDelete={this.props.onDelete}
                />
              </Row>
            ))
          }
        </tbody>
      </TableWrapper>
    );
  }
}

export default Table;
