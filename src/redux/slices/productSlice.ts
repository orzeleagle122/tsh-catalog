import {createSlice, Dispatch} from "@reduxjs/toolkit";
import axios from "axios";

interface IInitialState {
    items: {
        "id": number,
        "name": string,
        "description": string,
        "rating": number,
        "image": string,
        "promo": boolean,
        "active": boolean,
    }[];
}

const initialState:IInitialState={
    items: [
        {
            "id": 99,
            "name": "Sleek Frozen Shoes",
            "description": "Molestiae dolorum repellat corporis fugit in asperiores non et explicabo.",
            "rating": 4,
            "image": "https://picsum.photos/640/480?random=2810",
            "promo": true,
            "active": true
        },
        {
            "id": 100,
            "name": "Practical Fresh Bike",
            "description": "Corporis cum voluptatum distinctio.",
            "rating": 2,
            "image": "https://picsum.photos/640/480?random=381",
            "promo": true,
            "active": false
        }
    ],

}


export const productSlice=createSlice({
    name:"products",
    initialState,
    reducers:{
        getProducts: (state,action)=>{

        },
    }
});

export default productSlice.reducer;

export const {getProducts} = productSlice.actions;

export const getProductsAction=()=>async(dispatch:Dispatch)=>{

}