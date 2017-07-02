import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'components/elements'
import './DropDown.scss'
import theme from 'theme'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  icon: {
    color: theme.color.black,
  },
  select: {
    backgroundColor: theme.color.white,
  }
})

const DropDown = ({ handleChange, items, name, value }) => (
  <div className='select-wrapper'>
    <div className='select-ctn'>
      <select
        className={`${css(styles.select)} dropDown`}
        name={name}
        onChange={handleChange}
        defaultValue={value}
      >
        {items.map(item => <option key={item} value={item}>{item}</option>)}
      </select>

      <Icon id='angle-down' className={css(styles.icon)} name='angle-down' />
    </div>
  </div>
)

DropDown.propTypes = {
  handleChange: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  name: PropTypes.string,
  value: PropTypes.number.isRequired,
}

export default DropDown