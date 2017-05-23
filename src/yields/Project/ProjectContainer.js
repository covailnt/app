import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { firebaseConnect, isLoaded, dataToJS } from 'react-redux-firebase'
import LoadingSpinner from '../../elements/LoadingSpinner'
import classes from './ProjectContainer.scss'

// Get project path from firebase based on params prop (route params)
@firebaseConnect(({ match }) => ([
  `projects/${match.params.id}`
]))
// Map state to props
@connect(({ firebase }, { match }) => ({
  project: dataToJS(firebase, `projects/${match.params.id}`)
}))
export default class Project extends Component {
  static propTypes = {
    project: PropTypes.object,
    params: PropTypes.object.isRequired
  }
  componentWillMount () {
    console.log('this.props', this.props)
  }

  render () {
    const { project, match } = this.props

    if (!isLoaded(project)) {
      return <LoadingSpinner />
    }

    return (
      <div className={classes.container}>
        <h2>Project Container</h2>
        <pre>Project Key: {match.params.id}</pre>
        <pre>{JSON.stringify(project, null, 2)}</pre>
      </div>
    )
  }
}
