// reference path="../typings.tsd.d.ts" />
/// <reference path="./interfaces.d.ts" />

import * as React from 'react';


// If no definition, pass any as the first expected...

// export default class HelloForm extends React.Component<any, any> {}

// If a definition file exists, the first argument is the definition to use

const HelloContent = (props:IHelloContentProps) => {
  return (
    <div>
      Hello {props.name}
    </div>
  );
}

export default HelloContent;
