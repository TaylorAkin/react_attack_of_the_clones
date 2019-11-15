import React from 'react';
import axios from 'axios';




class LogoutComponent extends React.Component {

    constructor(props){
        super(props)
        this.state= {
            email: '' ,
            password: '',
        }
        // this.SubmitHandler=this.SubmitHandler.bind(this);
    }

        SubmitHandler(e) {
        // post request for laravel api call
        // console.log('Bearer ' + this.props.apitoken);
        axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/api/logout',
            headers: {
                Authorization: 'Bearer ' + this.props.apitoken,
            },
        })
            .then(res => {
                // prepare new menu item array
                let emailArr = res.data;
                // console.log(emailArr);
                if(emailArr){
                    this.setState({ data: ''});
                }
                

            });


            e.preventDefault();


        // axios.get('http://127.0.0.1:8000/api/logout' , {email: this.state.email , password:this.state.password})
        //   .then(response => { const data = response.data; 
        //     this.setState({ data : data});
        //     // console.log(this.state.data)
        //     this.props.token(this.state.data)
        //   });
        }

    
    render(){

        return(
           <React.Fragment>

            <form onSubmit={this.SubmitHandler}>
                <button type="submit" className="btn btn-primary">Logout</button>
            </form>

           </React.Fragment>


        );


    }
}

export default LogoutComponent;