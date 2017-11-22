import { setInputVal } from 'actions'
import {
  Aux,
  Badge,
  Box,
  Button,
  DropDown,
  Link,
  List,
  Text,
} from 'components/elements'
import { DonutChart } from 'components/groups'
import { throttle } from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { breakpoints } from 'theme'
import { shade } from 'utils'
import {
  KINDA_BUSY,
  KINDA_LIGHT,
  NOT_THAT_BUSY,
  NOT_WORKING,
  REALLY_BUSY,
  REALLY_LIGHT,
  SLAMMED,
} from 'utils/constants'

import { FlexStyled, StatusCtn, ToggleOpen } from './styled'

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
    window.addEventListener('resize', throttle(this.getWindowSize, 150))
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
    const menu = [
      { badge: 'edit', text: 'Profile', route: '/profile' },
      { badge: '1', text: 'Contacts', route: '/contacts' },
      { badge: '1', text: 'Chat', route: '/chat' },
      { badge: '2', text: 'Collab Sessions', route: '/collab' },
    ]

    const menuBg = shade('black', 0.1)

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
          <Box>
            <DonutChart value={this.state.value} />
            <StatusCtn>
              <DropDown
                dirty={this.state.dirty}
                handleChange={this.handleChange}
                items={this.state.items}
                label="This week I am:"
                m={2}
                name="profile-dropdown"
                placeholder="How busy are you?"
                value={this.state.status}
              />

              {this.state.dirty ? (
                <Button>Update Availability</Button>
              ) : (
                <Text.p align="center" color="primary">
                  <span>You are up to date.</span>
                  <br />
                  Last Updated: Today
                  <br />
                  Expires in: 7 days
                </Text.p>
              )}
            </StatusCtn>

            <Box mt={1}>
              <List m={0} p={0}>
                {menu.map(item => (
                  <Link
                    bg={menuBg}
                    key={item.route}
                    to={item.route}
                    mb={1}
                    px={4}
                    py={2}
                  >
                    {item.text}
                    <Badge bg="primary" style={{ float: 'right' }}>
                      {item.badge}
                    </Badge>
                  </Link>
                ))}
              </List>
            </Box>
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
