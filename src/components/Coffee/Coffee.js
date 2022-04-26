import classes from './Coffee.module.scss'
const Coffee = () => {
  const vapours = []
  for (let i = 1; i < 21; i++) {
    vapours.push(~~(Math.random() * 20) + 1)
  }
  return (
    <div className={classes.wrap}>
      <div className={classes.container}>
        <div className={classes.plate}></div>

        <div className={classes.cup}>
          <div className={classes.top}>
            <div className={classes.vapour}>
              {vapours.map((i, index) => (
                <span style={{ '--i': i }} key={index}></span>
              ))}
            </div>
            <div className={classes.circle}>
              <div className={classes.tea}></div>
            </div>
          </div>
        </div>

        <div className={classes.handle}></div>
      </div>
    </div>
  )
}

export default Coffee
