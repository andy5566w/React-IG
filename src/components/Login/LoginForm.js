import Input from "../UI/form/Input";
import { useState } from "react";
import classes from "./LoginForm.module.scss";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  return (
    <form className={classes.form}>
      <Input
        label={"Phone number, username, or email"}
        value={email}
        handleValue={(e) => {
          setEmail(e.target.value);
        }}
      />
    </form>
  );
};

export default LoginForm;
