import * as React from 'react';

export const interviewsPath = '/community-interviews';

export const Interviews: React.SFC = _props => (
    <>
        <h3>Interviews with Sisters</h3>

        <p>Here a number of interviews with some of the sisters:</p>

        <h4>Sister Pat</h4>

        <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/Z13ZVI5ZARw" allowFullScreen />
        </div>

        <h4>Sister Gabriel</h4>

        <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/4wwaRR4jnuc" allowFullScreen />
        </div>

        <h4>Sister Angela</h4>

        <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/RCWEawlX4Tc" allowFullScreen />
        </div>

        <h4>Sister Aelred</h4>

        <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/qpXROehsm48" allowFullScreen />
        </div>
    </>
);