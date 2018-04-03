import React from 'react';
import ReactDOM from 'react-dom';

import Welcome from '../components/Welcome/index';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Welcome />
      </div>
    )
  }
}

export default App;
