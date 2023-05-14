import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";
import axios from "axios";

export const sendCartData = (cart) => {
  return async (dispatch, getState) => {
    try {
      //get strore data Data
      //const { uiState } = getState();
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data!",
        })
      );

      await axios.put(`https://udemy-couse.firebaseio.com/cart.json`, {
        items: cart.items,
        totalQuntity: cart.totalQuntity,
      });
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      console.log(error);
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://udemy-couse.firebaseio.com/cart.json`
      );

      dispatch(
        cartActions.replaceCart({
          items: data?.items || [],
          totalQuntity: data?.totalQuntity || 0,
        })
      );
    } catch (error) {
      console.log(error);
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};
