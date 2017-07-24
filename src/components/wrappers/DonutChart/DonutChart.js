import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DropDown, Flexbox } from 'components/elements'
import avatar from 'images/avatar.png'
import theme from 'theme'
import classes from './DonutChart.scss'

const statuses = [
  'Not Working',
  'Really Light',
  'Kinda Light',
  'Not That Busy',
  'Kinda Busy',
  'Really Busy',
  'Slammed',
]

export default class DonutChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: this.setDonutValue('Kinda Busy'),
      status: 'Kinda Busy',
      dirty: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateStatus = this.updateStatus.bind(this)
  }
  setDonutValue(status) {
    switch (status) {
      case statuses[0]:
        return 0

      case statuses[1]:
        return 12.5

      case statuses[2]:
        return 25

      case statuses[3]:
        return 37.5

      case statuses[4]:
        return 62.5

      case statuses[5]:
        return 75

      case statuses[6]:
        return 100

      default:
        return 75
    }
  }
  updateStatus(status) {
    this.setState({ value: this.setDonutValue(status) })
  }
  handleClick() {
    this.setState({
      open: !this.state.open,
    })
  }
  handleChange() {
    this.setState({ dirty: true })
  }
  handleSubmit() {
    this.setState({ value: document.getElementById('profile-dropdown').value })
    this.updateStatus(document.getElementById('profile-dropdown').value)
    this.setState({ dirty: false })
  }
  render() {
    const { size, strokewidth, avatarImage } = this.props

    const halfsize = (size * 0.5)
    const radius = halfsize - (strokewidth * 0.5)
    const circumference = 2 * Math.PI * radius
    const strokeval = ((this.state.value * circumference) / 100)
    const dashval = (strokeval + ' ' + circumference)

    const trackstyle = {
      strokeWidth: strokewidth,
      stroke: theme.color.white,
    }

    const indicatorstyle = {
      strokeWidth: strokewidth,
      strokeDasharray: dashval,
      stroke: theme.color.primary,
    }

    const rotateval = 'rotate(-90 ' + halfsize + ',' + halfsize + ')'

    return (
      <Flexbox className={classes.donutWrapper} justify="center" direction="column" flexWrap="nowrap">
        <div className={classes.donutCtn}>
          <svg className={classes.donutchart} width={size} height={size}>
            <circle className={classes.donutchartTrack} r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={trackstyle} />
            <circle className={classes.donutchartFilling} r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={indicatorstyle} />
          </svg>
          <img alt="avatar" src={avatarImage || avatar} />
        </div>

        <div className={classes.statusCtn}>
          <label htmlFor="profile-dropdown">This week I am:</label>
          <DropDown
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            items={statuses}
            name="profile-dropdown"
            defaultValue={this.state.status}
            submitButton={this.state.dirty ? {
              classes: classes.btnPrimary,
              text: 'Update Availability',
            } : {}
            }
          />

          {this.state.dirty ? false :  (
            <p className={classes.statusMsg}>
              <span>You are up to date.</span>
              <br />
              Last Updated: Today
              <br />
              Expires in: 7 days
            </p>
          )}
        </div>
      </Flexbox>
    )
  }
}

DonutChart.defaultProps = {
  size: 116,
  strokewidth: 15,
}

DonutChart.propTypes = {
  avatarImage: PropTypes.string,   // source of image
  size: PropTypes.number,         // diameter of chart
  strokewidth: PropTypes.number,  // width of chart line
}
