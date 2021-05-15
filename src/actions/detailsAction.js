import axios from "axios";
import { gameDetailsUrl } from "../api";

export const loadDetails = (id, screenshots) => async (dispatch) => {
    const detailsData = await axios.get(gameDetailsUrl(id));

    dispatch({
        type: "FETCH_DETAILS",
        payload: {
            game: detailsData.data,
            screenshots: screenshots
        }
    });
};
