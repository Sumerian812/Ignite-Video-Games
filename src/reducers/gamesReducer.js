
const initState = {
    popularGames: [],
    upcomingGames: [],
    newGames: [],
    searched: []
};

const gamesReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_GAMES":
            return {
                ...state,
                popularGames: action.payload.popularGames,
                upcomingGames: action.payload.upcomingGames,
                newGames: action.payload.newGames
            };
        default:
            return { ...state };
    }
};

export default gamesReducer;