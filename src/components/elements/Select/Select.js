import React from 'react'
import PropTypes from 'prop-types'
import theme from 'theme'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  select: {
    backgroundColor: theme.color.white,
  }
})

const Select = ({handleChange, name, items, placeholder}) => {
  return (
    <select
      className={`${css(styles.select)} dropDown`}
      name={name}
      onChange={handleChange}
    >
      <option className='placeholder' key='placeholder' value='' disabled selected>{placeholder}</option>
      {items.map(item => (
          <option key={item} value={item}>{item}</option>
        )
      )}
    </select>
  )
}

Select.propTypes = {
  name: PropTypes.string,
  items: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default Select
