import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { useEffect } from "react";
import { fetchCartData, sendCartData } from "./store/cart-actions";

let firstLoad = true;
function App() {
  const cartIsVisible = useSelector((state) => state.uiState.cartIsVisible);
  const notification = useSelector((state) => state.uiState.notification);
  const cartData = useSelector((state) => state.cartState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (firstLoad) {
      firstLoad = false;
      return;
    }

    if (cartData.changed) {
      dispatch(sendCartData(cartData));
    }
  }, [cartData, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
//https://udemy-couse.firebaseio.com/
