import React from 'react';
import ReactDOM from 'react-dom';

import './style.scss';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { name: 'World' };
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <div className="content">
        <h1>Welcome</h1>
        <p>Hello {this.state.name}</p>
        <input onChange={this.handleChange} defaultValue={this.state.name} />
      </div>
    );
  }
}

export default Welcome;
