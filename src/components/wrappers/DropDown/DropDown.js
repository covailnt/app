import React, { Component } from 'react'
import { Select, Icon } from 'components/elements'
import './DropDown.scss'
import theme from 'theme'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  icon: {
    color: theme.color.black,
  }
})

export default class DropDown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'Kinda Busy',
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    this.setState({ value: e.target.value })
    this.props.updateStatus(e.target.value)
  }
  render() {
    const { name, items } = this.props
    return (
      <div className='select-ctn'>
        <Select
          handleChange={this.handleChange}
          items={items}
          name={name}
          value={this.state.value}
        />
        <Icon id='angle-down' className={css(styles.icon)} name='angle-down' />
      </div>
    )
  }
}
