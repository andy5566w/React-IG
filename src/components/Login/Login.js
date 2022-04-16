import classes from "./Login.module.scss";
import LoginForm from "./LoginForm";
const Login = () => {
  return (
    <section className={classes.login}>
      <LoginForm />
    </section>
  );
};

export default Login;
