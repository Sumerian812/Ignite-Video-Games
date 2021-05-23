import axios from "axios";
import { gameDetailsUrl, movieUrl } from "../api";

export const loadDetails = (id, screenshots) => async (dispatch) => {
    const detailsData = await axios.get(gameDetailsUrl(id));
    const movieData = await axios.get(movieUrl(id));

    dispatch({
        type: "FETCH_DETAILS",
        payload: {
            game: detailsData.data,
            screenshots: screenshots,
            movie: movieData.data
        }
    });
};