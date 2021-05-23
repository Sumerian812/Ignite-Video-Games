import React from 'react';
// Redux
import { useDispatch } from "react-redux";
import { loadDetails } from "../actions/detailsAction";
// Styles
import styled from 'styled-components';
import { motion } from "framer-motion";
import { popUp } from "../animations";
// Route
import { Link } from "react-router-dom";
// Utilities
import { resizeImage } from "../utils";
// default logo image
import logo from "../img/logo.svg";

const Game = ({ id, name, released, image, screenshots }) => {
    const dispatch = useDispatch();
    const loadDetailsHandler = () => {
        dispatch(loadDetails(id, screenshots));
        document.body.style.overflow = "hidden";
    }
    return (
        <StyledGame
            onClick={loadDetailsHandler}
            variants={popUp}
            initial="hidden"
            animate="show"
            whileHover="whileHover"
        >
            <Link to={`/games/${id}`}>
                <h3>{name}</h3>
                <p>{released}</p>
                <img src={resizeImage(image, 1280) ? resizeImage(image, 1280) : logo} alt={name} />
            </Link>
        </StyledGame>
    );
}

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.2);
    text-align: center;
    cursor: pointer;
    border-radius: 1rem;
    overflow: hidden;
    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
`;

export default Game;