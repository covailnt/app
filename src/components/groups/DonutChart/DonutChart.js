import React from 'react'
import PropTypes from 'prop-types'
import { Flexbox } from 'components/elements'
import avatar from 'images/avatar.png'
import theme from 'theme'

import classes from './DonutChart.scss'

const DonutChart = ({ size, strokewidth, value }) => {
  const halfsize = size * 0.5
  const radius = halfsize - strokewidth * 0.5
  const circumference = 2 * Math.PI * radius
  const strokeval = value * circumference / 100
  const dashval = strokeval + ' ' + circumference

  const trackstyle = {
    stroke: theme.color.white,
    strokeWidth: strokewidth,
  }

  const indicatorstyle = {
    strokeWidth: strokewidth,
    strokeDasharray: dashval,
    stroke: theme.color.primary,
  }

  const rotateval = 'rotate(-90 ' + halfsize + ',' + halfsize + ')'

  return (
    <Flexbox
      className={classes.donutWrapper}
      justify="center"
      direction="column"
      flexWrap="nowrap"
    >
      <div className={classes.donutCtn}>
        <svg className={classes.donutchart} width={size} height={size}>
          <circle
            className={classes.donutchartTrack}
            r={radius}
            cx={halfsize}
            cy={halfsize}
            transform={rotateval}
            style={trackstyle}
          />
          <circle
            className={classes.donutchartFilling}
            r={radius}
            cx={halfsize}
            cy={halfsize}
            transform={rotateval}
            style={indicatorstyle}
          />
        </svg>
        <img alt="avatar" src={avatar} width={size * 0.85} />
      </div>
    </Flexbox>
  )
}

DonutChart.defaultProps = {
  size: 170,
  strokewidth: 15,
}

DonutChart.propTypes = {
  avatarImage: PropTypes.string, // source of image
  size: PropTypes.number, // diameter of chart
  strokewidth: PropTypes.number, // width of chart line
  value: PropTypes.number.isRequired,
}

export default DonutChart
