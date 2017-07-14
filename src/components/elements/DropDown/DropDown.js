import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'components/elements'
import theme from 'theme'
import { StyleSheet, css } from 'aphrodite'
import classes from './DropDown.scss'

const styles = StyleSheet.create({
  icon: {
    color: theme.color.black,
  },
  select: {
    backgroundColor: theme.color.white,
  },
})

const DropDown = ({ defaultValue, handleChange, items, name }) => (
  <div className={classes.selectWrapper}>
    <div className={classes.selectCtn}>
      <select
        className={`${css(styles.select)} ${classes.dropDown}`}
        name={name}
        onChange={handleChange}
        defaultValue={defaultValue}
      >
        {items.map(item => <option key={item} value={item}>{item}</option>)}
      </select>

      <Icon className={`${css(styles.icon)} ${classes.angleDown}`} name="angle-down" />
    </div>
  </div>
)

DropDown.propTypes = {
  handleChange: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  name: PropTypes.string,
  defaultValue: PropTypes.string,
}

export default DropDown
