import { Box, Flex, Label, Text } from 'components/elements'
import { array, bool, func, number, oneOf, string } from 'prop-types'
import React, { Component } from 'react'
import { pickSpace, validationRules } from 'utils'

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
    const { label, labelColor, labelPosition, labelSize } = this.props

    return (
      <Flex
        direction={labelPosition == 'left' ? 'row' : 'column'}
        {...pickSpace(this.props)}
      >
        {label && (
          <Label
            color={labelColor}
            fontSize={labelSize}
            htmlFor={this.props.name}
          >
            {label}
          </Label>
        )}

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
          color={this.props.color}
          hasErrors={this.state.errors.length > 0}
          mb={3}
          name={this.props.name}
          onBlur={this.props.onBlur}
          onChange={this.handleChange}
          p={1}
          placeholder={this.props.placeholder}
          type={this.props.type}
          value={this.props.value}
          width={this.props.width}
        />
      </Flex>
    )
  }
}

Input.defaultProps = {
  borderColor: 'primary',
  color: 'black',
  labelPosition: 'top',
  type: 'text',
  width: '200px',
}

Input.propTypes = {
  borderColor: string,
  checked: bool,
  className: string,
  color: string,
  hint: string,
  id: string,
  label: string,
  labelColor: string,
  labelPosition: oneOf(['top', 'left']),
  labelSize: number,
  name: string,
  onBlur: func,
  onChange: func,
  overrideValidation: bool,
  placeholder: string,
  type: string,
  validations: array,
  value: string,
  width: string,
}

export default Input
