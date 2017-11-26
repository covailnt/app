import { Input } from '~/components/partials'
import { setInputVal } from 'actions'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'

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
  updateVal(e, errors) {
    const value = e.target.value

    this.setState({ value })

    if (errors.length === 0) {
      this.props.setInputVal({ name: this.props.name, value })
    }
  }
  render() {
    return (
      <Input
        onChange={(e, errors) => this.updateVal(e, errors)}
        value={this.state.value}
        {...this.props}
      />
    )
  }
}

FirebaseInput.propTypes = {
  name: PropTypes.string.isRequired,
  setInputVal: PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => {
  return { [ownProps.name]: state.user[ownProps.name] }
}

export default connect(mapStateToProps, { setInputVal })(FirebaseInput)
