import {createSlice, Dispatch} from "@reduxjs/toolkit";
import axios from "axios";
import {IProduct} from "../../model/product";
import {IPaginationMeta} from "../../model/paginationMeta";

interface IInitialState {
    items: IProduct[] | never[];
    meta: IPaginationMeta;
    isError: boolean;
}

const initialState={
    items: [],
    meta: {},
} as IInitialState;


export const productSlice=createSlice({
    name:"products",
    initialState,
    reducers:{
        getProducts: (state,action)=>{
            state.items=action.payload.items;
            state.meta=action.payload.meta;
        },
    }
});

export default productSlice.reducer;

export const {getProducts} = productSlice.actions;


//action creators

const API=`https://join-tsh-api-staging.herokuapp.com/products?limit=8&page=1`;

export const getProductsAction=(page:number=1)=>async(dispatch:Dispatch)=>{
    try{
        const response=await axios.get(`https://join-tsh-api-staging.herokuapp.com/products?limit=8&page=${page}`);
        dispatch(getProducts(response.data));
        console.log(response);
    }catch(error){
        console.log(error);
    }
}