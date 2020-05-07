import ReactDom from 'react-dom';
import App from './App.jsx';
import { HashRouter } from 'react-router-dom';
import { registerMicroApps, start, setDefaultMountApp } from 'qiankun';

registerMicroApps([
    { name: 'app1', entry: 'http://localhost:2001', container: '#container', activeRule: '/app1' },
    { name: 'app2', entry: 'http://localhost:2002', container: '#container', activeRule: '/app2' }
], {

})

setDefaultMountApp('/app1');

start();

ReactDom.render(<HashRouter><App /></HashRouter>, document.getElementById('master'));