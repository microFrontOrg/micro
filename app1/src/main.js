import ReactDom from 'react-dom';
import App from './App.jsx';



if (!window.__POWERED_BY_QIANKUN__) {
    ReactDom.render(<App />, document.getElementById('app1'));
} else {
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

export async function bootstrap() {

}

export async function mount(props) {
    ReactDom.render(<App />, document.getElementById('app1'));
}

export async function unmount() {
    
}