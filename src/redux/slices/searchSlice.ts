import {createSlice} from "@reduxjs/toolkit";

interface IInitialState {
    active: boolean,
    promo: boolean,
    search: string,
}

const initialState={
    active: false,
    promo: false,
    search: "",
} as IInitialState;

export const searchSlice = createSlice({
    name: "searchbox",
    initialState,
    reducers: {
        search: (state,action) => {
            return {
                ...state,
                ...action.payload,
            }
        },
        reset: (state) => {
            return {
                active: false,
                promo: false,
                search: "",
            }
        }
    }
})

export const {search,reset} = searchSlice.actions;

