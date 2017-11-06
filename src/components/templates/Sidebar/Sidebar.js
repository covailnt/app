import { setInputVal } from 'actions'
import { Aux, DropDown, MenuItem } from 'components/elements'
import { DonutChart } from 'components/groups'
import { debounce } from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Box } from 'rebass'
import { breakpoints } from 'theme'
import {
  KINDA_BUSY,
  KINDA_LIGHT,
  NOT_THAT_BUSY,
  NOT_WORKING,
  REALLY_BUSY,
  REALLY_LIGHT,
  SLAMMED,
} from 'utils/constants'

import classes from './Sidebar.scss'
import { FlexStyled, ToggleOpen } from './styled'

class Sidebar extends Component {
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
      isOpen: this.matchMedia(),
      status: props.status || KINDA_BUSY,
      value: this.setDonutValue(props.status || KINDA_BUSY),
    }

    this.getWindowSize = this.getWindowSize.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentWillMount() {
    window.addEventListener('resize', debounce(this.getWindowSize, 150))
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.getWindowSize)
  }
  matchMedia() {
    const size = `(min-width: ${breakpoints[1]}em)`
    return window.matchMedia(size).matches
  }
  getWindowSize() {
    this.setState({ isOpen: this.matchMedia() })
  }
  handleChange(e) {
    const status = e.target.value
    this.setState({
      dirty: true,
      status,
      value: this.setDonutValue(status),
    })
  }
  handleSubmit() {
    this.setState({ dirty: false })
    this.props.setInputVal({ name: 'status', value: this.state.status })
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
      <Aux>
        <ToggleOpen
          m={2}
          p={3}
          bg="primary"
          z={1}
          right
          top
          onClick={() => this.setState({ isOpen: !this.state.isOpen })}
        >
          Hello
        </ToggleOpen>

        <FlexStyled direction="column" bg="black" isOpen={this.state.isOpen}>
          <Box py={2} px={['0px', 2]}>
            <DonutChart value={this.state.value} />
            <div className={classes.statusCtn} bg="blue">
              <DropDown
                handleChange={this.handleChange}
                items={this.state.items}
                name="profile-dropdown"
                placeholder="How busy are you?"
                value={this.state.status}
                label="This week I am:"
                submitButton={
                  this.state.dirty
                    ? {
                        classes: classes.btnPrimary,
                        text: 'Update Availability',
                      }
                    : {}
                }
              />

              {this.state.dirty ? (
                false
              ) : (
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
          </Box>
        </FlexStyled>
      </Aux>
    )
  }
}

Sidebar.propTypes = {
  status: PropTypes.string,
}

const mapStateToProps = state => {
  return { status: state.user.status }
}

export default connect(mapStateToProps, { setInputVal })(Sidebar)
