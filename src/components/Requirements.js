import classes from "./Requirements.module.css";

const Requirements = (props) => {
  return (
    <div className={classes["requirements-container"]}>
      <p
        className={classes.requirement}
        style={{ color: props.password.length >= 8 && "#77dd77" }}
      >
        8 or more characters
      </p>
      <p
        className={classes.requirement}
        style={{ color: props.password.match(/[0-9]/g) && "#77dd77" }}
      >
        at least 1 number
      </p>
      <p
        className={classes.requirement}
        style={{ color: props.password.match(/[A-Z]/g) && "#77dd77" }}
      >
        at least 1 uppercase letter
      </p>
    </div>
  );
};

export default Requirements;
