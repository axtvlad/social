import React, {FC} from 'react'
import {Affix, Avatar, Button, Col, Layout, Row, Typography} from "antd"
import {LogoutOutlined} from '@ant-design/icons'
import {useDispatch, useSelector} from "react-redux"
import {selectIsAuth, selectLogin} from "../../Redux/selectors/authSelectors"
import {logout} from "../../Redux/reducers/authReducer"
import {NavLink} from "react-router-dom"
import {selectUserAvatar} from "../../Redux/selectors/profileSelectors"

export const Header: FC = (props) => {
    const {Header} = Layout
    const {Text} = Typography

    const isAuth = useSelector(selectIsAuth)
    const login = useSelector(selectLogin)
    const avatar = useSelector(selectUserAvatar)

    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(logout())
    }

    return (
        <Affix offsetTop={0}>
            <Header>
                <Row>
                    <Col span={21}>
                        <Text code={true} style={{color: 'white', fontSize: '2em'}}>{`<AXT SOCIAL />`}</Text>
                    </Col>
                    {isAuth ?
                        <>
                            <Col span={1}>
                                <Avatar alt={'user avatar'} src={avatar?.small ?? ''}/>
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