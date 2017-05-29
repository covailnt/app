import {Component} from 'react';
import {TextField, Button, TextArea, Select} from 'components/elements';
import {taskActions} from 'actions';
import {connect} from 'react-redux';
import {Modal} from 'components/groups';
import _ from 'underscore';
import style from './style';

class CreateTask extends Component {
  constructor(){
    super();
    this.state = {};
    this.handleChange = this.handleChange.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.params = {type: 'Feature', points: 1}
    this.showModal = this.showModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }
  handleChange(key, e){
    this.params[key] = e.target.value
  }
  handleSave(e){
    e.preventDefault();
    taskActions.create(this.params)
    this.closeModal()
  }
  showModal(){
    this.setState({visible: true})
  }
  closeModal(){
    this.setState({visible: false})
  }
  render(){
    return (
      <div>
        <Modal visible={this.state.visible} title='Create Task' onClose={this.closeModal}>
          <form onSubmit={this.handleSave}>
            <TextField onChange={this.handleChange.bind(null, 'name')} placeholder='Name' />
            <br />
            <br />
            <TextArea placeholder='description' onChange={this.handleChange.bind(null, 'description')} />
            <br />
            <br />
            <div className={style('row')}>
              <div className={style('split50')}>
                Type:
                <Select onChange={this.handleChange.bind(null, 'type')}>
                  <option>Feature</option>
                  <option>Bug</option>
                </Select>
              </div>
              <div className={style('split50')}>
                Points:
                <Select onChange={this.handleChange.bind(null, 'points')}>
                  {_(10).times((n)=>{
                    n = n + 1
                    return <option key={n} value={n}>{n}</option>
                  })}
                </Select>
              </div>
            </div>
            <br />
            <br />
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
        <Button onClick={this.showModal}>Create Task</Button>
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

export default connect(mapStateToProps)(CreateTask)