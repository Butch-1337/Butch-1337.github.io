import React, { Component } from 'react';
import Home from './Home';
import Footer from './Footer';

class App extends Component {

  render() {
    return (
      <div>
        {this.props.children || <Home />}
        <Footer />
      </div>
    );
  }
}

App.propTypes = { children: React.PropTypes.object };

export default App;
