import React from 'react';
import axios from 'axios';





class StarredComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            emails: [],
            name: '',
            subject: '',
            data: '',
            emailArr: [],
        }
    }

    componentDidMount() {
        // console.log('Bearer ' + this.props.apitoken.token);
        axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/api/starred/' + this.props.user.id,
            headers: {
                Authorization: 'Bearer ' + this.props.apitoken,
            },
        })
            .then(res => {
                // prepare new menu item array
                let emailArr = res.data.data;
                this.setState({ emailArr: emailArr })

            });
    }



    render() {

    console.log(this.state.emailArr);

    if(this.state.emailArr){

        const mappedemails = this.state.emailArr.map((item) => {
            return (
                <React.Fragment>
                    <tr>
                        <th scope="row">1</th>
                        <td>{item.subject}</td>               
                        <td>{item.body}</td>
                        <td>{item.created_at}</td>
                    </tr>
                </React.Fragment>
            )
        });


        return (
            <React.Fragment>
               

                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Starred</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Body</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            {mappedemails}
                  
                    </tbody>
                </table>

            </React.Fragment>


        );

    }


    }
}


export default StarredComponent;