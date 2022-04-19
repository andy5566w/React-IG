import classes from './Clock.module.scss'
import { useState, useCallback } from 'react'

const Clock = () => {
  const day = new Date()
  const [hrDegree, setHrDegree] = useState(day.getHours() * 30)
  const [mnDegree, setMnDegree] = useState(day.getMinutes() * 6)
  const [scDegree, setScDegree] = useState(day.getSeconds() * 6)
  const handleCalculateDegree = useCallback(() => {
    const day = new Date()
    setHrDegree(() => day.getHours() * 30)
    setMnDegree(() => day.getMinutes() * 6)
    setScDegree(() => day.getSeconds() * 6)
  }, [setHrDegree, setMnDegree, setScDegree])

  setInterval(() => {
    handleCalculateDegree()
  }, 1000)

  return (
    <div className={classes.container}>
      <div className={classes.clock}>
        <div
          style={{ '--color': '#ff2972', transform: `rotate(${hrDegree}deg)` }}
          className={`${classes.circle}`}
        >
          <i></i>
        </div>
        <div
          style={{ '--color': '#fee800', transform: `rotate(${mnDegree}deg)` }}
          className={`${classes.circle} ${classes.circle2}`}
        >
          <i></i>
        </div>
        <div
          style={{ '--color': '#04fc43', transform: `rotate(${scDegree}deg)` }}
          className={`${classes.circle} ${classes.circle3}`}
        >
          <i></i>
        </div>

        <span style={{ '--i': 1 }}>{<b>1</b>}</span>
        <span style={{ '--i': 2 }}>{<b>2</b>}</span>
        <span style={{ '--i': 3 }}>{<b>3</b>}</span>
        <span style={{ '--i': 4 }}>{<b>4</b>}</span>
        <span style={{ '--i': 5 }}>{<b>5</b>}</span>
        <span style={{ '--i': 6 }}>{<b>6</b>}</span>
        <span style={{ '--i': 7 }}>{<b>7</b>}</span>
        <span style={{ '--i': 8 }}>{<b>8</b>}</span>
        <span style={{ '--i': 9 }}>{<b>9</b>}</span>
        <span style={{ '--i': 10 }}>{<b>10</b>}</span>
        <span style={{ '--i': 11 }}>{<b>11</b>}</span>
        <span style={{ '--i': 12 }}>{<b>12</b>}</span>
      </div>
    </div>
  )
}
export default Clock
