import { Flex, Relative } from 'components/elements'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { colors } from 'theme'

const Img = styled.img`
  border-radius: 50%;
  left: 50%;
  position: absolute;
  top: 12px;
  transform: translateX(-50%);
  width: 145px;
`

const Svg = styled.svg`
  display: block;
  margin: 0 auto;
`

const TrackCircle = styled.circle`
  fill: transparent;
  stroke: ${colors.white};
  stroke-width: ${props => props.strokewidth};
`

const FillingCirlce = styled.circle`
  fill: transparent;
  transition: stroke-dasharray 0.3s ease;
  stroke: ${colors.primary};
  stroke-width: ${props => props.strokewidth};
`

const DonutChart = ({ size, strokewidth, value }) => {
  const halfsize = size * 0.5
  const radius = halfsize - strokewidth * 0.5
  const circumference = 2 * Math.PI * radius
  const strokeval = value * circumference / 100
  const dashval = strokeval + ' ' + circumference

  const rotateval = 'rotate(-90 ' + halfsize + ',' + halfsize + ')'

  return (
    <Flex justify="center" direction="column" m={2}>
      <Relative>
        <Svg width={size} height={size}>
          <TrackCircle
            cx={halfsize}
            cy={halfsize}
            r={radius}
            strokewidth={strokewidth}
            transform={rotateval}
          />
          <FillingCirlce
            cx={halfsize}
            cy={halfsize}
            r={radius}
            strokewidth={strokewidth}
            style={{ strokeDasharray: dashval }}
            transform={rotateval}
          />
        </Svg>
        <Img alt="avatar" src="/public/images/avatar.png" width={size * 0.85} />
      </Relative>
    </Flex>
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
