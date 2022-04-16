import classes from "./Input.module.scss";
const Input = (props) => {
  const { type, label, value, handleValue } = props;
  console.log(classes);
  return (
    <div className={classes["input-div"]}>
      <label>
        <span className={`${value && classes["span-move"]}`}>{label}</span>
        <input type={type || "text"} value={value} onChange={handleValue} />
      </label>
    </div>
  );
};

export default Input;
