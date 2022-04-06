import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk('cart/getProducts', async() => {  
    const data = await fetch('./data/Products.json').then(res => res.json())
    return data.products
})

export const productSlice =  createSlice({
    name: 'product',
    initialState: {
        products: [],
        getProductsIsPending: true,
        getProductsFetchError: null,
        selected_item: null,
        getSelectedItemIsPending: true
    },
    reducers: {
        SELECTED_ITEM: (state, action) => {
            state.selected_item = state.products[action.payload]
            state.getSelectedItemIsPending = false
        }
    },

    extraReducers: {

        [getProducts.fulfilled] : (state, action) => {
            state.getProductsIsPending = false
            state.products = action.payload
            state.selected_item = null
            state.getSelectedItemIsPending = true
            state.getProductsFetchError = false
        },

        [getProducts.pending] : (state) => {
            state.getProductsIsPending = true
            state.getProductsFetchError = false
        },

        [getProducts.rejected] : (state) => {
            state.getProductsFetchError = true
            state.getProductsIsPending = false
        }
    }

    
})

export const { SELECTED_ITEM, Hi_Reducer } = productSlice.actions;

export default productSlice.reducer;