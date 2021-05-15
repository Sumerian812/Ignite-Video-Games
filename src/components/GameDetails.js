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
                <StyledStats>
                    <div className="rating">
                        <h3>{game.name}</h3>
                        <p>Rating: {game.rating}/{game.rating_top}</p>
                    </div>
                    <StyledInfo>
                        <h3>Platforms</h3>
                        <StyledPlatforms>
                            {game.platforms.map(platform => (
                                <h3 key={platform.platform.id}>{platform.platform.name}</h3>
                            ))}
                        </StyledPlatforms>
                    </StyledInfo>
                </StyledStats>
                <StyledMedia>
                    <img src={game.background_image} alt={game.name} />
                </StyledMedia>
                <StyledDescription>
                    <p>{game.description_raw}</p>
                </StyledDescription>
                <div className="gallery">
                    {screenshots.map(screenshot => {
                        if (screenshot.id !== -1) {
                            return <img src={screenshot.image} alt={screenshot.image} key={screenshot.id} />
                        }

                    })}
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
    padding: 2rem 5rem;
    background: white;
    position: absolute;
    left: 10%;
    color: black;
    img {
        width: 100%;
    }
`;

const StyledStats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const StyledInfo = styled(motion.div)`
    text-align: center;
`;

const StyledPlatforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img {
        margin-left: 3rem;
    }
`;

const StyledMedia = styled(motion.div)`
    margin-top: 5rem;
    img {
        width: 100%;
    }
`;

const StyledDescription = styled(motion.div)`
    margin: 5rem 0rem;
`;

export default GameDetails;