import * as React from 'react';
import { Container } from 'reactstrap';
import { Route, RouteComponentProps, Switch, Redirect } from 'react-router-dom';
import { Menu } from './Menu';
import { Us } from './Us';
import { OurPrayer, ourPrayerPath } from './our-life/OurPrayer';
import { OurWork } from './our-life/OurWork';
import { ourShopPath } from './our-life/OurShop';

type Props = RouteComponentProps<{}>;

export class Main extends React.Component<Props> {
    public render() {
        return (
            <>
                <Menu />
                <Container>
                    <Switch>
                        <Route path="/us" component={Us} />
                        <Route path={ourPrayerPath} component={OurPrayer} />
                        <Route path="/our-work" component={OurWork} />
                        <Route path={ourShopPath} component={OurWork} />
                        <Redirect to="/" />
                    </Switch>
                </Container>
            </>
        );
    }
}
