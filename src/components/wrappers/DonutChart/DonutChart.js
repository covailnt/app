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
    }

    this.handleChange = this.handleChange.bind(this)
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
  handleChange(e) {
    this.setState({ value: e.target.value })
    this.updateStatus(e.target.value)
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
      <Flexbox className={classes.donutWrapper} justify="center">
        <div className={classes.donutCtn}>
          <svg className={classes.donutchart} width={size} height={size}>
            <circle className={classes.donutchartTrack} r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={trackstyle} />
            <circle className={classes.donutchartFilling} r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={indicatorstyle} />
          </svg>
          <img alt="avatar" src={avatarImage || avatar} />
        </div>

			  <div className={classes.statusCtn}>
  				<p>This week I am:</p> {/*TODO make this a label */}
          <DropDown
            handleChange={this.handleChange}
            items={statuses}
            name="profile-dropdown"
            defaultValue={this.state.status}
          />
          {/*TODO add this in, perhaps via some options using the drop-down component
          <button type="submit" className={style.btnPrimary}>Update Availability</button>
          */}

          {/*TODO implement this feature */}
  				<p className={classes.statusMsg}>
  					<span>You are up to date.</span>
  					<br />
  					Last Updated: Today
  					<br />
  					Expires in: 7 days
  				</p>
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
