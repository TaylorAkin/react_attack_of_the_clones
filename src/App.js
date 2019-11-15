import React from 'react';
import LoginComponent from './Login';
import DashboardComponent from './Dashboard'
import './App.css';


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
    // console.log(this.state.data);
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

        <DashboardComponent apitoken = {this.state.data.token}  />

      );
    }

  }
}

export default App;
