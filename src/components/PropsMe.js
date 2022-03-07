import React from 'react'


function PropsMe(props) {
    const{name, model, year} = props
    console.log(props);
  return (
    <div>
        <h2>I have two {name} which are {model} bought in {year}</h2>
    </div>
  )
}

export default PropsMe

// import React, { Component } from 'react'

// class PropsMe extends Component {
//   render() {
//     const {name, model, year} = this.props
//     return (
//       <div>
//           <h1>This class has a car @ {name}</h1>
//       </div>
//     )
//   }
// }

// export default PropsMe