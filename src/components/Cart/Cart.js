import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cartState.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              title: item.title,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
              id: item.id,
              description: item.description,
            }}
          />
        ))}
        {cartItems.length === 0 && "Your cart is empty"}
      </ul>
    </Card>
  );
};

export default Cart;
