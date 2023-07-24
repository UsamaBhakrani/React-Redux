import { configureStore, createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {},
  },
});

const moviesSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {},
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer,
  },
});

const startingState = store.getState();
console.log(startingState);

store.dispatch(songsSlice.actions.addSong("New Song"));
store.dispatch(songsSlice.actions.addSong("Old Song"));
store.dispatch(moviesSlice.actions.addMovie("Batman"));
store.dispatch(moviesSlice.actions.addMovie("Redemption"));

const finalState = store.getState();
console.log(finalState);

console.log(songsSlice);

export default store;
