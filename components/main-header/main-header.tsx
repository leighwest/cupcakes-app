import classes from './main-header.module.css';

export default function MainHeader() {
  return (
    <>
      <header className={classes.header}>
        <span>Le Petite Cupcake</span>
        <span>Cart</span>
      </header>
    </>
  );
}
