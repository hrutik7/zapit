import { createReducer } from "@reduxjs/toolkit";

const initailState = {
    
    coins : []
}

export const customReducer = createReducer(initailState,{
        findcoins : (state,action) =>{
            state.c +=1
        }
})



