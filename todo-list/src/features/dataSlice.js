import { createSlice } from "@reduxjs/toolkit"
import { datas } from "../todos"


const initialState = {
    datas,
}


const todoSlice = createSlice({
    name: 'todo' , 
    initialState,
    reducers:{
        addTodo : (state , action)=> {
            state.datas = [action.payload , ...state.datas]
        },
            




    }



})

export const {addTodo} = todoSlice.actions

export default todoSlice.reducer



