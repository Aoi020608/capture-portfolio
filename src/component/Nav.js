import { React } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <StyledNav>
            <h1><Link id="Logo" to="/">Capture</Link></h1>
            <ul>
                <li>
                    <Link to="/">1. About us</Link>
                </li>
                <li>
                    <Link to="/work">2. Our work</Link>
                </li>
                <li>
                    <Link to="/contact">3. Contact us</Link>
                </li>
            </ul>
        </StyledNav>
    );
}

//style outside of function
const StyledNav = styled.nav`
    min-height: 10vh;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;
    a {
        color: white;
        text-decoration: none;
    }
    ul {
        display: flex;
        list-style: none;
    }
    #Logo {
        font-size: 1.5rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;
    }
    li {
        padding-left: 7rem;
        position: relative;
    }
`


export default Nav;
