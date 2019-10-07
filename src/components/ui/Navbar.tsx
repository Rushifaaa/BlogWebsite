import { createStyles, WithStyles, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { Affix, Button, Menu, Icon } from 'antd';
import { MenuTheme } from 'antd/lib/menu/MenuContext';
import { history } from '../history';
import { authStore } from '../../stores/AuthStore';

const style = () => createStyles({



});

const { SubMenu } = Menu;

interface Props extends WithStyles<typeof style> {

}

interface State {
    test: any;
    themeMode: string;
    current: any;
    iconsTheme: 'outlined' | 'filled';
    verified: boolean;
}

class Navbar extends Component<Props, State> {

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    classes = this.props.classes;

    constructor(props: Props) {
        super(props);

        this.state = {
            test: 0,
            themeMode: 'dark',
            current: 'home',
            iconsTheme: 'filled',
            verified: false,
        }
    }

    verifyToken = async () => {
        const response = await fetch('http://localhost:8000/api/v1/user/token/auth', {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                authorization: authStore.authToken,
            }
        });

        if (response.status === 200) {
            this.setState({ verified: true });
        } else {
            this.setState({ verified: false });
        }
    }

    handleOnMenuClick = (e: any) => {
        this.setState({ current: e.key });
    }

    changeTheme = () => {
        if (this.state.themeMode === 'dark') {
            this.setState({
                themeMode: 'light',
                iconsTheme: 'outlined'
            })
        } else {
            this.setState({
                themeMode: 'dark'
            })
        }
    }

    render() {

        return (

            <div>
                <div>
                    <Affix offsetTop={this.state.test}>
                        <Menu mode="horizontal" onClick={this.handleOnMenuClick} selectedKeys={[this.state.current]} theme={this.state.themeMode as MenuTheme}>
                            <Menu.Item onClick={() => history.push('/')} key="home">
                                <Icon type="home" />
                                <span>Home</span>
                            </Menu.Item>

                            <Menu.Item key="about" onClick={() => history.push('/about')}>
                                <Icon type="info" />
                                <span>About</span>
                            </Menu.Item>

                            <SubMenu style={{
                                position: 'absolute',
                                right: 0,
                            }} title={
                                <span>
                                    <Icon type="user" />
                                    User
                                </span>
                            }>
                                {this.state.verified ?
                                    //TODO: split in components
                                    <Menu.ItemGroup>
                                        <Menu.Item onClick={() => history.push('/user/profile')} key="login">
                                            <Icon type="user" />
                                            <span>Account</span>
                                        </Menu.Item>
                                        <Menu.Item onClick={() => history.push('/user/settings')} key="register">
                                            <Icon type="setting" />
                                            <span>Settings</span>
                                        </Menu.Item>

                                    </Menu.ItemGroup>
                                    :
                                    <Menu.ItemGroup>
                                        <Menu.Item onClick={() => history.push('/user/register')} key="register">
                                            <Icon type="user-add" />
                                            <span>Register</span>
                                        </Menu.Item>
                                        <Menu.Item onClick={() => history.push('/user/login')} key="login">
                                            <Icon type="key" />
                                            <span>Login</span>
                                        </Menu.Item>
                                    </Menu.ItemGroup>
                                }
                            </SubMenu>
                        </Menu>
                    </Affix>
                </div>
            </div>

        );
    }
}

export default withStyles(style)(Navbar);