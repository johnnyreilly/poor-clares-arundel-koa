import * as React from 'react';
import { Card, CardImg } from 'reactstrap';
import crib from '../images/crib.jpg';

export const eventsChristmasPath = '/events-christmas';

export const EventsChristmas: React.FC = (_props) => {
    var eventStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'Event',
        name: 'Christmas',
        startDate: `${new Date().getFullYear()}-12-24T17:30`,
        endDate: `${new Date().getFullYear()}-12-25T10:00`,
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        eventStatus: 'https://schema.org/EventScheduled',
        location: {
            '@type': 'Place',
            name: 'Convent of Poor Clares ',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Crossbush, Arundel',
                postalCode: 'BN18 9PJ',
                streetAddress: 'Convent of Poor Clares',
            },
        },
        image: [crib],
        description: `Christmas Eve - 5.30pm: 1st Vespers, 11.15pm: Blessing of the Crib and Midnight Mass.
Christmas Day - 8.30am: Christmas Morning Mass, please join us for refreshments afterwards`,
        organizer: {
            '@type': 'CatholicChurch',
            name: 'Convent of Poor Clares',
            url: 'https://www.poorclaresarundel.org/',
        },
    };

    return (
        <>
            <script type="application/ld+json">{JSON.stringify(eventStructuredData)}</script>
            <h3>Christmas</h3>

            <h5>Christmas Eve</h5>

            <p>1st Vespers: 5.30pm</p>

            <p>Blessing of the Crib and Midnight Mass: 11.15pm</p>

            <Card className="float-right">
                <CardImg top src={crib} />
            </Card>

            <h5>Christmas Day</h5>

            <p>Christmas Morning Mass: 8.30am</p>

            <p>Please join us for refreshments afterwards</p>
        </>
    );
};
