import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Flexbox } from 'components/elements'
import classes from './CreateAccountTemplate.scss'

export default class CreateAccountTemplate extends Component {
  render() {
    const { children } = this.props
    return (
      <Flexbox className={classes.mainContainer} justify="center" align="center" flexWrap="wrap">
        <main>
          <Flexbox className={classes.content} justify="center" flexWrap="wrap">
            {children}
          </Flexbox>
        </main>
      </Flexbox>
    )
  }
}

CreateAccountTemplate.propTypes = {
  children: PropTypes.node.isRequired,
}
