import React, { Component } from 'react'
import { Select } from 'components/elements'

export default class DropDown extends Component {
  constructor(props) {
    super(props)
    this.state = { value: props.items[0] }
  }
  handleChange(e) {
    this.setState({ value: e.target.value })
  }
  updateVal(e) {
    this.setState({ donutval: e.target.value })
  }
  render() {
    const { name, items } = this.props
    return (
      <Select
        handleChange={this.handleChange.bind(this)}
        items={items}
        name={name}
        value={this.state.value}
      />
    )
  }
}
