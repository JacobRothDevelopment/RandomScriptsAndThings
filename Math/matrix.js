class Matrix {
  matrix;
  width;
  height;

  /**
   * @param {number[][]} array
   */
  constructor(array) {
    // brief validation
    const width = array[0].length;
    for (let i = 0; i < array.length; i++) {
      const row = array[i];
      if (row.length != width) throw new Error(`malformed matrix in row ${i}`);
    }

    // then set all the stuff
    this.width = width;
    this.height = array.length;
    this.matrix = array;
  }

  /**
   * create blank matrix of given size
   * @param {number} width
   * @param {number} height
   * @returns
   */
  static blank(width, height) {
    var matrix = [];
    for (let i = 0; i < height; i++) {
      matrix.push([]);
      for (let j = 0; j < width; j++) {
        matrix[i].push(0);
      }
    }
    return new Matrix(matrix);
  }

  /**
   * creates an identity matrix of a given size
   * @param {number} size
   * @returns
   */
  static identity(size) {
    var m = Matrix.blank(size, size);

    for (let i = 0; i < size; i++) {
      m.setValue(i, i, 1);
    }

    return m;
  }

  /**
   * set value in matrix at given coordinates
   * @param {number} row
   * @param {number} col
   * @param {number} value
   */
  setValue(row, col, value) {
    this.matrix[row][col] = value;
  }

  /**
   * Get value from matrix
   * @param {number} row
   * @param {number} col
   * @returns
   */
  getValue(row, col) {
    return this.matrix[row][col];
  }

  /**
   * get row values as array
   * @param {number} index
   * @returns
   */
  getRow(index) {
    if (index > this.height - 1) throw new Error(`row ${index} does not exist`);

    return this.matrix[index];
  }

  /**
   * get column values as array
   * @param {number} index
   * @returns
   */
  getColumn(index) {
    if (index > this.width - 1)
      throw new Error(`column ${index} does not exist`);

    var values = [];
    for (let r = 0; r < this.height; r++) {
      values.push(this.getValue(r, index));
    }
    return values;
  }

  /**
   * multiply matrix by another matrix
   * @param {Matrix} m2
   * @returns
   */
  dot(m2) {
    // validation
    if (this.width !== m2.height)
      throw new Error('Matrices will not dot product');

    var m = Matrix.blank(m2.width, this.height);
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < m2.width; j++) {
        const row = this.getRow(i);
        const col = m2.getColumn(j);
        const value = this.arrayProducts(row, col);
        m.setValue(i, j, value);
      }
    }

    return m;
  }

  // https://www.mathsisfun.com/algebra/vectors-cross-product.html
  // https://www.mathsisfun.com/definitions/cross-product.html
  cross() {}

  /**
   * multiply whole matrix by a number
   * @param {number} scalar
   * @returns
   */
  scale(scalar) {
    var m = Matrix.blank(this.width, this.height);

    for (let r = 0; r < this.height; r++) {
      const row = this.getRow(r);
      for (let c = 0; c < row.length; c++) {
        const value = scalar * row[c];
        m.setValue(r, c, value);
      }
    }

    return m;
  }

  /**
   * adds matrix to a given matrix
   * @param {Matrix} m2
   * @returns
   */
  add(m2) {
    // validation
    this.requireSameSize();

    var m = Matrix.blank(this.width, this.height);
    for (let r = 0; r < this.height; r++) {
      const row = this.height[r];
      for (let c = 0; c < this.width; c++) {
        const value = this.getValue(r, c) + m2.getValue(r, c);
        m.setValue(r, c, value);
      }
    }
    return m;
  }

  /**
   * subtracts matrix to a given matrix
   * @param {Matrix} m2
   * @returns
   */
  subtract(m2) {
    const sub = m2.scale(-1);
    return this.add(sub);
  }

  // https://www.mathsisfun.com/algebra/matrix-inverse.html
  invert() {
    requireIsSquare();
    if (this.determinant() === 0)
      throw new Error('Cannot invert matrix with determinant of 0');

    throw new Error("I ain't done this yet. shit's gonna be hard");
  }

  /**
   * transposes matrix
   * @returns
   */
  transpose() {
    var m = Matrix.blank(this.height, this.width);
    for (let r = 0; r < this.height; r++) {
      const row = this.getRow(r);
      for (let c = 0; c < this.width; c++) {
        m.setValue(c, r, row[c]);
      }
    }
    return m;
  }

  // https://byjus.com/maths/determinant-of-4x4-matrix/
  // https://www.mathsisfun.com/algebra/matrix-determinant.html
  // https://math.stackexchange.com/questions/1955784/how-to-find-the-determinant-of-a-5x5-matrix
  determinant() {
    // validation
    requireIsSquare();

    throw new Error("I ain't done this yet. shit's gonna be hard");
  }

  /**
   * output matrix as string
   * @returns
   */
  toString() {
    var output = '';
    for (let r = 0; r < this.height; r++) {
      output += `  [  `;
      const row = this.getRow(r);
      for (let c = 0; c < this.width; c++) {
        const element = row[c];
        const comma = c + 1 === this.width ? '' : ',';
        output += `${element}${comma}  `;
      }
      output += `]\r\n`;
    }
    return output;
  }

  /**
   * compares with given matrix
   * @returns {boolean}
   */
  equals() {
    requireSameSize();

    var isEqual = true;
    for (let r = 0; r < this.height; r++) {
      const row = this.height[r];
      for (let c = 0; c < this.width; c++) {
        isEqual = isEqual && this.getValue(r, c) == m2.getValue(r, c);
      }
    }
    return isEqual;
  }

  //#region Helpers
  /**
   * dot product arrays
   * @param {number[]} a1
   * @param {number[]} a2
   * @returns
   */
  arrayProducts(a1, a2) {
    if (a1.length !== a2.length)
      throw new Error('arrays are different lengths');
    var sum = 0;
    for (let i = 0; i < a1.length; i++) {
      sum += a1[i] * a2[i];
    }
    return sum;
  }

  requireIsSquare() {
    if (this.width !== this.height) throw new Error('matrix must be square');
  }

  /**
   * @param {Matrix} m2
   */
  requireSameSize(m2) {
    if (this.width !== m2.width || this.height !== m2.height)
      throw new Error('matrices must be the same size');
  }
  //#endregion
}

const m = new Matrix([
  [1, 2, 3, 1],
  [4, 5, 6, 1],
]);

const a = new Matrix([
  [7, 8, 1],
  [9, 10, 1],
  [11, 12, 1],
  [1.1, 1.2, 1],
]);

const c = new Matrix([[3, 4, 2]]);
const d = new Matrix([
  [13, 9, 7, 15],
  [8, 7, 4, 6],
  [6, 4, 0, 3],
]);

//#region Test Passes

// const b = Matrix.blank(4, 6);
// console.log(b.toString());

// b.setValue(0, 1, 7);
// console.log(b.toString());

// console.log(m.getColumn(2));
// console.log(a.getRow(2));

// console.log(m.toString());
// console.log(m.dot(a).toString();

// console.log(c.dot(d).toString();

// console.log(a.add(a).toString());

// console.log(a.subtract(a).toString());

// console.log(Matrix.identity(4).toString());

// console.log(a.toString());
// console.log(a.transpose().toString());

//#endregion

module.exports = { Matrix };
