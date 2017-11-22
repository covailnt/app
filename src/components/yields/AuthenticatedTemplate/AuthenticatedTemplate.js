import { Flex } from 'components/elements'
import { Rank } from 'components/groups'
import { Navbar, Sidebar, UserMenu } from 'components/partials'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class AuthenticatedTemplate extends Component {
  render() {
    const { children } = this.props
    return (
      <Flex>
        <Sidebar />

        <Flex direction="column" width={1}>
          <Navbar>
            <Flex align="center" justify="space-around" mx={2} width={1 / 3}>
              <Rank color="white" type="Earned" value="005" />
              <Rank color="white" type="Potential" value="99" />
              <UserMenu />
            </Flex>
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
