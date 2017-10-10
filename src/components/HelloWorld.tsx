// reference path="../typings.tsd.d.ts" />

import * as React from 'react';
import HelloContent from './HelloContent';
import HelloForm from './HelloForm';

export default class HelloWorld extends React.Component<any, any> {
  constructor(props:any) {
    super(props);
    this.state = {
      name: this.props.defaultName
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  public handleChange(event:any) : void {
    this.setState({name: "Changed!"});
  }

  public handleInput(event:any) : void {
    this.setState({name: event.target.value});
  }

  public render() {
    return (
      <div>
        <HelloForm
          name={this.state.name}
          handleInput={this.handleInput} />
        <HelloContent
          name={this.state.name} />
        <button
        name="Update"
        onClick={this.handleChange}>
        Update
        </button>
      </div>
    );
  }
}
