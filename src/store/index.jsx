import { configureStore, createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: "song",
  initialState: ["bommga"],
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
    addMovie(state, action) {},
    removeMovie(state, action) {},
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer,
  },
});

console.log(songsSlice.actions)

// const startingState = store.getState();
// console.log(startingState);

// store.dispatch({
//   type: "song/addSong",
//   payload: "New Song",
// });

// const finalState = store.getState();
// console.log(finalState);
