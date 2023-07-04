import { configureStore } from "@reduxjs/toolkit";
import todoslice from "./components/todoSlice/todoslice";

export default configureStore({
    reducer:{
        todos:todoslice,
    }
})