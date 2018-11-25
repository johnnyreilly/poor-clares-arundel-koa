import * as React from 'react';
import { Container } from 'reactstrap';
import { Route, RouteComponentProps, Switch, Redirect } from 'react-router-dom';
import { Menu } from './Menu';
import { Us } from './Us';
import { OurPrayer, ourPrayerPath } from './our-life/OurPrayer';
import { OurWork, ourWorkPath } from './our-life/OurWork';
import { OurShop, ourShopPath } from './our-life/OurShop';
import { SisterAnn, sisterAnnPath } from './community/SisterAnn';

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
                        <Route path={ourWorkPath} component={OurWork} />
                        <Route path={ourShopPath} component={OurShop} />
                        <Route path={sisterAnnPath} component={SisterAnn} />
                        <Redirect to="/" />
                    </Switch>
                </Container>
            </>
        );
    }
}
