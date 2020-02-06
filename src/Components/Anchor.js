import React, { Component } from 'react'

export default class Anchor extends Component {
  render() {
    return (
      <a
        id={this.props.name}
        style={{
          position: 'absolute',
          top: -62
        }}
      />
    )
  }
}
