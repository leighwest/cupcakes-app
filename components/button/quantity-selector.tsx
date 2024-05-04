import classes from './quantity-selector.module.css';

export default function QuantitySelector() {
  return (
    <div className={classes.wrapper}>
      <span className={`${classes.clickable} ${classes.decrement}`}>-</span>
      <span>1</span>
      <span className={`${classes.clickable} ${classes.increment}`}>+</span>
    </div>
  );
}
