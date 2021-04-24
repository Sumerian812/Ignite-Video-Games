const base_url = "https://api.rawg.io/api";
const apiKey = process.env.REACT_APP_API_KEY;

const date = () => {
    const day = String(new Date().getDate()).padStart(2, '0');
    const month = String(new Date().getMonth() + 1).padStart(2, '0')
    const year = new Date().getFullYear();
    return {
        todayLastYear: `${year - 1}-${month}-${day}`,
        today: `${year}-${month}-${day}`,
        todayNextYear: `${year + 1}-${month}-${day}`
    };
}

export const popularGamesUrl = `${base_url}/games?key=${apiKey}?dates=${date().todayLastYear},${date().today}&ordering=-rating&page_size=10`;
export const upcomingGamesUrl = `${base_url}/games?key=${apiKey}?dates=${date().today},${date().todayNextYear}&ordering=-added&page_size=10`;
