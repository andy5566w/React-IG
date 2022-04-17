import classes from './Input.module.scss'
const Input = (props) => {
  const { type, label, value, handleValue, styleName } = props
  console.log(classes)
  return (
    <div className={`${classes['input-div']} ${value ? styleName : ''}`}>
      <label>
        <span className={`${value && classes['span-move']}`}>{label}</span>
        <input type={type || 'text'} value={value} onChange={handleValue} />
      </label>
    </div>
  )
}

export default Input
