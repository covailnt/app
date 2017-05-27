import { Component } from 'react'
import { connect } from 'react-firebase'
import {create} from 'actions/projects'

class Content extends Component{
  constructor(){
    super();
    this.setHello = this.setHello.bind(this);
    this.handleHello = this.handleHello.bind(this);
    this.params = {};
  }
  setHello(){
    create(this.params)
  }
  handleHello(e){
    this.params.name = e.target.value;
  }
  render(){
    return (
      <div>
        <input name="hello" onChange={this.handleHello} />
        <button onClick={this.setHello}>
          Set Hello
        </button>
        {this.props.hiya}
      </div>
    )
  }
}

export default connect((props, ref) => ({
  hiya: 'hiya',
  setValue: value => ref('hiya').set(value)
}))(Content)