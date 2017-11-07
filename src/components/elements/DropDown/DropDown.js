import { StyleSheet, css } from 'aphrodite'
import { Icon } from 'components/elements'
import { Button, Label } from 'components/elements'
import PropTypes from 'prop-types'
import React from 'react'
import { Flex } from 'rebass'
import theme from 'theme'

import classes from './DropDown.scss'

const styles = StyleSheet.create({
  icon: {
    color: theme.colors.black,
  },
  select: {
    backgroundColor: theme.colors.white,
  },
})

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
    <div className={classes.selectCtn}>
      {label && <Label htmlFor={name}>{label}</Label>}

      <select
        className={`${css(styles.select)} ${classes.dropDown}`}
        name={name}
        onChange={handleChange}
        value={value}
      >
        {items.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <Icon
        className={`${css(styles.icon)} ${classes.angleDown}`}
        name="angle-down"
      />
    </div>

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
