import React, { Component } from 'react';
import { Theme, createStyles, TextField, WithStyles, withStyles } from '@material-ui/core';
import _ from 'lodash';
import { authStore } from '../../stores/AuthStore';
import { history } from '../history';


const style = (theme: Theme) => createStyles({

});

interface Props extends WithStyles<typeof style> {
    email: string;
}

interface State {
    codeValue: string;
}

class TwoFactorAuthorization extends Component<Props, State> {

    handleCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ codeValue: event.target.value });
        this.test();
    }

    test: () => void = _.debounce(async () => {
        const response = await fetch('http://localhost:8000/api/v1/user/token/auth', {
            method: 'POST',
            body: JSON.stringify({
                code: this.state.codeValue,
                email: authStore.email
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                authorization: authStore.authToken,
            }
        });

        const json = await response.json();
        console.log(json);

        if (json.status !== 200) {
            history.push('/user/login');
        } else {
            console.log('Success');

        }
    }, 600);

    render() {
        return (
            <div style={{
                marginTop: '90px',
            }}>
                <TextField onChange={this.handleCodeChange} type="text" required label="Code" />
            </div>
        );
    }
}

export default withStyles(style)(TwoFactorAuthorization);