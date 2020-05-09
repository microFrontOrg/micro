/*
 * @Description: 
 * @Author: 郭军伟
 * @Date: 2020-05-08 16:03:15
 * @lastEditTime: Do not edit
 */
import ReactDom from 'react-dom';
import App from './App.jsx';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { Fragment } from 'react';

if (!window.__POWERED_BY_QIANKUN__) {
    render();
} else {
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

function routes() {
    return (
        <Fragment>
            {/* <Redirect from='/' to='/app1' /> */}
            <Route path='/' component={App}></Route>
        </Fragment>

    )
}

function render() {
    ReactDom.render(<Router>{routes()}</Router>, document.getElementById('app1'));
}

export async function bootstrap() {

}

export async function mount(props) {
    render();
}

export async function unmount() {

}