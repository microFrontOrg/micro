/*
 * @Description: 
 * @Author: 郭军伟
 * @Date: 2020-05-08 16:03:15
 * @lastEditTime: Do not edit
 */
import { Fragment } from 'react';
import ReactDom from 'react-dom';
import App from './App.jsx';
import Test from './Test';
import Aaa from './Aaa';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';

if (!window.__POWERED_BY_QIANKUN__) {
    render();
} else {
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

function routes() {
    return (
        <Fragment>
            {/* <Redirect from='/' to='/app2' /> */}
            <Route path='/app2/test' component={Test} />
            <Route path='/app2/Aaa' component={Aaa} />
        </Fragment>
    )
}

function render() {
    ReactDom.render(<Router>{routes()}</Router>, document.getElementById('app2'));
}

export async function bootstrap() {

}

export async function mount(props) {
    render();
}

export async function unmount() {

}