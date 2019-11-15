import React from 'react';
import axios from 'axios';




class LoginComponent extends React.Component {

    constructor(props){
        super(props)
        this.state= {
            email: '' ,
            password: '',
        }
        this.SubmitHandler=this.SubmitHandler.bind(this);
        this.OnChangeHandler=this.OnChangeHandler.bind(this);
    }
        SubmitHandler(e) {
        // post request for laravel api call
        axios.post('http://127.0.0.1:8000/api/login' , {email: this.state.email , password:this.state.password})
          .then(response => { const data = response.data; 
            this.setState({ data : data});
            console.log(this.state.data)
            this.props.token(this.state.data)
          });
          e.preventDefault();

        }

        OnChangeHandler(e){
            const target = e.target;
            const value = target.value;
            const name = target.name;
            this.setState({[name]:value})
            console.log(this.state)
        }

    
    render(){

        return(
           <React.Fragment>

            <img style={{height:'10rem'}}  src='/images/mailicon.png' value='Tmail'></img>
            <h2 className='text-center'>Tmail</h2>

            <form onSubmit={this.SubmitHandler}>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" onChange={this.OnChangeHandler}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" onChange={this.OnChangeHandler}></input>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>

           </React.Fragment>


        );


    }
}

export default LoginComponent;