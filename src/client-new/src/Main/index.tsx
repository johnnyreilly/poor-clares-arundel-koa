import * as React from 'react';
import { Container } from 'reactstrap';
import { Route, RouteComponentProps, Switch, Redirect } from 'react-router-dom';
import { Menu } from './Menu';
import { Us } from './Us';
import { OurPrayer, ourPrayerPath } from './our-life/OurPrayer';
import { OurWork, ourWorkPath } from './our-life/OurWork';
import { OurShop, ourShopPath } from './our-life/OurShop';
import { SisterAnn, sisterAnnPath } from './community/SisterAnn';
import { SisterClareAgnes, sisterClareAgnesPath } from './community/SisterClareAgnes';
import { SisterClareRuva, sisterClareRuvaPath } from './community/SisterClareRuva';
import { SisterGabriel, sisterGabrielPath } from './community/SisterGabriel';
import { SisterGraca, sisterGracaPath } from './community/SisterGraca';
import { SisterJoseph, sisterJosephPath } from './community/SisterJoseph';
import { SisterMaria, sisterMariaPath } from './community/SisterMaria';
import { Interviews, interviewsPath } from './community/Interviews';
import { Arundel, arundelPath } from './community/Arundel';

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
                        <Route path={sisterClareAgnesPath} component={SisterClareAgnes} />
                        <Route path={sisterClareRuvaPath} component={SisterClareRuva} />
                        <Route path={sisterGabrielPath} component={SisterGabriel} />
                        <Route path={sisterGracaPath} component={SisterGraca} />
                        <Route path={sisterJosephPath} component={SisterJoseph} />
                        <Route path={sisterMariaPath} component={SisterMaria} />
                        <Route path={interviewsPath} component={Interviews} />
                        <Route path={arundelPath} component={Arundel} />
                        <Redirect to="/" />
                    </Switch>
                </Container>
            </>
        );
    }
}
