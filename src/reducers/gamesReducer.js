
const initState = {
    popularGames: [],
    newGamesThisWeek: [],
    newGamesNextWeek: [],
    searched: [],
    isLoading: true
};

const gamesReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_GAMES":
            return {
                ...state,
                popularGames: action.payload.popularGames,
                newGamesThisWeek: action.payload.newGamesThisWeek,
                newGamesNextWeek: action.payload.newGamesNextWeek,
                isLoading: false
            };
        default:
            return { ...state };
    }
};

export default gamesReducer;