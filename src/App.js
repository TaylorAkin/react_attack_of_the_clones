import React from 'react';
import LoginComponent from './Login';
import InboxComponent from './Inbox'
import './App.css';
const API_URL = 'http://127.0.0.1:8000'
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzI…N6l1xHvKxET2NX_xLrVh-tNKJYD4XnZGjnxVait9zUY8iDYyU'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      token: '',

    }
    this.getTokenfromChildComponent = this.getTokenfromChildComponent.bind(this);
  }

  getTokenfromChildComponent(data) {

    this.setState({ data: data })

  }

  render() {
    console.log(this.state.data);
    if (!this.state.data) {




      return (

        <div className="App">
          <header className="App-header">


            <LoginComponent token={this.getTokenfromChildComponent} />

            {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
          </header>

        </div>
      );

    } else{

      return(

        <InboxComponent />

      );
    }

  }
}

export default App;
