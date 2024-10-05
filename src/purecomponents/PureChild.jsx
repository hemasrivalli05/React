// import React, {PureComponent } from 'react'

// class PureChild extends PureComponent {
//   render() {
//     console.log("pure child is rendering...");
//     // console.log(this)
//     return (
//       <>
//        <h1> PureChild---{this.props.course}</h1>
//       </>
//     );
//   }
// }
// export default PureChild

//! memo()
import React, {memo} from 'react'

const PureChild = (props) => {
    // console.log(props);
    console.log("pure child rendering...")
  return (
    <>
        <h1>PureChild-{props.training}</h1>
    </>
  );
}

export default memo(PureChild)