import React, { Component } from 'react'
import { DropDown, Flexbox, MenuItem } from 'components/elements'
import { DonutChart } from 'components/groups'
import {
  NOT_WORKING,
  REALLY_LIGHT,
  KINDA_LIGHT,
  NOT_THAT_BUSY,
  KINDA_BUSY,
  REALLY_BUSY,
  SLAMMED,
} from 'utils/constants'

import classes from './Sidebar.scss'

export default class Sidebar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dirty: false,
      items: [
        NOT_WORKING,
        REALLY_LIGHT,
        KINDA_LIGHT,
        NOT_THAT_BUSY,
        KINDA_BUSY,
        REALLY_BUSY,
        SLAMMED,
      ],
      status: KINDA_BUSY,
      value: this.setDonutValue(KINDA_BUSY),
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e) {
    console.log('changing')
    const status = e.target.value
    this.setState({
      dirty: true,
      status,
      value: this.setDonutValue(status),
    })
  }
  handleSubmit() {
    console.log('submitting')
    this.setState({ dirty: false })
  }
  setDonutValue(status) {
    switch (status) {
      case NOT_WORKING:
        return 0

      case REALLY_LIGHT:
        return 12.5

      case KINDA_LIGHT:
        return 25

      case NOT_THAT_BUSY:
        return 37.5

      case KINDA_BUSY:
        return 62.5

      case REALLY_BUSY:
        return 75

      case SLAMMED:
        return 100
    }
  }
  render() {
    return (
      <Flexbox className={classes.sidebar} direction="column" background="black">

        <DonutChart
          value={this.state.value}
        />

        <div className={classes.statusCtn}>
          <label htmlFor="profile-dropdown">This week I am:</label>
          <DropDown
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            items={this.state.items}
            name="profile-dropdown"
            placeholder="How busy are you?"
            value={this.state.status}
            submitButton={this.state.dirty ? {
              classes: classes.btnPrimary,
              text: 'Update Availability',
            } : {}
            }
          />

          {this.state.dirty ? false : (
            <p className={classes.statusMsg}>
              <span>You are up to date.</span>
              <br />
              Last Updated: Today
              <br />
              Expires in: 7 days
            </p>
          )}
        </div>

        <div className={classes.nav}>
          <ul className={classes.sidebarNav}>
            <MenuItem link="/profile">
              Profile<span className={classes.profileEdit}>edit</span>
            </MenuItem>
            <MenuItem link="/contacts">
              Contacts <span className={classes.badge}>1</span>
            </MenuItem>
            <MenuItem link="/chat">
              Chat <span className={classes.badge}>1</span>
            </MenuItem>
            <MenuItem link="/collab">
              Collab Sessions <span className={classes.badge}>2</span>
            </MenuItem>
          </ul>
        </div>
      </Flexbox>
    )
  }
}

