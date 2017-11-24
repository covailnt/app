import { Box, Label, Text } from 'components/elements'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { validationRules } from 'utils'

import { StyledInput } from './styles'

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
        if (!validationRules[v].test(e.target.value)) {
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

        <Box>
          {this.state.errors.map(err => (
            <Text color="red5" fontSize={1} key={err}>
              {validationRules[err].hint(this.props.name)}
            </Text>
          ))}
        </Box>

        <StyledInput
          bg="gray1"
          borderColor={this.props.borderColor}
          color="black"
          hasErrors={this.state.errors.length > 0}
          mb={3}
          name={this.props.name}
          onBlur={this.props.onBlur}
          onChange={this.handleChange}
          p={1}
          placeholder={this.props.placeholder}
          type={this.props.type}
          value={this.props.value}
        />

        {this.props.labelAfter && label}
      </div>
    )
  }
}

Input.defaultProps = {
  borderColor: 'primary',
  type: 'text',
}

Input.propTypes = {
  borderColor: PropTypes.string,
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
