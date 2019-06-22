import React, { useState } from 'react';

const Toggle = () => {
  const [isToggled, setToggled] = useState(false);

  return (<div>
      <button type="button" onClick={() => setToggled(!isToggled)}> Toggle Me</button>
      {isToggled && (<h2>Hello</h2>)}
    </div>);
};

export default Toggle;

// import React, { Component } from "react";
//
// export default class Refactor extends Component {
//   state = {
//     isToggled: false
//   };
//
//   toggle = () => {
//     this.setState(state => {
//       return { isToggled: !state.isToggled };
//     });
//   };
//
//   render() {
//     return (
//       <div>
//         <button onClick={this.toggle}>Toggle</button>
//         {this.state.isToggled && <h2>Hello!</h2>}
//       </div>
//     );
//   }
// }
