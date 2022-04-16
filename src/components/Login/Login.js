import classes from "./Login.module.scss";
import LoginForm from "./LoginForm";
import LoginCarousel from "./LoginCarousel";
const Login = () => {
  return (
    <section className={classes.login}>
      <div className={classes.login__carousel}>
        <LoginCarousel />
      </div>
      <div className={classes.login__form}>
        <LoginForm />
      </div>
    </section>
  );
};

export default Login;
