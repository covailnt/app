import React, { Component } from 'react'
import { Select, Fa } from 'components/elements'
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
      value: props.items[0],
      open: false,
      size: 0,
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    this.setState({ value: e.target.value })
  }
  updateVal(e) {
    this.setState({ donutval: e.target.value })
  }
  render() {
    const { name, items, placeholder } = this.props
    return (
      <div className='select-ctn'>
        <Select
          handleChange={this.handleChange}
          items={items}
          name={name}
          value={this.state.value}
          placeholder={placeholder}
        />
        <Fa className={css(styles.icon)} icon='angle-down' />
      </div>
    )
  }
}
