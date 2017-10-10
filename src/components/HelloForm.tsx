// reference path="../typings.tsd.d.ts" />

import * as React from 'react';

export default class HelloForm extends React.Component<any, any> {
  constructor(props:any) {
    super(props);
  }

  public render() {
    return (
      <div>
        <input
          value={this.props.name}
          onChange={this.props.handleInput} />
      </div>
    );
  }
}
