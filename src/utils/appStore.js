import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import gptReducer from "./gptSlice";


const appStore = configureStore({

reducer:{
    user:userReducer,
    movie:movieReducer,
    gpt:gptReducer
},

});

export default appStore;