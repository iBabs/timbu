export const cartReducer = (state, action) => {
    switch (action.type){
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart,{ ...action.payload, qty: 1 }]
            }
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            }
        case "CHANGE_CART_QTY":
            return {
                ...state,
                cart: state.cart.filter(item => item.id === action.payload.id ? item.qty = action.payload.qty : item.qty)
            }

        case "SET_CART":
            return {
                ...state,
                cart: action.payload
            }
        default:
            return state
    }
}