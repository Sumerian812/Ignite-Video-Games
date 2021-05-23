const base_url = "https://api.rawg.io/api";
const apiKey = process.env.REACT_APP_API_KEY;

// get games
export const popularGamesUrl = `${base_url}/games/lists/main?key=${apiKey}&page_size=20&ordering=-relevance`;
export const newGamesThisWeekUrl = `${base_url}/games/lists/recent-games?key=${apiKey}&ordering=-added&page_size=10`;
export const newGamesNextWeekUrl = `${base_url}/games/lists/recent-games-future?key=${apiKey}&ordering=-added&page_size=10`;

// get game details
export const gameDetailsUrl = (id) => `${base_url}/games/${id}?key=${apiKey}`;

// search game
export const searchGamesUrl = (game_name) => `${base_url}/games?key=${apiKey}&search=${game_name}&page_size=10&ordering=-relevance`;
