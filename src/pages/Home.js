import React, { useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
// Components
import Game from "../components/Game";
// Styles & Motion
import styled from 'styled-components';
import { motion } from "framer-motion";
import { popularGamesUrl } from "../api";

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames())
    }, [dispatch]);

    const { popularGames, newGamesThisWeek, newGamesNextWeek } = useSelector(state => state.games);
    return (
        <GameList>
            <h2>Popular Games</h2>
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
`;

const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`;

export default Home;