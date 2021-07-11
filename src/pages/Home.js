import React, { useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
// Components
import Game from "../components/Game";
import GameDetails from "../components/GameDetails";
// Styles & Motion
import styled from 'styled-components/macro';
import { motion } from "framer-motion";
import { fadeIn } from "../animations";
// Router
import { useLocation } from "react-router-dom";

const Home = () => {
    const path = useLocation().pathname;
    const dispatch = useDispatch();
    const {
        popularGames,
        newGamesThisWeek,
        newGamesNextWeek,
        gamesAreLoading,
        searchedGames
    } = useSelector(state => state.games);
    const { detailsAreLoading } = useSelector(state => state.details);

    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);

    return (
        <GameList variants={fadeIn} initial="hidden" animate="show">
            {!gamesAreLoading && !detailsAreLoading && path !== "/" && (<GameDetails />)}
            {searchedGames.length !== 0 &&
                (<div className="searchedGames">
                    <h2>Search Results</h2>
                    <Games>
                        {searchedGames.map(game => (
                            <Game
                                id={game.id}
                                name={game.name}
                                released={game.released}
                                image={game.background_image}
                                screenshots={game.short_screenshots}
                                key={game.id}
                            />
                        ))}
                    </Games>
                </div>)}
            <h2>New and Trending</h2>
            <Games>
                {popularGames.map(game => (
                    <Game
                        id={game.id}
                        name={game.name}
                        released={game.released}
                        image={game.background_image}
                        screenshots={game.short_screenshots}
                        key={game.id}
                    />
                ))}
            </Games>
            <h2>New Releases This Week</h2>
            <Games>
                {newGamesThisWeek.map(game => (
                    <Game
                        id={game.id}
                        name={game.name}
                        released={game.released}
                        image={game.background_image}
                        screenshots={game.short_screenshots}
                        key={game.id}
                    />
                ))}
            </Games>
            <h2>Coming Next Week</h2>
            <Games>
                {newGamesNextWeek.map(game => (
                    <Game
                        id={game.id}
                        name={game.name}
                        released={game.released}
                        image={game.background_image}
                        screenshots={game.short_screenshots}
                        key={game.id}
                    />
                ))}
            </Games>
        </GameList>
    );
}

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2 {
        padding: 5rem 0rem;
    }
    @media screen and (max-width: 850px) {
        padding: 0rem 1rem;
        h2 {
            padding: 1rem 0rem;
        }
    }  
`;

const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
    @media screen and (max-width: 850px) {
        grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
        grid-row-gap: 20px;  
        padding: 0.5rem;
    }  
    @media screen and (max-width: 550px) {
        grid-template-columns: 99%;;
        padding: 0.5rem;
    }  
`;

export default Home;