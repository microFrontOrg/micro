import routes from './routes';
import { HashRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                {routes.map(route => {
                    return <Route key={route.path} path={route.path} component={route.component} />
                })}
            </Router>
        )
    }
}