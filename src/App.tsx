import React, { Component } from 'react';
import { withTheme } from '@material-ui/core/styles';
import { MenuItem, MenuList } from '@material-ui/core';

class App extends Component<{ theme: any }> {
  render() {
    console.log(this.props.theme);

    return (
      <div className="App">
        <header className="App-header">
          <MenuList>
            <MenuItem>{process.env.REACT_APP_TEST_ENV_VAR}</MenuItem>
            <MenuItem>Menu item 2</MenuItem>
            <MenuItem>Menu item 3</MenuItem>
          </MenuList>
        </header>
      </div>
    );
  }
}

export default withTheme()(App);
