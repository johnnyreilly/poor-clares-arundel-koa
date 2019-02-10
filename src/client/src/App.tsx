import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './Home';
const Main = React.lazy(() => import('./main'));
const TheConvent = React.lazy(() => import('./the-convent'));

const theConventPath = 'the-convent';

export class App extends React.Component {
    public render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route
                    path={`/${theConventPath}`}
                    render={props => (
                        <React.Suspense fallback={<div>Loading...</div>}>
                            <TheConvent {...props} />
                        </React.Suspense>
                    )}
                />
                <Route
                    path="/"
                    render={props => (
                        <React.Suspense fallback={<div>Loading...</div>}>
                            <Main {...props} />
                        </React.Suspense>
                    )}
                />
            </Switch>
        );
    }
}
