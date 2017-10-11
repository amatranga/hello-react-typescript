// <reference path="../typings.tsd.d.ts" />
/// <reference path="./interfaces.d.ts" />

import * as React from 'react';

// If no definition, pass any as the first expected...

// export default class HelloForm extends React.Component<any, any> {}

// If a definition file exists, the first argument is the definition to use
export default class HelloForm extends React.Component<IHelloFormProps, any> {
  constructor(props:any) {
    super(props);
  }

  public render() {
    return (
      <div>
        <input
          placeholder={this.props.name}
          onChange={this.props.handleInput} />
      </div>
    );
  }
}
