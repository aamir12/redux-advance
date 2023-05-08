import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { uiActions } from "../../store/ui-slice";

const CartButton = (props) => {
  const totalQuntity = useSelector((state) => state.cartState.totalQuntity);
  const dispatch = useDispatch();

  function toggleCart() {
    dispatch(uiActions.toggle());
  }

  return (
    <button className={classes.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuntity}</span>
    </button>
  );
};

export default CartButton;
