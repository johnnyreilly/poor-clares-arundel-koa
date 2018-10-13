import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

type Props = RouteComponentProps<{}>;

export class Home extends React.Component<Props> {
    public render() {
        return (
            <p>The Convent home</p>
        );
    }
}
