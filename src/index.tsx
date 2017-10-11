// <reference path="../typings/tsd.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';

class Main extends React.Component<any, any> {
  constructor(props:any) {
    super(props);
  }

  public render() {
    return (
      <HelloWorld name="passed down props!" />
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
