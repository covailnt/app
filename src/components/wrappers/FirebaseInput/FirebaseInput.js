import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setInputVal } from 'actions'
import { Input } from 'components/elements'

class FirebaseInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: props[props.name],
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.name !== nextProps.name) {
      this.setState({ value: nextProps[nextProps.name] })
    }
  }
  updateVal(e) {
    const value = e.target.value
    this.setState({ value })
    this.props.setInputVal({ name: this.props.name, value })
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
  setInputVal: PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => {
  return { [ownProps.name]: state.user[ownProps.name] }
}

export default connect(mapStateToProps, { setInputVal })(FirebaseInput)
