import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.nav`
    -moz-transform: translateX(22em);
    -webkit-transform: translateX(22em);
    -ms-transform: translateX(22em);
    transform: translateX(22em);
    -moz-transition: -moz-transform 0.45s ease, visibility 0.45s;
    -webkit-transition: -webkit-transform 0.45s ease, visibility 0.45s;
    -ms-transition: -ms-transform 0.45s ease, visibility 0.45s;
    transition: transform 0.45s ease, visibility 0.45s;
    position: fixed;
    top: 0;
    right: 0;
    width: 22em;
    max-width: 80%;
    height: 100%;
    -webkit-overflow-scrolling: touch;
    background: #585858;
    color: #ffffff;
    cursor: default;
    visibility: hidden;
    z-index: 10002;
`;

function NavMenu() {
    return (
        <NavContainer>
            <h2>Menu</h2>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="generic.html">Ipsum veroeros</a></li>
                <li><a href="generic.html">Tempus etiam</a></li>
                <li><a href="generic.html">Consequat dolor</a></li>
                <li><a href="elements.html">Elements</a></li>
            </ul>
        </NavContainer>
    );
}

export default NavMenu;