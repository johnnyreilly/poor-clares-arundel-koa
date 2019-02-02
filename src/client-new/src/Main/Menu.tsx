import * as React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Container from 'reactstrap/lib/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import lifeInAConvent from '../static/Stylist_Life_in_a_convent.pdf';
import communityFoundationsHollington from '../static/communityFoundationsHollington.pdf';
import tripAroundGuestHouse from '../static/tripAroundGuestHouse.pdf';
import communityTripAroundHouse from '../static/communityTripAroundHouse.pdf';
import './Menu.css';
import { ourPrayerPath } from './our-life/OurPrayer';
import { ourShopPath } from './our-life/OurShop';
import { ourWorkPath } from './our-life/OurWork';
import { sisterAnnPath } from './community/SisterAnn';
import { sisterClareAgnesPath } from './community/SisterClareAgnes';
import { sisterClareRuvaPath } from './community/SisterClareRuva';
import { sisterGabrielPath } from './community/SisterGabriel';
import { sisterGracaPath } from './community/SisterGraca';
import { sisterJosephPath } from './community/SisterJoseph';
import { sisterMariaPath } from './community/SisterMaria';
import { interviewsPath } from './community/Interviews';
import { arundelPath } from './community/Arundel';
import { claresStoryPath } from './beginnings/ClaresStory';

const initialState = {
    isOpen: false
};

export class Menu extends React.Component<{}, typeof initialState> {
    state = initialState;

    toggle = () =>
        this.setState(() => ({
            isOpen: !this.state.isOpen
        }));

    render() {
        return (
            <>
                <div className="header-image header-image-main" />

                <Navbar dark className="bg-primary" expand="md">
                    <Container>
                        <NavbarBrand href="/us">Poor Clares</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Our Life
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <Link to={ourPrayerPath}>Our prayer</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to={ourWorkPath}>Our work</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to={ourShopPath}>Our shop</Link>
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            <a href={tripAroundGuestHouse}>Trip around the guesthouse</a>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <a href={communityTripAroundHouse}>Trip around the house</a>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Community
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem header>Sister's stories</DropdownItem>
                                        <DropdownItem>
                                            <Link to={sisterAnnPath}>Sister Ann</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to={sisterClareAgnesPath}>Sister Clare Agnes</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to={sisterClareRuvaPath}>Sister Clare Ruva</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to={sisterGabrielPath}>Sister Gabriel</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to={sisterGracaPath}>Sister Graça</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to={sisterJosephPath}>Sister Joseph</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to={sisterMariaPath}>Sister Maria</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to={interviewsPath}>Interviews with Sisters</Link>
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            <Link to={arundelPath}>Arundel Community</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to="/communityVocation">Vocation</Link>
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem header>Foundations</DropdownItem>
                                        <DropdownItem>
                                            <Link to="/communityFoundationsKenya">Kenya</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <a href={communityFoundationsHollington}>Hollington</a>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Beginnings
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <Link to={claresStoryPath}>Clares Story</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to="/beginningsClaresThoughts">Clares Thoughts</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to="/beginningsClaresPrayers">Clares Prayers</Link>
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            <Link to="/beginningsFrancisLife">Francis Life</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to="/beginningsFrancisThoughts">Francis Thoughts</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to="/beginningsFrancisPrayers">Francis Prayers</Link>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <NavItem>
                                    <Link className="nav-link" to="/events">
                                        Events
                                    </Link>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Misc
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <Link to="/miscFAQs">FAQs</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to="/miscLinks">Links</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to="/miscGlossary">Glossary</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to="/miscAddressesPoorClareConvents">Addresses</Link>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <NavItem>
                                    <Link className="nav-link" to="/prayerRequests">
                                        Prayer Requests
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to="/events">
                                        Events
                                    </Link>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavLink href={lifeInAConvent} title="The Stylist magazine wrote an article about us.">
                                    The Stylist
                                </NavLink>
                                <NavItem>
                                    <Link
                                        className="nav-link"
                                        to="/theConvent/home"
                                        title="The BBC made a television programme about us."
                                    >
                                        The Convent
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <a className="nav-link" href="https://www.facebook.com/poorclaresarundel">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}
