import React from "react";
// Styles & Motion
import styled from 'styled-components';
import { motion } from "framer-motion";
// Logo
import logo from "../img/logo.svg";

const Nav = () => {
    return (
        <StyledNav>
            <StyledLogo>
                <img src={logo} alt="logo" />
                <h1>Ignite</h1>
            </StyledLogo>
            <div className="search">
                <input type="text" />
                <button>Search</button>
            </div>
        </StyledNav>
    );
}

const StyledNav = styled(motion.div)`
    padding: 3rem 5rem;
    text-align: center;
    input {
        width: 30%;
        font-size: 1.5rem;
        padding: 0.5rem;
        border: none;
        margin-top: 1rem;
        box-shadow: 0px 0px 30px rgba(0,0,0,0.2);
        border-radius: 1rem 0rem 0rem 1rem;
    }
    button {
        font-size: 1.5rem;
        border: none;
        padding: 0.5rem 2rem;
        cursor: pointer;
        background: #ff7676;
        color: white;
        border-radius: 0rem 1rem 1rem 0rem;
    }
`;

const StyledLogo = styled(motion.div)`
    display: flex;
    justify-content: center;
    padding: 1rem;
    cursor: pointer;
    img {
        width: 2rem;
        height: 2rem;
    }
`;

export default Nav;

