import * as React from 'react';
import { Container } from 'reactstrap';
import { Route, RouteComponentProps, Switch, Redirect } from 'react-router-dom';
import { Menu } from './Menu';
import { Us } from './Us';
import { PrayerOur } from './PrayerOur';
import { WorkOur } from './WorkOur';

type Props = RouteComponentProps<{}>;

export class Main extends React.Component<Props> {
    public render() {
        return (
            <>
                <Menu />
                <Container>
                    <Switch>
                        <Route path="/us" component={Us} />
                        <Route path="/prayerOur" component={PrayerOur} />
                        <Route path="/workOur" component={WorkOur} />
                        <Redirect to="/" />
                    </Switch>
                </Container>
            </>
        );
    }
}
