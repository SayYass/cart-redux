export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const GET_TOTAL = 'GET_TOTAL';

export const getTotal = (data) => {
    return (dispatch) => {
      dispatch({
        type: GET_TOTAL,
        payload: {
          data: data,
        },
      });
    };
  };

export const increment = (id) => {
    return (dispatch) => {
      dispatch({
        type: INCREMENT,
        payload: id,
      });
    };
  };


  export const decrement = (id) => {
    return (dispatch) => {
      dispatch({
        type: DECREMENT,
        payload: id,
      });
    };
  };

  export const deleteProduct = (id) => {
    return (dispatch) => {
      dispatch({
        type: DELETE_PRODUCT,
        payload: id,
      });
    };
  }