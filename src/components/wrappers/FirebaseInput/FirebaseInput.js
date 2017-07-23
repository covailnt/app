import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import appStore from 'reducers'
import { setProfileSpecialty } from 'actions'
import { Input } from 'components/elements'
import classes from './FirebaseInput.scss'

class FirebaseInput extends Component {
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
        value={this.props[this.props.name]}
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

const mapStateToProps = (state, ownProps) => {
  return { [ownProps.name]: state.user[ownProps.name] }
}

export default connect(mapStateToProps)(FirebaseInput)
