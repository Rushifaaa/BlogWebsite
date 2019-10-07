import React, { Component } from 'react';
import { Theme, createStyles, Button, withStyles, TextField, FormControl, InputLabel, Input, InputAdornment, IconButton } from '@material-ui/core';
import { WithStyles } from '@material-ui/styles';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/Visibility';
import { authStore } from '../../stores/AuthStore';

const style = (theme: Theme) => createStyles({
    textField: {
        margin: '20px',
        width: '100%',
    },
});

interface Props extends WithStyles<typeof style> {

}

interface State {
    password: string;
    email: string;
    showPassword: boolean;
    qrCodeURL: string;
}



class Auth extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            password: '',
            email: '',
            showPassword: false,
            qrCodeURL: '',
        }
    }

    handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ password: event.target.value });
    };

    handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ email: event.target.value });
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

    getQRurl = async () => {
        console.log("######");

        const response = await fetch('http://localhost:8000/api/v1/user/auth', {
            method: 'POST',
            body: JSON.stringify({
                password: this.state.password,
                email: this.state.email
            }),
            headers: {
                "Content-type": "application/json"
            }
        });

        const json = await response.json();

        await this.setState({
            qrCodeURL: json.qr_url,
        });
        console.log(this.state.qrCodeURL);

    }

    render() {

        const qrCode = this.state && this.state.qrCodeURL ? <img src={this.state.qrCodeURL} alt="qrcode" /> : null;
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column-reverse',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '20%',
                    width: '90%'
                }}>
                    <TextField style={{
                        width: '100%',
                    }} onChange={this.handleEmailChange} type="email" required label="Email" className={this.props.classes.textField} />
                    <FormControl className={this.props.classes.textField}>
                        <InputLabel htmlFor="adornment-password">Password *</InputLabel>
                        <Input
                            id="adornment-password"
                            type={this.state.showPassword ? 'text' : 'password'}
                            value={this.state.password}
                            onChange={this.handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={this.handleClickShowPassword}
                                        onMouseDown={this.handleMouseDownPassword}
                                    >
                                        {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>

                    <div>
                        <Button onClick={this.getQRurl}>Get QR-Code</Button>
                    </div>
                    {qrCode}
                </div>
            </div >
        );
    }

}
export default withStyles(style)(Auth);