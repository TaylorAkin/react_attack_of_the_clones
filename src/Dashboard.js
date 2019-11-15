import React from 'react';
import InboxComponent from './Inbox';
import SentComponent from './Sent';
import LogoutComponent from './Logout';
import StarredComponent from './Starred';


class DashboardComponent extends React.Component{


    constructor(props){
        super(props);
        this.state = {

        }
    
    }

render(){

    return(

    <React.Fragment>

        <InboxComponent apitoken = {this.props.apitoken} user = {this.props.user}/>
        <SentComponent apitoken = {this.props.apitoken} user = {this.props.user}/>
        <StarredComponent apitoken = {this.props.apitoken} user = {this.props.user}/>
        <LogoutComponent apitoken = {this.props.apitoken} user = {this.props.user}/>

    </React.Fragment>

    )

}

}




export default DashboardComponent;