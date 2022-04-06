import { createSlice  } from "@reduxjs/toolkit";

export const cartSlice = createSlice(
    {
        name: "cart",
        initialState:{
            cart: [],
            total_items: 0,
            total_amount: 0,
        },
        reducers: {
            ADD: (state,action) => {

                const item = action.payload
                const alreadyInCart = state.cart.find((item) => item.id === action.payload.id ? true : false )    

                return {
                    ...state,
                    cart: alreadyInCart ? state.cart.map((item) => item.id === action.payload.id ? {...item, quantity: item.quantity + 1} : item) : [...state.cart, { ...item, quantity: 1}],
                    total_items: state.total_items + 1,
                    total_amount: state.total_amount + action.payload.price

                }
            },
            
            ADJUST_QUANTITY: (state,action) => {

                const cart_item_quantity = state.cart.find((item) => item.id === action.payload.id).quantity
                const quantity_diff =  action.payload.quantity - cart_item_quantity 
                return{
                    ...state,
                    cart: state.cart.map((item) => item.id === action.payload.id ? {...item, quantity: +action.payload.quantity}: item),
                    total_items: state.total_items + quantity_diff,
                    total_amount: state.total_amount + (quantity_diff * action.payload.price)
                }

            },

            REMOVE: (state,action) => {
                
                const cart_item_quantity = state.cart.find((item) => item.id === action.payload.id).quantity
                return {
                    ...state,
                    cart: state.cart.filter((item) => item.id !== action.payload.id),
                    total_items: state.total_items - cart_item_quantity,
                    total_amount: state.total_amount - action.payload.price*cart_item_quantity
                }
            },

                    
        },

       
    }

)

export const { ADD, REMOVE, ADJUST_QUANTITY, CURRENT_ITEM, Hi_Reducer} = cartSlice.actions;

export default cartSlice.reducer;