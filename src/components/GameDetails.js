import React from 'react';
// Redux
import { useSelector } from "react-redux";
// styles
import styled from 'styled-components';
import { motion } from "framer-motion";

const GameDetails = () => {
    const { game, screenshots } = useSelector(state => state.details);

    return (
        <StyledGameCard>
            <StyledGameDetails>
                <div className="stats">
                    <div className="rating">
                        <h3>{game.name}</h3>
                        <p>Rating: {game.rating}/{game.rating_top}</p>
                    </div>
                    <div className="info">
                        <h3>Platforms</h3>
                        <div className="platforms">
                            {game.platforms.map(platform => (
                                <h3 key={platform.platform.id}>{platform.platform.name}</h3>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="media">
                    <img src={game.background_image} alt={game.name} />
                </div>
                <div className="description">
                    <p>{game.description_raw}</p>
                </div>
                <div className="gallery">
                    {screenshots.map(screenshot => (
                        <img src={screenshot.image} alt={screenshot.image} key={screenshot.id} />
                    ))}
                </div>
            </StyledGameDetails>
        </StyledGameCard>
    );
}

const StyledGameCard = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    &::-webkit-scrollbar {
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #ff7676;
    }
    &::-webkit-scrollbar-track {
        background-color: white;
    }
`;

const StyledGameDetails = styled(motion.div)`
    width: 80%;
    border-radius: 1.5rem;
    padding: 2rem 10rem;
    background: white;
    position: absolute;
    left: 10%;
    color: black;
    img {
        width: 100%;
        height: 60vh;
        object-fit: cover;
    }
`;

export default GameDetails;