import {Component} from 'react';
import Content from 'components/yields/Content'


require('normalize.css/normalize.css');
require('styles/App.css');

class AppComponent extends Component {
  render() {
    return (
      <Content />
    );
  }
}

export default AppComponent;
