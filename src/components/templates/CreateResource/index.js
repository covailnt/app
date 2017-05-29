import {Component} from 'react';
import {TextField, Button, TextArea, Select} from 'components/elements';
import {resourceActions} from 'actions';
import {connect} from 'react-redux';
import {Modal} from 'components/groups';

class CreateResource extends Component {
  constructor(){
    super();
    this.state = {};
    this.handleChange = this.handleChange.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.params = {
      type: 'Person'
    }
    this.showModal = this.showModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }
  handleChange(key, e){
    this.params[key] = e.target.value
  }
  handleSave(e){
    e.preventDefault();
    resourceActions.create(this.params)
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
        <Modal visible={this.state.visible} title='Create Resource' onClose={this.closeModal}>
          <form onSubmit={this.handleSave}>
            <TextField onChange={this.handleChange.bind(null, 'name')} placeholder='Name' />
            <br />
            <br />
            <TextArea placeholder='description' onChange={this.handleChange.bind(null, 'description')} />
            <br />
            <br />
            <Select onChange={this.handleChange.bind(null, 'type')}>
                <option>Person</option>
                <option>Place</option>
                <option>Thing</option>
            </Select>
            <br />
            <br />
            <Button>Save</Button>
          </form>
        </Modal>
        <Button onClick={this.showModal}>Create Resource</Button>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return { currentUser: state.currentUser }
}

export default connect(mapStateToProps)(CreateResource)