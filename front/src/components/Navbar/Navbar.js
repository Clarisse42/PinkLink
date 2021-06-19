import React from 'react';
import { Navbar as Header, Button } from 'react-bootstrap';

import '../../style/navbar.css';

const Navbar = () => {
    return (
        <Header id="navbar">
            <Header.Brand href="/">
                <h1 className="brand-header">PinkLink</h1>
            </Header.Brand>
            <Header.Toggle />
            <Header.Collapse className="justify-content-end">
                <Header.Text>
                    <Button className="btn-pinklink" onClick={() => window.location = '/links'}>Consulter mes PinkLinks</Button>
                </Header.Text>
            </Header.Collapse>
        </Header>
    );
}

export default Navbar;