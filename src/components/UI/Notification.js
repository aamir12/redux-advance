import { useDispatch } from "react-redux";
import classes from "./Notification.module.css";
import { uiActions } from "../../store/ui-slice";

const Notification = (props) => {
  const dispatch = useDispatch();
  let specialClasses = "";

  if (props.status === "error") {
    specialClasses = classes.error;
  }
  if (props.status === "success") {
    specialClasses = classes.success;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  function closeHandler() {
    dispatch(uiActions.closeNotification());
  }

  return (
    <section className={cssClasses}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
      <button type="button" className={classes.closeBtn} onClick={closeHandler}>
        X
      </button>
    </section>
  );
};

export default Notification;
