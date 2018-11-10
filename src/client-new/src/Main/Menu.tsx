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
    DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Container from 'reactstrap/lib/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

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
            <Navbar color="light" light expand="md">
                <Container>
                    <NavbarBrand href="/us">Poor Clares</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav>Our Life</DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <Link to="/us">Us</Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/prayerOur">Our prayer</Link>
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <Link to="/workOur">Our work</Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/workShop">Our shop</Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/static/tripAroundGuestHouse.pdf">Trip around the guesthouse</Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/static/communityTripAroundHouse.pdf">Trip around the house</Link>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav>Community</DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem header>Sister's stories</DropdownItem>
                                    <DropdownItem>
                                        <Link to="/communitySistersAnn">Sister Ann</Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/communitySistersClareAgnes">Sister Clare Agnes</Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/communitySistersClareRuva">Sister Clare Ruva</Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/communitySistersGabriel">Sister Gabriel</Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/communitySistersGraca">Sister Graça</Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/communitySistersJoseph">Sister Joseph</Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/communitySistersMaria">Sister Maria</Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/communityInterviewsWithSisters">Interviews with Sisters</Link>
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <Link to="/communityArundel">Arundel Community</Link>
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
                                        <Link to="/static/communityFoundationsHollington.pdf">Hollington</Link>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav>Beginnings</DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <Link to="/beginningsClaresStory">Clares Story</Link>
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
                                <DropdownToggle nav>Misc</DropdownToggle>
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
                            <NavItem>
                                <Link
                                    className="nav-link"
                                    to="/static/Stylist_Life_in_a_convent.pdf"
                                    title="The Stylist magazine wrote an article about us."
                                >
                                    The Stylist
                                </Link>
                            </NavItem>
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
        );
    }
}
