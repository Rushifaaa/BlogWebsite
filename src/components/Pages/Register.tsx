import { createStyles, FormControl, IconButton, InputAdornment, InputLabel, TextField, Theme, withStyles } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { WithStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import { history } from '../history';
import { Input, Button } from 'antd';


const style = (theme: Theme) => createStyles({
    textField: {
        margin: '20px'
    },
});

interface Props extends WithStyles<typeof style> {

}

interface State {
    amount: string;
    password: string;
    weight: string;
    weightRange: string;
    showPassword: boolean;
    value: string;
    emailValue: string | null;
    usernameValue: string | null;
    errorText: string;
    qrCodeUrl: string;
    error: string | null;
}

class Register extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            amount: '',
            password: '',
            weight: '',
            weightRange: '',
            showPassword: false,
            value: '',
            emailValue: null,
            usernameValue: null,
            errorText: '',
            qrCodeUrl: '',
            error: null,
        }
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ password: event.target.value });
    };

    handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            this.setState({ emailValue: event.target.value });
        } else if (this.state.errorText.length === 0) {
            this.setState({ error: 'error' })
        } else {
            this.setState({ error: 'error' })
        }
        console.log(event.target.value);

    }

    handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ usernameValue: event.target.value });
        console.log(event.target.value);
    }


    handleRegister = async () => {
        if (this.state.usernameValue !== '' && this.state.password !== '' && this.state.emailValue !== '') {
            const response = await fetch('http://localhost:8000/api/v1/user/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: this.state.usernameValue,
                    password: this.state.password,
                    email: this.state.emailValue
                }),
            });
            const json = await response.json();
            console.log(json);
            history.push('/user/auth')
        } else {
            console.log("slrngöorsbgsgöslrgösorgbösrgb");

        }

    };

    render() {
        const classes = this.props.classes;
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '100px'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: '90%',
                    minWidth: '20%',
                }}>


                    <Input onChange={(e) => { this.handleUsernameChange(e) }} placeholder="Username" />

                    <Input onChange={(e) => { this.handleEmailChange(e) }} placeholder="E-Mail" />

                    <Input.Password onChange={(e) => { this.handleChange(e) }} placeholder="Password" />




                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '20px'
                    }}>
                        <Button onClick={this.handleRegister} color="secondary"><strong>Register</strong></Button>
                        <Button type="link" href="/user/login">Already have a account?</Button>
                    </div>

                </div>
            </div>
        );
    }
}

export default withStyles(style)(Register);