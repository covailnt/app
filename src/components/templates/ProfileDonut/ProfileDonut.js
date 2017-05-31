import React, { Component } from 'react'
import { DonutChart } from 'components/groups'


export default class ProfileDonut extends Component {
  constructor(props) {
    super(props)
    this.state = { donutval: 55 }
  }
  updateVal(e) {
    this.setState({ donutval: e.target.value })
  }
  render() {
    return (
      <DonutChart size={170} strokeWidth={13} value={this.state.donutval} />
    )
  }
}
