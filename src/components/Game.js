import React from 'react';
// Redux
import { useDispatch } from "react-redux";
import { loadDetails } from "../actions/detailsAction";
// styles
import styled from 'styled-components';
import { motion } from "framer-motion";

const Game = ({ id, name, released, image, screenshots }) => {
    const dispatch = useDispatch();
    const loadDetailsHandler = () => {
        dispatch(loadDetails(id, screenshots))
    }
    return (
        <StyledGame onClick={loadDetailsHandler}>
            <h3>{name}</h3>
            <p>{released}</p>
            <img src={image} alt={name} />
        </StyledGame>
    );
}

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.2);
    text-align: center;
    /* border-radius: 1rem; */
    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
`;

export default Game;