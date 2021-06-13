import React, {FC} from 'react';
import {NavLink, useHistory} from "react-router-dom";
import {TeamOutlined, UserOutlined} from '@ant-design/icons';
import {Affix, Layout, Menu} from "antd";

export const Navbar: FC = (props) => {
    const {Sider} = Layout;

    const link = useHistory()
    const currentMenuKey = link.location.pathname

    const links = [{
        to: '/profile',
        name: 'Profile',
        icon: <UserOutlined/>
        // }, {
        //     to: '/dialogs',
        //     name: 'Dialogs',
        //     icon: <MessageOutlined/>
    }, {
        to: '/users',
        name: 'Users',
        icon: <TeamOutlined/>
    }, {
        to: '/chat',
        name: 'Chat',
        icon: <TeamOutlined/>
    }]

    return (
        <Affix offsetTop={100}>
            <Sider className="site-layout-background" width={200}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={[(currentMenuKey === '/' ? links[0].to : currentMenuKey)]}
                    style={{height: '100%'}}
                >
                    {links.map(link => (
                        <Menu.Item key={link.to} icon={link.icon} >
                            <NavLink to={link.to}>
                                {link.name}
                            </NavLink>
                        </Menu.Item>
                    ))}
                </Menu>
            </Sider>
        </Affix>

    );
}
