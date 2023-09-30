const { Matrix } = require('./matrix');

class Point {
  x;
  y;

  /**
   * @param {number} x
   * @param {number} y
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * @param {number[]} array
   * @returns
   */
  static fromArray(array) {
    return new Point(array[0], array[1]);
  }

  /**
   * @param {Matrix} matrix
   */
  static fromVector(matrix) {
    const x = matrix.getValue(0, 0);
    const y = matrix.getValue(1, 0);
    return new Point(x, y);
  }

  /**
   * Make a Point a Matrix
   * @returns
   */
  toVector() {
    var m = new Matrix([[this.x], [this.y]]);
    return m;
  }
}

module.exports = { Point };
