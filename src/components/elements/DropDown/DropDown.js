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

const DropDown = ({ value, handleChange, handleSubmit, items, name, submitButton, label, labelAfter }) => (
  <div className={classes.selectWrapper}>
    {!labelAfter && (label ? (<label htmlFor={name}>{label}</label>) : null)}
    <div className={classes.selectCtn}>
      <select
        className={`${css(styles.select)} ${classes.dropDown}`}
        name={name}
        id={name}
        onChange={handleChange}
        value={value}
      >
        {items.map(item => <option key={item} value={item}>{item}</option>)}
      </select>

      <Icon className={`${css(styles.icon)} ${classes.angleDown}`} name="angle-down" />
    </div>

    {submitButton.text
      ? (
        <button type="submit" className={submitButton.classes} onClick={handleSubmit}>
          {submitButton.text}
        </button>
      )
      : null
    }
    {labelAfter && (label ? (<label htmlFor={name}>{label}</label>) : null)}
  </div>
)

DropDown.defaultProps = {
  submitButton: {},
}

DropDown.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func,
  items: PropTypes.array.isRequired,
  name: PropTypes.string,
  value: PropTypes.string,
  submitButton: PropTypes.object,
  label: PropTypes.string,
  labelAfter: PropTypes.bool,
}

export default DropDown
