import React, { Component } from 'react'
// imp tab
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';




export class Success extends Component {
    continue = e => {
        e.preventDefault();
        //PROCESS FORM // SEND DATA TO API /EXPRESS/ FLASK //PYTHON /PHP
        this.props.nextStep();
    }


    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }


    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Success" />
                    <h1>Thank you for your email</h1>
                    <p> You will get an email for further instructions</p>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default Success
