import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DropDown } from 'components/elements'
import avatar from 'images/avatar.png'
import theme from 'theme'

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
    const { items } = this.props

    switch (status) {
      case items[0]:
        return 0

      case items[1]:
        return 12.5

      case items[2]:
        return 25

      case items[3]:
        return 37.5

      case items[4]:
        return 62.5

      case items[5]:
        return 75

      case items[6]:
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
    const { size, strokewidth, avatarImage, items } = this.props

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
      <div className='donut-wrapper'>
        <div className='donut-ctn'>
          <svg className='donutchart' width={size} height={size}>
            <circle className='donutchart-track' r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={trackstyle} />
            <circle className='donutchart-filling' r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={indicatorstyle} />
          </svg>
          <img src={avatarImage || avatar} />
        </div>

        <DropDown
          handleChange={this.handleChange}
          items={items}
          name='profile-dropdown'
          defaultValue={this.state.status}
        />

      </div>
    )
  }
}

DonutChart.defaultProps = {
  size: 116,
  strokewidth: 15,
}

DonutChart.propTypes = {
  avatarImage: PropTypes.string,        // source of image
  size: PropTypes.number,         // diameter of chart
  strokewidth: PropTypes.number,  // width of chart line
}
