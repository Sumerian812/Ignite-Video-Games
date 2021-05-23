
const initState = {
    popularGames: [],
    newGamesThisWeek: [],
    newGamesNextWeek: [],
    searchedGames: [],
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
        case "SEARCH_GAMES":
            return {
                ...state,
                searchedGames: action.payload.searchedGames
            }
        case "CLEAR_SEARCH":
            return {
                ...state,
                searchedGames: []
            }
        default:
            return { ...state };
    }
};

export default gamesReducer;