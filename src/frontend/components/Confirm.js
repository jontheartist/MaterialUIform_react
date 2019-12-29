import React, { Component } from 'react'
// imp tab
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'




export class FormUserDetails extends Component {
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
        const { values: { firstName, lastName, email, occupation, city, bio } } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm User Data" />
                    <List>
                        <ListItem
                            primaryText="First Name"
                            secondaryTest={firstName}
                        />
                        <ListItem
                            primaryText="Last Name"
                            secondaryTest={lastName}
                        />
                        <ListItem
                            primaryText="Email"
                            secondaryTest={email}
                        />
                        <ListItem
                            primaryText="Occupation"
                            secondaryTest={occupation}
                        />
                        <ListItem
                            primaryText="City"
                            secondaryTest={city}
                        />
                        <ListItem
                            primaryText="Bio"
                            secondaryTest={bio}
                        />
                    </List>
                    <br />
                    <RaisedButton
                        label="Confirm & Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <RaisedButton
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
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

export default FormUserDetails
