import { 
    ADD_PRODUCT_TO_CART,
    INCREMENT_CART_COUNT,
    DECREMENT_CART_COUNT,
    INCREMENT_PRODUCT_QTY,
    DECREMENT_PRODUCT_QTY,
    REMOVE_PRODUCT_FROM_CART,
} from "../actions/types";


export function changeCart(state = [], action) {
    const { type, payload } = action;
    switch (type) {
        case ADD_PRODUCT_TO_CART:
            return [...state, payload];
// case INCREMENT_PRODUCT_QTY:
//   const itemId = action.payload.itemToCart.id;
//   const itemAttributes = action.payload.itemToCart.selectedAttributes;
//   return {
//     ...state,
//     items : state.items.map((item) => {
//       const exp = {...item, 
//         itemToCart: {...item.itemToCart, qty : item.itemToCart.qty + 1 }
//       }
//       return item.itemToCart.id === itemId && isEqualArraysOfObjs(item.itemToCart.selectedAttributes, itemAttributes) ? exp : item
//     })
//   };
// case DECREMENT_PRODUCT_QTY:
//   const itemIdToDecrement = action.payload.itemToCart.id;
//   const itemAttributesToDecrement = action.payload.itemToCart.selectedAttributes;
//   return {
//     ...state,
//     items : state.items.map((item) => {
//       const exp = {...item, 
//         itemToCart: {...item.itemToCart, qty : item.itemToCart.qty - 1 }
//       }
//       return item.itemToCart.id === itemIdToDecrement && isEqualArraysOfObjs(item.itemToCart.selectedAttributes, itemAttributesToDecrement) ? exp : item
//     })
//   };
        case REMOVE_PRODUCT_FROM_CART:
            const itemIdToRemove = payload;
            return [
                ...state,
                state.products.filter((item) => item.id !== itemIdToRemove)
            ]
        default:
        return state;
    }
}

// export function changeCartAmount(state = 0, action) {
//     switch (action.type) {
//         case INCREMENT_CART_COUNT:
//             return state + 1;
//         case DECREMENT_CART_COUNT:
//             return state - 1;
//         default:
//             return state;
//     }
// }