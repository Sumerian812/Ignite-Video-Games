import axios from "axios";
import { popularGamesUrl } from "../api";

export const loadGames = () => async (dispatch) => {
    const popularGamesData = await axios.get(popularGamesUrl);
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popularGames: popularGamesData.data.results
        }
    });
};
