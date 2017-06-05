import React from 'react'
import PropTypes from 'prop-types'

const style = {
  backgroundColor: 'white'
}

const Select = ({handleChange, name, items}) => {
  return (
    <select className='dropDown' name={name} onChange={handleChange} style={style}>
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
}

export default Select
