// noinspection ES6CheckImport
import React, {Component} from "react";
import './App.css';
import 'antd/dist/antd.css';

import NavBar from "./components/NavBar/NavBar";
import {Navigate, Route} from "react-router";
import {BrowserRouter, Link, NavLink, Routes} from 'react-router-dom'
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import UsersContainer from "./components/Users/Users-Container"
import HeaderContainer from "./components/Header/Header-Container";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";
import {initializeApp} from "./redux/app-reducer";
import store from "./redux/store-redux";

import {Layout, Menu, Breadcrumb, Button, Avatar, Row, Col} from 'antd';
import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons';
import s from "./components/NavBar/NavBar.module.css";
import Friends from "./components/NavBar/Friends/Friends";
import Header from "./components/Header/Header";

const {SubMenu} = Menu;
const {Content, Sider} = Layout;


const DialogsContainer = React.lazy(() => import('./components/Dialogs/Dialogs-Container'));
const ProfileParamsContainer = React.lazy(() => import('./components/Profile/ProfileParams-Container'));


class App extends Component {
    catchAllUnhandleErrors = (promiseRejectionEvent) => {
        alert(promiseRejectionEvent);
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandleErrors);
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandleErrors);
    }


    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            /*            <div className='app-wrapper'>
                            <HeaderContainer/>
                            <NavBar store={this.props.store}/>
                            <div className='app-wrapper-content'>
                                <Routes>
                                    <Route exact path='/'
                                           element={<Navigate to={"/profile/0"}/>}/>
                                    <Route path='/login' element={
                                        <React.Suspense fallback={<Preloader/>}>
                                            <Login/>
                                        </React.Suspense>}
                                    />
                                    <Route strict path='/profile/:userId' element={
                                        <React.Suspense fallback={<Preloader/>}>
                                            <ProfileParamsContainer/>
                                        </React.Suspense>}
                                    />
                                    <Route path='/dialogs' element={
                                        <React.Suspense fallback={<Preloader/>}>
                                            <DialogsContainer/>
                                        </React.Suspense>}
                                    />
                                    <Route path='/users' element={
                                        <React.Suspense fallback={<Preloader/>}>
                                            <UsersContainer/>
                                        </React.Suspense>}
                                    />
                                    <Route path='/news' element={<News/>}/>
                                    <Route path='/music' element={<Music/>}/>
                                    <Route path='/setting' element={<Setting/>}/>
                                    <Route path='*' element={<div>404 NOT FOUND</div>}/>
                                </Routes>
                            </div>
                        </div>*/
            <Layout>
                <HeaderContainer/>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            style={{height: '100%', borderRight: 0}}
                        >
                            <SubMenu key="sub1" icon={<UserOutlined/>} title="My Profile">
                                <Menu.Item key="1"><NavLink to="/profile/0"
                                                            className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink></Menu.Item>
                                <Menu.Item key="2"><NavLink to="/dialogs"
                                                            className={navData => navData.isActive ? s.active : s.item}>Message</NavLink></Menu.Item>
                             </SubMenu>
                            <SubMenu key="sub2" icon={<LaptopOutlined/>} title="Comunication">
                                <Menu.Item key="3"><NavLink to="/users"
                                                            className={navData => navData.isActive ? s.active : s.item}>Users</NavLink></Menu.Item>
                                <Menu.Item key="4"><NavLink to="/news"
                                                            className={navData => navData.isActive ? s.active : s.item}>News</NavLink></Menu.Item>
                                <Menu.Item key="5"><NavLink to="/music"
                                                            className={navData => navData.isActive ? s.active : s.item}>Music</NavLink></Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" icon={<NotificationOutlined/>} title="Settings">
                                <Menu.Item key="6"><NavLink to="/setting"
                                                            className={navData => navData.isActive ? s.active : s.item}>Setting</NavLink></Menu.Item>
                            </SubMenu>
                            <div className="friends">
                                <h2>Friends</h2>
                                <Friends state={this.props.store.getState().sidebar}/>
                            </div>
                        </Menu>
                    </Sider>
                    <Layout style={{padding: '0 24px 24px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            <Routes>
                                <Route exact path='/'
                                       element={<Navigate to={"/profile/0"}/>}/>
                                <Route path='/login' element={
                                    <React.Suspense fallback={<Preloader/>}>
                                        <Login/>
                                    </React.Suspense>}
                                />
                                <Route strict path='/profile/:userId' element={
                                    <React.Suspense fallback={<Preloader/>}>
                                        <ProfileParamsContainer/>
                                    </React.Suspense>}
                                />
                                <Route path='/dialogs' element={
                                    <React.Suspense fallback={<Preloader/>}>
                                        <DialogsContainer/>
                                    </React.Suspense>}
                                />

                                <Route path='/users' element={
                                    <React.Suspense fallback={<Preloader/>}>
                                        <UsersContainer/>
                                    </React.Suspense>}
                                />
                                <Route path='/news' element={<News/>}/>
                                <Route path='/music' element={<Music/>}/>
                                <Route path='/setting' element={<Setting/>}/>
                                {/*<Route path='*' element={<div>404 NOT FOUND</div>}/>*/}
                            </Routes>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = connect(mapStateToProps, {initializeApp})(App);

const SamuraiJSApp = (props) => {
    return <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer store={store}/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
}

export default SamuraiJSApp;

