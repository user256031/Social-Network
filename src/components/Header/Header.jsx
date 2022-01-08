import s from './Header.module.css';
import {Link, NavLink} from "react-router-dom";
import {Avatar, Button, Col, Layout, Menu, Row} from "antd";
import {UserOutlined} from "@ant-design/icons";
import React from "react";

const Header = (props) => {

    const {Header} = Layout

    return (
        <Header className={s.header}>
            <div className="logo"/>
            <Row>
                <Col span={18}>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1"><Link to="/users">Developers</Link></Menu.Item>
                    </Menu>
                </Col>

                {props.isAuth
                    ? <> <Col span={1}>
                        <Avatar title={props.login || ""} style={{backgroundColor: '#87d068'}} icon={<UserOutlined/>}/>
                    </Col>
                        <Col span={5}>
                            {props.login} <Button onClick={props.logout}>Log out</Button>
                        </Col>
                    </>
                    : <Col span={6}>
                        <Button onClick={props.logout}>
                            <NavLink className={s.avlink} to={'/login'}>Login</NavLink>
                        </Button>
                    </Col>}


            </Row>
        </Header>

        /*<header className={s.header}>
            <img src='https://k2v.ru/wp-content/uploads/2020/12/7-300x300.png'/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink className={s.avlink} to={'/login'}>Login</NavLink>
                }
            </div>
        </header>*/
    );
}
export default Header;

