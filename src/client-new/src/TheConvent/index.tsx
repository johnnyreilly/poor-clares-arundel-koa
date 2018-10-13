import * as React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import { Home } from './Home';

type Props = RouteComponentProps<{}>;

export const path = 'the-convent'; 

export class TheConvent extends React.Component<Props> {
    public render() {
        return (
            <div>
                <p>The Convent Component</p>
                <Switch>
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        );
    }
}
