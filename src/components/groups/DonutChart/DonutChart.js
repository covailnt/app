import React from 'react'
import PropTypes from 'prop-types'
import theme from 'theme'

const DonutChart = ({ value, size, strokewidth, image }) => {
  const halfsize = (size * 0.5)
  const radius = halfsize - (strokewidth * 0.5)
  const circumference = 2 * Math.PI * radius
  const strokeval = ((value * circumference) / 100)
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
        <img src={image || 'http://placekitten.com/g/200/200'} />
      </div>
    </div>
  )
}

DonutChart.defaultProps = {
  value: 0,
  valuelabel: 'Completed',
  size: 116,
  strokewidth: 15,
}

DonutChart.propTypes = {
  image: PropTypes.string,        // source of image
  value: PropTypes.number,        // value the chart should show
  valuelabel: PropTypes.string,   // label for the chart
  size: PropTypes.number,         // diameter of chart
  strokewidth: PropTypes.number,  // width of chart line
}

export default DonutChart
