import { configureStore, createSlice, createAction } from "@reduxjs/toolkit";

export const reset = createAction("app/reset");
console.log(reset());

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers(builder) {
    // builder.addCase(moviesSlice.actions.reset, (state, action) => []);
    builder.addCase(reset, (state, action) => []);
  },
});

const moviesSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },

    // reset(state, action) {
    //   return [];
    // },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => []);
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer,
  },
});

// const startingState = store.getState();
// console.log(startingState);

store.dispatch(songsSlice.actions.addSong("latest song"));

// store.dispatch({
//   type: "song/addSong",
//   payload: "New Song",
// });

// const finalState = store.getState();
// console.log(finalState);

export { store };
export const { addSong, removeSong } = songsSlice.actions;
export const { addMovie, removeMovie } = moviesSlice.actions;
