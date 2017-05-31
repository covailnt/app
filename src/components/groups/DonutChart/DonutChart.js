import React from 'react'
import PropTypes from 'prop-types'

const DonutChart = ({ value, size, strokewidth }) => {
  const halfsize = (size * 0.5)
  const radius = halfsize - (strokewidth * 0.5)
  const circumference = 2 * Math.PI * radius
  const strokeval = ((value * circumference) / 100)
  const dashval = (strokeval + ' ' + circumference)

  const trackstyle = {strokeWidth: strokewidth}
  const indicatorstyle = {strokeWidth: strokewidth, strokeDasharray: dashval}
  const rotateval = 'rotate(-90 ' + halfsize + ',' + halfsize + ')'

  return (
    <svg className='donutchart' width={size} height={size}>
      <circle className='donutchart-track' r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={trackstyle} />
      <circle className='donutchart-filling' r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={indicatorstyle} />
    </svg>
  )
}

DonutChart.defaultProps = {
  value: 0,
  valuelabel: 'Completed',
  size: 116,
  strokewidth: 15,
}

DonutChart.propTypes = {
  value: PropTypes.number,        // value the chart should show
  valuelabel: PropTypes.string,   // label for the chart
  size: PropTypes.number,         // diameter of chart
  strokewidth: PropTypes.number,   // width of chart line
}

export default DonutChart
