import * as React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import house from './images/house.jpg';
import './Home.css';

export class Home extends React.Component {
    public render() {
        return (
            <div className="text-center">
                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                    <header className="masthead mb-auto">
                        <div className="inner">
                            <h2 className="masthead-brand">Welcome to the Poor Clares of Arundel</h2>
                        </div>
                    </header>

                    <main role="main" className="inner cover">
                        <Link to="/us" title="Learn more about us...">
                            <img
                                id="house"
                                src={house}
                                alt="Click here to enter..."
                                className="img-fluid img-rounded"
                            />
                        </Link>
                        <p className="lead">
                            We are sisters, who share prayer, work, laughter and struggles,
                            <br />
                            and live according to the Form of Life drawn up by St Clare of Assisi in 1253.
                        </p>
                        <p className="lead">
                            <Link to="/us">Learn more about us...</Link>
                        </p>
                    </main>

                    <footer className="mastfoot mt-auto">
                        <div className="inner">
                            <p>
                                © Community of Poor Clares, Arundel 2014
                                <br /> Convent of Poor Clares, Crossbush, Arundel, BN18 9PJ
                            </p>
                            <p>
                                <a href="mailto:poorclarescrossbusharundel@hotmail.co.uk">
                                    <FontAwesomeIcon icon={faEnvelope} /> poorclarescrossbusharundel@hotmail.co.uk
                                </a>{' '}
                                <a href="https://www.facebook.com/poorclaresarundel">
                                    <FontAwesomeIcon icon={faFacebook} /> Facebook
                                </a>
                            </p>
                        </div>
                    </footer>
                </div>
            </div>
        );
    }
}
