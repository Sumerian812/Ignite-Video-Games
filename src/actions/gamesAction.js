import axios from "axios";
import { popularGamesUrl, newGamesThisWeekUrl, newGamesNextWeekUrl } from "../api";

export const loadGames = () => async (dispatch) => {
    const popularGamesData = await axios.get(popularGamesUrl);
    const newGamesThisWeekData = await axios.get(newGamesThisWeekUrl);
    const newGamesNextWeekData = await axios.get(newGamesNextWeekUrl);
    
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popularGames: popularGamesData.data.results,
            newGamesThisWeek: newGamesThisWeekData.data.results,
            newGamesNextWeek: newGamesNextWeekData.data.results
        }
    });
};
