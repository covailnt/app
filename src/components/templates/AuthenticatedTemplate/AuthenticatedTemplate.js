import React, { Component } from 'react'
import { Rank, Sidebar } from 'components/groups'
import { Navbar, UserMenu } from 'components/wrappers'

export default class AuthenticatedTemplate extends Component {
  render() {
    const { children, donutchart } = this.props
    return (
      <div className="flex-row">

        <Sidebar>{donutchart}</Sidebar>

        <div className="right-ctn flex-column">

          <Navbar color="black">
            <Rank color="white" type="Earned" value="005" />
            <Rank color="white" type="Potential" value="99" />
            <UserMenu />
          </Navbar>

          <div className="content">
            {children}
          </div>
        </div>
      </div>
    )
  }
}
