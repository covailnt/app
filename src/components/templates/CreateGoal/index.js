import {Component} from 'react';
import {TextField, Button, TextArea, DateField} from 'components/elements';
import {goalActions} from 'actions';
import {connect} from 'react-redux';
import {Modal} from 'components/groups';

class CreateGoal extends Component {
  constructor(){
    super();
    this.state = {};
    this.handleChange = this.handleChange.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.params = {}
    this.showModal = this.showModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }
  handleChange(key, e){
    this.params[key] = e.target.value
  }
  handleSave(e){
    e.preventDefault();
    goalActions.create(this.params)
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
        <Modal visible={this.state.visible} title='Create Goal' onClose={this.closeModal}>
          <TextField onChange={this.handleChange.bind(null, 'name')} placeholder='Name' />
          <form onSubmit={this.handleSave}>
            <br />
            <br />
            <TextArea placeholder='description' onChange={this.handleChange.bind(null, 'description')} />
            <br />
            <br />
            <DateField onChange={this.handleChange.bind(null, 'date')} />
            <br />
            <br />
            <Button>Save</Button>
          </form>
        </Modal>
        <Button onClick={this.showModal}>Create Goal</Button>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return { currentUser: state.currentUser }
}

export default connect(mapStateToProps)(CreateGoal)