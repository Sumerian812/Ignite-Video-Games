const initState = { game: {}, screenshots: {}, isLoading: true };

const detailsReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_DETAILS":
            return {
                ...state,
                game: action.payload.game,
                screenshots: action.payload.screenshots,
                isLoading: false
            };
        default:
            return { ...state };
    }
};

export default detailsReducer;