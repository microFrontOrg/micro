/*
 * @Description: 
 * @Author: 郭军伟
 * @Date: 2020-05-08 16:03:15
 * @lastEditTime: Do not edit
 */
import ReactDom from 'react-dom';
import App from './App.jsx';
import { HashRouter } from 'react-router-dom';
import { registerMicroApps, start, setDefaultMountApp } from 'qiankun';

function getActiveRule(url) {
    return location => location.pathname.startsWith(url);
}

registerMicroApps([
    { name: 'app1', entry: 'http://localhost:2001', container: '#container', activeRule: getActiveRule('/app1') },
    { name: 'app2', entry: 'http://localhost:2002', container: '#container', activeRule: getActiveRule('/app2') }
], {

})

setDefaultMountApp('/app1');

start();

ReactDom.render(<HashRouter><App /></HashRouter>, document.getElementById('master'));