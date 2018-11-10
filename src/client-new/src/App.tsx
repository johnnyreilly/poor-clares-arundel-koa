import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Main } from './Main';
import { TheConvent, path as theConventPath } from './TheConvent';

export class App extends React.Component {
    public render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path={`/${theConventPath}`} component={TheConvent} />
                <Route path="/" component={Main} />
            </Switch>
        );
    }
}