import React, { Component, cloneElement } from 'react'
export default class Familia extends Component {
  render () {
    return (
      <div>
        {
          this.props.children.map((child, i) => {
            return cloneElement(child, { ...this.props, key: i })
          })
        }
      </div>
    )
  }
}

// 1 solution
/* <FamiliaMembro nome="João" sobrenome={this.props.sobrenome} />
        <FamiliaMembro nome="Maria" {...this.props} />
        <FamiliaMembro nome="Ana" sobrenome="Silva" /> */

// 2 solution
// {
//   React.Children.map(this.props.children, (child, i) => {
//     return cloneElement(child, { ...this.props, key: i })
//   })
// }

// 3 solution
// {
//   this.props.children.map((child, i) => {
//     return cloneElement(child, { ...this.props, key: i })
//   })
// }
