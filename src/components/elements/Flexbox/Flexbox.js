import React from 'react'
import PropTypes from 'prop-types'
// import classes from './Flexbox.scss'
import { StyleSheet, css } from 'aphrodite'
import theme from 'theme'

const Flexbox = ({ align, background, className, direction, justify, children }) => {
  const styles = StyleSheet.create({
    flex: {
      backgroundColor: theme.color[background],
      display: 'flex',
      flexDirection: direction,
      justifyContent: justify,
      alignItems: align,
    },
  })
  return (
    <div className={`${css(styles.flex)} ${className}`}>{children}</div>
  )
}

Flexbox.defaultProps = {
  align: 'stretch',
  background: 'transparent',
  direction: 'row',
  justify: 'flex-start',
}

Flexbox.propTypes = {
  align: PropTypes.string,
  background: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  direction: PropTypes.string,
  justify: PropTypes.string,
}

export default Flexbox
