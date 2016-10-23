import React from 'react';
import ReactDOM from 'react-dom';

class MainPage extends React.Component {
  render(){
    const styleY = {
      fontSize: '100px',
      color: 'white',
    };
    return(
      <dir>
        <h1 style={styleY}>LET'S GET IT STARTED</h1>
      </dir>
    );
  }
}
ReactDOM.render(<MainPage />, document.getElementById('react-container'));
