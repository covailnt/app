import { setInputVal } from 'actions'
import { Input } from 'components/elements'
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
        id={this.props.id}
        className={this.props.className}
        name={this.props.name}
        validations={this.props.validations}
        type={this.props.type || 'text'}
        placeholder={this.props.placeholder}
        value={this.state.value}
        checked={this.props.checked}
        onBlur={this.props.onBlur}
        onChange={(e, errors) => this.updateVal(e, errors)}
        label={this.props.label}
        labelAfter={this.props.labelAfter}
        style={this.props.style}
        color={this.props.color}
      />
    )
  }
}

FirebaseInput.propTypes = {
  uid: PropTypes.string,
  setInputVal: PropTypes.func.isRequired,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  validations: PropTypes.array,
  checked: PropTypes.bool,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  labelAfter: PropTypes.bool,
  color: PropTypes.string,
  style: PropTypes.string,
}

const mapStateToProps = (state, ownProps) => {
  return { [ownProps.name]: state.user[ownProps.name] }
}

export default connect(mapStateToProps, { setInputVal })(FirebaseInput)
