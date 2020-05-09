/*
 * @Description: 
 * @Author: 郭军伟
 * @Date: 2020-05-08 16:03:15
 * @lastEditTime: Do not edit
 */
import ReactDom from 'react-dom';
import App from './App';


if (!window.__POWERED_BY_QIANKUN__) {
    render();
} else {
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

function render() {
    ReactDom.render(<App />, document.getElementById('app2'));
}

export async function bootstrap() {

}

export async function mount(props) {
    render();
    props.onGlobalStateChange((state, prev) => {
        console.log('app2 state', state);
        console.log('app2 prev', prev);
    })
}

export async function unmount() {

}