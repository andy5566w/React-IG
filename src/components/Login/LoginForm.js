import Input from '../UI/form/Input'
import { useState } from 'react'
import classes from './LoginForm.module.scss'
import instagram_logo from '../../img/login/instagram_logo.png'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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
        styleName={classes.form__input}
        label={'password'}
        type={'password'}
        value={password}
        handleValue={(e) => {
          setPassword(e.target.value)
        }}
      />
    </form>
  )
}

export default LoginForm
