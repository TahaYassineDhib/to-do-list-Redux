import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/dataSlice" ; 
import inputReducer from "./features/inputSlice"



export const store = configureStore({
    reducer: {
        todo: todoReducer ,
        input: inputReducer ,  
    }
    
})