import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setInputVal } from 'actions'
import { Input } from 'components/elements'

class FirebaseInput extends Component {
  constructor() {
    super()

    this.state = {
      value: null,
    }
  }
  updateVal(e) {
    const value = e.target.value
    this.setState({ value })
    this.props.setInputVal({ name: this.props.name, value })
  }
  render() {
    const value = this.state.value ? this.state.value : this.props[this.props.name]

    return (
      <Input
        color={this.props.color}
        onChange={e => this.updateVal(e)}
        placeholder={this.props.placeholder}
        type="text"
        value={value}
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

export default connect(mapStateToProps, { setInputVal })(FirebaseInput)
