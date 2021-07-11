import React, { useState } from "react";
// Styles & Motion
import styled from 'styled-components/macro';
import { motion } from "framer-motion";
import { fadeIn } from "../animations";
// Logo
import logo from "../img/logo.svg";
// Redux & Routes
import { searchGames } from "../actions/gamesAction";
import { useDispatch } from "react-redux";

const Nav = () => {
    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState("");
    const inputHandler = e => {
        setTextInput(e.target.value)
    };
    const submitSearch = e => {
        e.preventDefault();
        if (textInput) {
            dispatch(searchGames(textInput));
            setTextInput("");
        } else {
            dispatch({ type: "CLEAR_SEARCH" });
        }
    };
    const clearSearch = () => {
        dispatch({ type: "CLEAR_SEARCH" });
    };

    return (
        <StyledNav variants={fadeIn} initial="hidden" animate="show">
            <StyledLogo onClick={clearSearch}>
                <img src={logo} alt="logo" />
                <h1>Ignite</h1>
            </StyledLogo>
            <form className="search" onSubmit={submitSearch}>
                <input type="text" value={textInput} onChange={inputHandler} />
                <button type="submit">Search</button>
            </form>
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
    @media screen and (max-width: 550px) {
        padding: 0rem 1rem;
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

