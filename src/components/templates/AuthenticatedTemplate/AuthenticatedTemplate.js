import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Flexbox } from 'components/elements'
import { Rank } from 'components/groups'
import { Navbar, Sidebar, UserMenu } from 'components/wrappers'
import classes from './AuthenticatedTemplate.scss'

export default class AuthenticatedTemplate extends Component {
  render() {
    const { children } = this.props
    return (
      <Flexbox>

        <Sidebar />

        <Flexbox className={classes.rightColumn} direction="column">

          <Navbar color="black">
            <Rank color="white" type="Earned" value="005" />
            <Rank color="white" type="Potential" value="99" />
            <UserMenu />
          </Navbar>

          <main>
            {children}
          </main>
        </Flexbox>
      </Flexbox>
    )
  }
}

AuthenticatedTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  donutchart: PropTypes.node,
}
