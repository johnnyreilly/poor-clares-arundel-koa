import * as React from 'react';
import { Route, RouteComponentProps, Switch, Redirect } from 'react-router-dom';
import { Us } from './Us';

type Props = RouteComponentProps<{}>;

export class Main extends React.Component<Props> {
    public render() {
        return (
            <div>
            {this.props.match.path}
                <p>Main component</p>
                <Switch>
                    <Route path="/us" component={Us} />
                    <Redirect to="/" />
                </Switch>
            </div>
        );
    }
}
