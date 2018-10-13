import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

type Props = RouteComponentProps<{}>;

export class Us extends React.Component<Props> {
    public render() {
        return (
            <p>Us Component</p>
        );
    }
}
