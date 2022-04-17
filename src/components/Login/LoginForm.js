import Input from '../UI/form/Input'
import { useState, useEffect } from 'react'
import classes from './LoginForm.module.scss'
import instagram_logo from '../../img/login/instagram_logo.png'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isValid, setIsValid] = useState(false)
  useEffect(() => {
    setIsValid(() => email.includes('@') && password.length > 6)
  }, [email, password])
  return (
    <form className={classes.form}>
      <div className={classes.form__img}>
        <img src={instagram_logo} alt="" />
      </div>
      <Input
        label={'Phone number, username, or email'}
        value={email}
        handleValue={(e) => {
          setEmail(e.target.value)
        }}
      />
      <Input
        label={'password'}
        type={'password'}
        value={password}
        handleValue={(e) => {
          setPassword(e.target.value)
        }}
      />
      <button
        disabled={!isValid}
        className={`${classes['form__login-btn']} ${
          !isValid ? classes.disabled : ''
        }`}
      >
        Login
      </button>
    </form>
  )
}

export default LoginForm
