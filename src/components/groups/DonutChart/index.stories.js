import { storiesOf } from '@kadira/storybook'
import React from 'react'

import DonutChart from '.'

storiesOf('DonutChart', module).add('default', () => (
  <DonutChart size={170} strokeWidth={50} value={55} />
))
