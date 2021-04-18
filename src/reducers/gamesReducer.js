
const initState = {
    popularGames: [],
    newGames: [],
    upcomingGames: [],
    searched: []
};

const gamesReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_GAMES":
            return { ...state };
        default:
            return { ...state };
    }
};

// action - dispatch sends the action to the reducer to modify the data

export default gamesReducer;