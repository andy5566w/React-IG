import Vector from '../../js/Vector'
import classes from './TrackMouse.module.scss'
import { useEffect, useRef, useState, useCallback } from 'react'

const drawCrossLine = (ctx, dom) => {
  if (!ctx || !dom) return
  ctx.beginPath()
  ctx.save()
  ctx.moveTo(0, dom.clientHeight / 2)
  ctx.lineTo(dom.clientWidth, dom.clientHeight / 2)

  ctx.strokeStyle = '#ccc'
  ctx.moveTo(dom.clientWidth / 2, 0)
  ctx.lineTo(dom.clientWidth / 2, dom.clientHeight)
  ctx.stroke()

  ctx.translate(dom.clientWidth / 2, dom.clientHeight / 2)
  ctx.fillText('(0,0)', 5, -5)
  ctx.restore()
}

const drawMousePoint = (ctx, vector) => {
  if (!ctx) return
  ctx.beginPath()
  ctx.save()
  ctx.translate(vector.x, vector.y)
  ctx.arc(0, 0, 10, 0, Math.PI * 2)
  ctx.fillStyle = 'red'
  ctx.fill()

  ctx.fillStyle = 'black'
  ctx.font = '18px Arial'
  ctx.fillText(vector.toString(), 0, 0)
  ctx.restore()
}

const clearCanvas = (ctx, dom) => {
  if (!ctx) return
  ctx.clearRect(0, 0, dom.width, dom.height)
}

const connectLine = (ctx, vector) => {
  ctx.beginPath()
  ctx.moveTo(0, 0)
  ctx.save()
  ctx.rotate(vector.angle())
  ctx.lineTo(vector.length(), 0)
  ctx.lineWidth = 3
  ctx.stroke()
  ctx.restore()
}

const TrackMouse = () => {
  const canvasDom = useRef(null)
  const [ctx, setCtx] = useState(null)
  const [mouseVector, setMouseVector] = useState(new Vector(0, 0))
  const handleMouseMove = useCallback(
    (e) => {
      const { clientX, clientY } = e
      setMouseVector(new Vector(clientX, clientY))
    },
    [setMouseVector]
  )

  useEffect(() => {
    setCtx(() => canvasDom.current.getContext('2d'))
    canvasDom.current.width = window.innerWidth
    canvasDom.current.height = window.innerHeight
  }, [])

  useEffect(() => {
    if (!ctx || !canvasDom.current) return
    clearCanvas(ctx, canvasDom.current)
    drawCrossLine(ctx, canvasDom.current)
    drawMousePoint(ctx, mouseVector)
    ctx.save()
    const center = new Vector(window.innerWidth / 2, window.innerHeight / 2)
    ctx.translate(center.x, center.y)
    const mulVector = mouseVector.sub(center)
    connectLine(ctx, mulVector.mul((1 / mulVector.length()) * 100))
    ctx.restore()
  }, [ctx, canvasDom, mouseVector])

  return (
    <canvas
      className={classes.canvas}
      ref={canvasDom}
      onMouseMove={handleMouseMove}
    />
  )
}

export default TrackMouse
