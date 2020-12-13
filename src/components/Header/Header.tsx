import React, {FC} from 'react';
import {Affix, Avatar, Button, Col, Layout, Menu, Row, Typography} from "antd"
import {LogoutOutlined, UserOutlined} from '@ant-design/icons'
import {useDispatch, useSelector} from "react-redux";
import {selectIsAuth, selectLogin} from "../../Redux/selectors/authSelectors";
import {logout} from "../../Redux/reducers/authReducer";
import {NavLink} from "react-router-dom";

export const Header: FC = (props) => {
    const {Header} = Layout
    const {Text} = Typography;

    const isAuth = useSelector(selectIsAuth)
    const login = useSelector(selectLogin)

    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(logout())
    }

    return (
        <Affix offsetTop={0}>
            <Header className="header">
                <div className="logo"/>
                <Row>
                    <Col span={21}>
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                            <Menu.Item key="1">nav 1</Menu.Item>
                            <Menu.Item key="2">nav 2</Menu.Item>
                            <Menu.Item key="3">nav 3</Menu.Item>
                        </Menu>
                    </Col>
                    {isAuth ?
                        <>
                            <Col span={1}>
                                <Avatar icon={<UserOutlined/>}/>
                            </Col>
                            <Col span={1}>
                                <Text style={{color: "white"}}>{login}</Text>
                            </Col>
                            <Col span={1}>
                                <Button
                                    type={"link"}
                                    style={{color: "white"}}
                                    shape="circle"
                                    icon={<LogoutOutlined/>}
                                    onClick={onLogout}
                                    size={"large"}
                                />
                            </Col>
                        </> :
                        <Col span={1}>
                            <Button>
                                <NavLink to={'/login'}>
                                    Login
                                </NavLink>
                            </Button>
                        </Col>
                    }
                </Row>
            </Header>
        </Affix>
    );
}