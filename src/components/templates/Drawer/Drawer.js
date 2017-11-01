import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Drawer as Sidebar } from 'rebass'

const mql = window.matchMedia(`(min-width: 800px)`)

class Drawer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mql: mql,
      open: mql.matches,
    }

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this)
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged)
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged)
  }

  mediaQueryChanged() {
    this.setState({ mql: mql, open: this.state.mql.matches })
  }

  render() {
    return (
      <Sidebar open={this.state.open} bg="black">
        {this.props.children}
      </Sidebar>
    )
  }
}

Drawer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Drawer
