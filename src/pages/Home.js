import React, { useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
// Components
import Game from "../components/Game";
import GameDetails from "../components/GameDetails";
// Styles & Motion
import styled from 'styled-components';
import { motion } from "framer-motion";
// Router
import { useLocation, useHistory } from "react-router-dom";

const Home = () => {
    const path = useLocation().pathname;
    const dispatch = useDispatch();
    const {
        popularGames,
        newGamesThisWeek,
        newGamesNextWeek,
        gamesAreLoading
    } = useSelector(state => state.games);
    const { detailsAreLoading } = useSelector(state => state.details);
    const history = useHistory();

    useEffect(() => {
        dispatch(loadGames());
        history.push("/");
    }, [dispatch, history]);

    return (
        <GameList>
            {!gamesAreLoading && !detailsAreLoading && path !== "/" && <GameDetails />}
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
`;

const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`;

export default Home;