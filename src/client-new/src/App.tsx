import * as React from 'react';
import './App.css';

import house from './images/house.jpg';

export class App extends React.Component {
    public render() {
        return (
            <div className="container">
                <h2>WELCOME TO THE POOR CLARES OF ARUNDEL</h2>

                <a href="/us" title="Learn more about us...">
                    <img
                        id="house"
                        src={house}
                        alt="Click here to enter..."
                        className="img-responsive img-rounded"
                    />
                </a>

                <div className="row">
                    <div className="col-sm-10 col-md-7">
                        <p>
                            We are sisters, who share prayer, work, laughter and struggles, and live according to the
                            Form of Life drawn up by St Clare of Assisi in 1253.{' '}
                            <a href="/us">Learn more about us...</a>
                        </p>
                    </div>
                </div>

                <div id="footer">
                    © Community of Poor Clares, Arundel 2014
                    <br /> Convent of Poor Clares, Crossbush, Arundel, BN18 9PJ
                    <br /> e-mail:
                    <a href="mailto:poorclarescrossbusharundel@hotmail.co.uk">
                        poorclarescrossbusharundel@hotmail.co.uk
                    </a>
                    <span className="fb badge">
                        <a href="https://www.facebook.com/poorclaresarundel">
                            <i className="fa fa-facebook" aria-hidden="true" />
                        </a>
                    </span>
                </div>
            </div>
        );
    }
}
