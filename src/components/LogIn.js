import classes from "./LogIn.module.css";
import { useState, useEffect } from "react";
import Requirements from "./Requirements";

const LogIn = (props) => {
  const [validUsername, setValidUsername] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  const submitHandler = () => {
    if (validUsername && validPassword) {
      localStorage.setItem("authenticatedUser", props.username);
    } else {
      console.log("Requirements not met.  Try again!");
      return;
    }
  };

  const usernameHandler = (e) => {
    props.setUsername(e.target.value);
  };

  useEffect(() => {
    if (props.username.length >= 6) {
      setValidUsername(true);
    } else {
      setValidUsername(false);
    }
  }, [props.username]);

  const passwordHandler = (e) => {
    props.setPassword(e.target.value);
  };

  useEffect(() => {
    if (
      props.password.length >= 8 &&
      props.password.match(/[0-9]/g) &&
      props.password.match(/[A-Z]/g)
    ) {
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }
  }, [props.password]);

  const validCredentials = validUsername && validPassword ? true : false;
  // color #dd8377

  return (
    <div className={classes.container}>
      <form onSubmit={submitHandler} className={classes["form-container"]}>
        <h1 className={classes.header}>Create An Account</h1>
        <input
          className={classes["username-input"]}
          type="text"
          placeholder="Username"
          onChange={usernameHandler}
          value={props.username}
          style={{ outline: validUsername && "1px solid #77dd77" }}
        ></input>
        <input
          className={classes["password-input"]}
          type="password"
          placeholder="Password"
          onChange={passwordHandler}
          value={props.password}
          style={{ outline: validPassword && "1px solid #77dd77" }}
        ></input>
        <Requirements username={props.username} password={props.password} />
        <button
          className={classes.button}
          type="submit"
          disabled={!validCredentials}
        >
          SIGN UP
        </button>
      </form>
    </div>
  );
};

export default LogIn;
