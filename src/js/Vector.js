class Vector {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  mul(v) {
    return new Vector(this.x * v, this.y * v)
  }

  add(v) {
    return new Vector(this.x + v.x, this.y + v.y)
  }

  sub(v) {
    return new Vector(this.x - v.x, this.y - v.y)
  }

  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }

  angle() {
    return Math.atan2(this.y, this.x)
  }

  set(x, y) {
    this.x = x
    this.y = y
    return this
  }

  equal(v) {
    return this.x === v.x && this.y === v.y
  }

  clone() {
    return new Vector(this.x, this.y)
  }

  move(x, y) {
    this.x += x
    this.y += y
    return this
  }

  toString() {
    return `(${this.x}, y: ${this.y})`
  }
}

export default Vector
