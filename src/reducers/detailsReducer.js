const initState = { game: {}, screenshots: {}, movie: {}, isLoading: true };

const detailsReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_DETAILS":
            return {
                ...state,
                game: action.payload.game,
                screenshots: action.payload.screenshots,
                movie: action.payload.movie,
                isLoading: false
            };
        default:
            return { ...state };
    }
};

export default detailsReducer;