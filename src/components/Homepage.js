import classes from "./Homepage.module.css";

const Homepage = (props) => {
  const logoutHandler = () => {
    localStorage.removeItem('authenticatedUser');
    props.setIsLoggedIn(false);
  }

  return (
    <>
      <header className={classes["nav-bar"]}>
        <h1>Hello, {props.userName}!</h1>
        <button
          className={classes.button}
          type="button"
          onClick={logoutHandler}
        >
          LOG OUT
        </button>
      </header>
      <div className={classes.welcome}>
        <h2 className={classes.message}>Welcome back!</h2>
      </div>
    </>
  );
};

export default Homepage;
