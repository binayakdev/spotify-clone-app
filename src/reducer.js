export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token:
    //     "BQCkQkqXX29Efw3e1xy2IsS9c8b_PwvQOWySpFhuNjs853Su8xq9PR5DeTLXyYA19hL8U2mhfj3GQ1WyVYi36bzCzhDhD6-J5eTlo_BBRzw0Ysl-G1Hu-cai0PUt7bp09uuixmX03QilsCtBHcyIqMfcwhHs2eoIYMS8Ezy99JYqN3HE",
};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };

        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };

        default:
            return state;
    }
};

export default reducer;
