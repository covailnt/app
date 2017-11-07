import { Label } from 'components/elements'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import theme from 'theme'
import { rules } from 'utils'

import classes from './Input.scss'

class Input extends Component {
  constructor(props) {
    super(props)

    this.state = {
      errors: [],
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const errors = this.validate(e)
    this.props.onChange(e, errors)
  }

  validate(e) {
    const errors = []
    if (this.props.validations) {
      this.props.validations.forEach(v => {
        // if current value doesn't pass validation
        if (!rules[v].test(e.target.value)) {
          errors.push(v)
        }
      })
      this.setState({ errors })
    }
    return errors
  }

  render() {
    const label = this.props.label

    return (
      <div className={this.props.className}>
        {label && <Label htmlFor={this.props.name}>{label}</Label>}
        <input
          className={`input-${this.props.type}
            ${this.props.className || ''}
            ${classes.input}
            ${this.state.errors.length > 0 && classes.formError}`}
          name={this.props.name}
          onBlur={this.props.onBlur}
          onChange={this.handleChange}
          placeholder={this.props.placeholder}
          style={{
            border:
              this.props.color &&
              this.state.errors.length === 0 &&
              `2px solid ${theme.colors[this.props.color]}`,
          }}
          type={this.props.type}
          value={this.props.value}
        />
        {this.props.labelAfter && label}
        <div className={classes.errorMessages}>
          {this.state.errors
            .map(err => {
              return rules[err].hint(this.props.name)
            })
            .join('; ')}
        </div>
      </div>
    )
  }
}

Input.defaultProps = {
  type: 'text',
}

Input.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.string,
  hint: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  labelAfter: PropTypes.bool,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  overrideValidation: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  validations: PropTypes.array,
  value: PropTypes.string,
}

export default Input
