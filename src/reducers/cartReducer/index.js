import { DELETE_PRODUCT, INCREMENT, DECREMENT, GET_TOTAL } from "../../actions";

const initialState = {
   cart: [
       {
              id: 1,
              name: 'Jacket Denim',
              price: 100,
              qty: 2,
              img: 'https://img.joomcdn.net/94dbc89bdc6cdcdf6482894f33d534679a700318_original.jpeg',
              color: 'Blue',
              size: "M"
       },
       {
           id:2,
           name: 'T-Shirt One piece',
           price: 50,
           qty: 3,
           img: 'https://m.media-amazon.com/images/I/51MMHs1FcAS._AC_UL1100_.jpg',
           color: 'Black',
           size: "L"
       }
   ],
   totalResult: false
   
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_PRODUCT:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        case INCREMENT:
            return {
                ...state,
                cart: state.cart.map(item => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            qty: item.qty + 1
                        }
                    }
                    return item;
                })
            }
        case DECREMENT:
            return {
                ...state,
                cart: state.cart.map(item => {
                    if (item.id === action.payload) {
                        if(item.qty > 0){
                          return {
                            ...item,
                            qty: item.qty - 1
                        }
                        }
                    }
                    return item;
                })
            }
        case GET_TOTAL:
            return {
                ...state,
                totalResult: state.cart.reduce((acc, item) => acc + item.qty * item.price, 0)
            }
            
      default:
        return state;
    }
  };
  
  export default cart;