import { createReducer } from "@reduxjs/toolkit";

const initailState = {
    
    coins : [],
    searchcoin :""
}

export const customReducer = createReducer(initailState,{
        findcoins : (state,action) =>{
            state.searchcoin +=action.Payload
        }
})



