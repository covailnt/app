import React from 'react'
import { storiesOf } from '@kadira/storybook'
import DonutChart from '.'

storiesOf('DonutChart', module).add('default', () => (
  <DonutChart size={170} strokeWidth={50} value={55} />
))
