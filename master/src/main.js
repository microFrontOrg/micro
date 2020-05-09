/*
 * @Description: 
 * @Author: 郭军伟
 * @Date: 2020-05-08 16:03:15
 * @lastEditTime: Do not edit
 */
import ReactDom from 'react-dom';
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import appConfig from './appConfig';
import { registerMicroApps, start, setDefaultMountApp, addGlobalUncaughtErrorHandler, initGlobalState } from 'qiankun';

const commonState = {
    user: {
        sessionId: '123455667',
    },
    button: null
}

registerMicroApps(appConfig, {});

setDefaultMountApp('/app1');

addGlobalUncaughtErrorHandler(error => {
    console.log(error);
})

const actions = initGlobalState(commonState);
actions.onGlobalStateChange(() => {
    console.log('全局状态发生改变');
})

start();

ReactDom.render(<App />, document.getElementById('master'));