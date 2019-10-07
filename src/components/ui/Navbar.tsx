import { createStyles, WithStyles, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { Affix, Button, Menu, Icon } from 'antd';
import { MenuTheme } from 'antd/lib/menu/MenuContext';
import { history } from '../history';

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
}

class Navbar extends Component<Props, State> {
    classes = this.props.classes;

    constructor(props: Props) {
        super(props);

        this.state = {
            test: 0,
            themeMode: 'dark',
            current: 'home',
            iconsTheme: 'filled'
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

                            <Button type="link" onClick={this.changeTheme}>
                                <Icon type="bulb" />
                                <span>Mode</span>
                            </Button>

                            <SubMenu style={{
                                position: 'absolute',
                                right: 0,
                            }} title={
                                <span>
                                    <Icon type="user" />
                                    User
                                </span>
                            }>
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
                            </SubMenu>
                        </Menu>
                    </Affix>
                </div>
            </div>

        );
    }
}

export default withStyles(style)(Navbar);