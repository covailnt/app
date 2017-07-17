import React, { Component } from 'react'
import PropTypes from 'prop-types'

import appStore from 'reducers'
import { setProfileSpecialty } from 'actions/setProfileSpecialty'
import { Input } from 'components/elements'
import classes from './FirebaseInput.scss'

export default class FirebaseInput extends Component {
  constructor() {
    super()

    this.state = {
      value: '',
    }
  }
  componentWillMount() {
    console.log('mounting')
  }
  updateVal(e) {
    const value = e.target.value
    console.log('change')
    this.setState({ value })
    appStore.dispatch(setProfileSpecialty(value))
  }
  render() {
    return (
      <Input
        color={this.props.color}
        onChange={e => this.updateVal(e)}
        placeholder={this.props.placeholder}
        type="text"
        value={this.state.value}
      />
    )
  }
}

FirebaseInput.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  placeholder: PropTypes.string,
  uid: PropTypes.string,
}
