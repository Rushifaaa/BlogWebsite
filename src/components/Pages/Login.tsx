import { createStyles, FormControl, IconButton, InputAdornment, InputLabel, TextField, Theme, withStyles } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { WithStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import { authStore } from '../../stores/AuthStore';
import { history } from '../history';
import { Button, Input } from 'antd';

const style = (theme: Theme) => createStyles({
    textField: {
        margin: '20px'
    },
});

interface Props extends WithStyles<typeof style> {
    history: any;
}

interface State {
    amount: string;
    password: string;
    weight: string;
    weightRange: string;
    showPassword: boolean;
    value: string;
    emailValue: string;
    usernameValue: string | null;
    users: Users | null;
    response: ResponseStatus | null;
    JWToken: string;
}

export interface ResponseStatus {
    status: number;
    description: string;
    user_id: number | null;
}

interface Users {
    users: [{
        user_id: number,
        username: string,
        password: string,
        email: string,
    }];
}

class Login extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            amount: '',
            password: '',
            weight: '',
            weightRange: '',
            showPassword: false,
            value: '',
            emailValue: '',
            usernameValue: null,
            users: null,
            response: null,
            JWToken: '',
        }
    }


    async componentDidUpdate() {
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ password: event.target.value });
    };

    handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            this.setState({ emailValue: event.target.value });
        } else {
            console.log("NEE");
        }

    }

    handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ usernameValue: event.target.value });
        console.log(event.target.value);
    }

    handleClickShowPassword = () => {
        if (this.state.showPassword) {
            this.setState({ showPassword: false });
        } else {
            this.setState({ showPassword: true });
        }
    };

    handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    }

    handleLogin = async () => {
        console.log("email, password", this.state.emailValue, this.state.password);

        try {
            const response = await fetch('http://localhost:8000/api/v1/user/login/auth', {
                method: 'POST',
                body: JSON.stringify({
                    password: this.state.password,
                    email: this.state.emailValue
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            });

            const json = await response.json();
            authStore.authToken = json.token;
            authStore.email = this.state.emailValue;
            history.push("/test");

            /* if (json.user_id !== null) {
                this.props.history.push('/');
            } */
        } catch (err) {
            console.error("Login error", err);
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


                    <Input onChange={(e) => { this.handleEmailChange(e) }} placeholder="E-Mail" />

                    <Input.Password onChange={(e) => { this.handleChange(e) }} placeholder="Password" />


                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '20px'
                    }}>
                        <Button onClick={this.handleLogin} color="secondary"><strong>Login</strong></Button>
                        <Button type="link" href="/user/register">Don't have an Account?</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(style)(Login);