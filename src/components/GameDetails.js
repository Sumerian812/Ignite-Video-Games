import React from 'react';
// Redux
import { useSelector } from "react-redux";
// Styles
import styled from 'styled-components';
import { motion } from "framer-motion";
// Route
import { useHistory } from "react-router-dom";
// Utilities
import { resizeImage } from "../utils";
// Images
import playstation from "../img/playstation.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import nintendo from "../img/nintendo.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";
import logo from "../img/logo.svg";

const GameDetails = () => {
    const { game, screenshots, isLoading } = useSelector(state => state.details);
    const history = useHistory();
    const exitDetailsHandler = e => {
        const element = e.target;
        if (element.classList.contains("shadow")) {
            document.body.style.overflow = "auto";
            history.push("/");
        }
    }
    const getPlatformIcon = platform => {
        switch (platform) {
            case "PlayStation 5":
            case "PlayStation 4":
            case "PlayStation 3":
            case "PlayStation 2":
            case "PlayStation":
                return playstation;
            case "Xbox Series S/X":
            case "Xbox S":
            case "Xbox 360":
            case "Xbox One":
            case "Xbox":
                return xbox;
            case "Nintendo Switch":
            case "Nintendo":
                return nintendo;
            case "PC":
                return steam;
            case "macOS":
                return apple;
            default:
                return gamepad;
        }
    }

    const getStarRating = () => {
        const stars = [];
        const rating = Math.floor(game.rating);
        for (let i = 1; i <= 5; i += 1) {
            if (i <= rating) {
                stars.push(<img
                    src={starFull}
                    alt={`star_${i}`}
                    key={i}
                    title={game.rating}
                    className="star"
                />)
            } else {
                stars.push(<img
                    src={starEmpty}
                    alt={`star_${i}`}
                    key={i}
                    title={game.rating}
                    className="star"
                />)
            }
        }
        return stars
    }

    return (
        <>
            {!isLoading && (
                <StyledCardShadow className="shadow" onClick={exitDetailsHandler}>
                    <StyledGameDetails>
                        <StyledStats>
                            <div className="rating">
                                <h3>{game.name}</h3>
                                <p>Rating: {game.rating}/5</p>
                                {getStarRating()}
                            </div>
                            <StyledInfo>
                                <h3>Platforms</h3>
                                <StyledPlatforms>
                                    {game.platforms?.map(platform => (
                                        <img key={platform.platform.id}
                                            src={getPlatformIcon(platform.platform.name)}
                                            alt={`${platform.platform.name} icon`}
                                            title={platform.platform.name}
                                        />
                                    ))}
                                </StyledPlatforms>
                            </StyledInfo>
                        </StyledStats>
                        <StyledMedia>
                            <img src={
                                resizeImage(game.background_image, 1280)
                                    ? resizeImage(game.background_image, 1280)
                                    : logo
                            }   
                                alt={game.name} />
                        </StyledMedia>
                        <StyledDescription>
                            <p>{game.description_raw}</p>
                        </StyledDescription>
                        <div className="gallery">
                            {screenshots?.map(screenshot => {
                                if (screenshot.id !== -1) {
                                    return <img
                                        src={resizeImage(screenshot.image, 1280)}
                                        alt={`${game.name}_screenshot_${screenshot.id}`}
                                        key={screenshot.id}
                                    />
                                }
                                return "";
                            })}
                        </div>
                    </StyledGameDetails>
                </StyledCardShadow>)}
        </>
    );
}

const StyledCardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
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
    padding: 2rem 5rem 3rem 5rem;
    background: white;
    position: absolute;
    left: 10%;
    color: black;
    z-index: 10;
    img {
        width: 100%;
    }
`;

const StyledStats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    img.star {
        width: 1.5rem;
        height: 1.5rem;
        display: inline;
    }
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