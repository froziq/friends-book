import React from 'react';

import AppWrapper from './AppWrapper';
import Main from '../Main/index';

class App extends React.Component {
  render() {
    return (
      <AppWrapper>
        <Main />
      </AppWrapper>
    );
  }
}

export default App;
