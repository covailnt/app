import { Flex } from 'components/elements'
import { Rank } from 'components/groups'
import { Navbar, Sidebar, UserMenu } from 'components/partials'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import classes from './AuthenticatedTemplate.scss'

export default class AuthenticatedTemplate extends Component {
  render() {
    const { children } = this.props
    return (
      <Flex>
        <Sidebar />

        <Flex className={classes.rightColumn} direction="column">
          <Navbar>
            <div className={classes.headerStats}>
              <ul className={classes.headerList}>
                <Rank color="white" type="Earned" value="005" />
                <Rank color="white" type="Potential" value="99" />
                <li>
                  <UserMenu />
                </li>
              </ul>
            </div>
          </Navbar>

          <main>{children}</main>
        </Flex>
      </Flex>
    )
  }
}

AuthenticatedTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  donutchart: PropTypes.node,
}
