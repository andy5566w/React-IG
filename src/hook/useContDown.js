import { useState, useEffect } from 'react'

const durationFormatter = (time) => {
  if (!time) return { ss: 0 }
  let t = time
  const ss = t % 60
  t = (t - ss) / 60
  if (t < 1) return { ss }
  const mm = t % 60
  t = (t - mm) / 60
  if (t < 1) return { mm, ss }
  const hh = t % 24
  t = (t - hh) / 24
  if (t < 1) return { hh, mm, ss }
  const dd = t
  return { dd, hh, mm, ss }
}

const useContDown = (seconds = 0) => {
  const [count, setCount] = useState(seconds)
  const [date, setDate] = useState(durationFormatter(seconds))
  useEffect(() => {
    const timer = setTimeout(() => {
      if (count <= 0) return
      setCount((pre) => pre - 1)
      console.log(count)
      setDate(durationFormatter(count))
    }, 1000)
    return () => clearTimeout(timer)
  }, [count])
  return date
}

export default useContDown
