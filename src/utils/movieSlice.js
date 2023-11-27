import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movie",
    initialState:{
        mostPopularMovie:null,
        topRatedMovie:null,
        upComingMovie:null
    },
    reducers:{
        addMostPopularMovie:(state,action)=>{
            state.mostPopularMovie = action.payload;
        },
        addTopRatedMovie:(state,action)=>{
            state.topRatedMovie = action.payload;
        },
        addUpComing:(state,action)=>{
            state.upComingMovie = action.payload;
        }
    }

})

export default movieSlice.reducer;
export const {addMostPopularMovie,addTopRatedMovie,addUpComing} = movieSlice.actions;