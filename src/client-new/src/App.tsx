import * as React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from './Home';

export class App extends React.Component {
    public render() {
        return (
            <Router>
                <Route exact path="/" component={Home} />
            </Router>
        );
    }
}
