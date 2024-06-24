import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { API_KEY, TMDB_BASE_URL } from "../utils/constants";
import axios from "axios"

export { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    movies: [],
    genres: [],
    genresLoaded: false,
}
const createArrayFromRawData = (array, moviesArray, genres) => {
    array.forEach((movie) => {
        const movieGenres = [];
        movie.genre_ids.forEach((genre) => {
            const name = genres.find(({ id }) => id === genre);
            if (name) movieGenres.push(name.name);
        });
        if (movie.backdrop_path) {
            moviesArray.push({
                id: movie.id,
                name: movie?.original_name ? movie.original_name : movie.original_title,
                image: movie.backdrop_path,
                genres: movieGenres.slice(0, 3), //means we need only first 3 genres
            });
        }
    });
}
const getRawData = async (api, genres, paging) => {
    const moviesArray = [];
    for (let i = 1; moviesArray.length < 60 && i < 10; i++) {
        const { data: { results }, } = await axios.get(`${api}${paging ? `&page = ${i}` : ""}`);
        createArrayFromRawData(results, moviesArray, genres);
    }
    return moviesArray;
}
export const fetchMovies = createAsyncThunk("netflix/trending", async ({ type }, thunkAPI) => {
    const { netflix: {genres}, } = thunkAPI.getState();
    return  getRawData(`${TMDB_BASE_URL}/trending/${type}/week?api_key=${API_KEY}`, genres, true);
})

export const fetchDataByGenre = createAsyncThunk("netflix/moviesByGenres", async ({ genre,type }, thunkAPI) => {
    const { netflix: {genres}, } = thunkAPI.getState();
    const data=  getRawData(`${TMDB_BASE_URL}/discover/${type}?api_key=${API_KEY}&with_genres=${genre}`, genres);
    return data;
})

export const getGenres = createAsyncThunk("netflix/genres", async () => {
    const { data: { genres }, } = await axios.get(`${TMDB_BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
    return genres;
})

export const getUsersLikedMovies = createAsyncThunk(
    "netflix/getLiked",
    async (email) => {
      const {
        data: { movies },
      } = await axios.get(`http://localhost:5000/api/user/liked/${email}`);
      return movies;
    }
  );

  export const removeFromLikedMovies = createAsyncThunk(
    "netflix/deleteLiked",
    async ({movieID,email}) => {
      const {
        data: { movies },
      } = await axios.put(`http://localhost:5000/api/user/delete`,{
        email,movieID
      });
      return movies;
    }
  );  

const NetflixSLice = createSlice({
    name: "Netflix",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getGenres.fulfilled, (state, action) => {
            state.genres = action.payload;
            state.genresLoaded = true;
        });
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.movies= action.payload;
        });
        builder.addCase(fetchDataByGenre.fulfilled, (state, action) => {
            state.movies= action.payload;
        });
        builder.addCase(getUsersLikedMovies.fulfilled, (state, action) => {
            state.movies= action.payload;
        });
        builder.addCase(removeFromLikedMovies.fulfilled, (state, action) => {
            state.movies= action.payload;
        });
    },
})
export const store = configureStore({
    reducer: {
        netflix: NetflixSLice.reducer,
    },
})
