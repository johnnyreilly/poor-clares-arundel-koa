import * as React from 'react';
import { Container } from 'reactstrap';
import { Route, RouteComponentProps, Switch, Redirect } from 'react-router-dom';
import { Menu } from './Menu';
import { Home, homePath } from './Home';
import { Why, whyPath } from './Why';
import { Angela, angelaPath } from './seekers/Angela';

type Props = RouteComponentProps<{}>;

export const theConventPath = 'the-convent';

export class TheConvent extends React.Component<Props> {
    public render() {
        const conventRootPath = this.props.match.path;
        return (
            <>
                <Menu conventRootPath={conventRootPath} />
                <Container>
                    <Switch>
                        <Route path={`${conventRootPath}${homePath}`} component={Home} />
                        <Route path={`${conventRootPath}${whyPath}`} component={Why} />
                        <Route path={`${conventRootPath}${angelaPath}`} component={Angela} />
                        <Redirect to={`${conventRootPath}${homePath}`} />
                    </Switch>
                </Container>
            </>
        );
    }
}
