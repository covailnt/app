import { IconButton } from 'components/elements'
import { Absolute, Button, Label, Relative } from 'components/elements'
import PropTypes from 'prop-types'
import React from 'react'
import { Flex } from 'rebass'

import { Select } from './styled'

const DropDown = ({
  dirty,
  handleChange,
  handleSubmit,
  items,
  label,
  name,
  submitButton,
  value,
}) => (
  <Flex align="center" direction="column" justify="center">
    {label && <Label htmlFor={name}>{label}</Label>}

    <Relative w={1}>
      <Select bg="white" name={name} onChange={handleChange} value={value}>
        {items.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </Select>

      <Absolute pointerEvents="none" right="10px" top="50%" translateY="-50%">
        <IconButton m={0} name="chevronDown" pointerEvents="none" />
      </Absolute>
    </Relative>

    {dirty &&
      submitButton && (
        <Button fullWidth type="submit" onClick={handleSubmit}>
          {submitButton}
        </Button>
      )}
  </Flex>
)

DropDown.propTypes = {
  dirty: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func,
  items: PropTypes.array.isRequired,
  label: PropTypes.string,
  name: PropTypes.string,
  submitButton: PropTypes.string,
  value: PropTypes.string,
}

export default DropDown
