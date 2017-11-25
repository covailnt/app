import { Flex, IconButton } from '~/components/elements'
import { Absolute, Label, Relative } from '~/components/elements'
import { pickSpace } from '~/utils'
import PropTypes from 'prop-types'
import React from 'react'

import { Select } from './styled'

const DropDown = ({ handleChange, items, label, name, value, ...props }) => {
  return (
    <Flex
      align="center"
      direction="column"
      justify="center"
      {...pickSpace(props)}
    >
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
    </Flex>
  )
}

DropDown.propTypes = {
  handleChange: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
}

export default DropDown
