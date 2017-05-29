import {Component} from 'react';
import {Button, Select} from 'components/elements';
import {taskActions} from 'actions';
import {connect} from 'react-redux';
import {Modal} from 'components/groups';

class AssignTask extends Component {
  constructor(){
    super();
    this.state = {};
    this.handleChange = this.handleChange.bind(this)
    this.handleAssignment = this.handleAssignment.bind(this)
    this.params = {resourceId: ''}
  }
  handleChange(key, e){
    this.params[key] = e.target.value
  }
  handleAssignment(e){
    e.preventDefault();
    taskActions.assignTask(this.props.taskId, this.params.resourceId)
    this.props.onClose()
  }
  render(){
    return (
      <div>
        <Modal visible={this.props.visible} title='Create Task' onClose={this.props.onClose}>
          <form onSubmit={this.handleAssignment}>
            <Select onChange={this.handleChange.bind(null, 'resourceId')}>
              <option value=''>None</option>
              {this.props.resources.map((resource)=>(
                <option key={resource.id} value={resource.id}>{resource.name}</option>
              ))}
            </Select>
            <br />
            <br />
            <Button>Save</Button>
          </form>
        </Modal>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    resources: state.resources
  }
}

export default connect(mapStateToProps)(AssignTask)