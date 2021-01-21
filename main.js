class Rectangle {
  constructor(w, h, x, y) {
    this._h = h;
    this._w = w;
    this._x = x;
    this._y = y;
    this._ref = this.generateInitialHTML();
    this.setStyling();
    this.makeClickRefresh();
  }
  //generate html
  generateInitialHTML() {
    document.body.insertAdjacentHTML(
      "beforeend",
      `
            <div class="rectangle"></div>
        `
    );
    return document.querySelector("div:last-child");
  }
  //getters for w,h,x,y
  get getW() {
    return this._w;
  }
  get getH() {
    return this._h;
  }
  get getX() {
    return this._x;
  }
  get getY() {
    return this._y;
  }
  // set styling
  setStyling() {
    const styles = {
      //make x and y the center of the square
      left: this._x - this._w / 2 + "px",
      top: this._y - this._h / 2 + "px",
      width: this._w + "px",
      height: this._h + "px",
      backgroundColor: getRandomRgb(),
    };
    Object.assign(this._ref.style, styles);
  }
  // setters for w,h,position
  set width(waarde) {
    this._w = waarde;
    this.setStyling();
  }
  set height(waarde) {
    this._h = waarde;
    this.setStyling();
  }
  set left(waarde) {
    this._x = waarde;
    this.setStyling();
  }
  set position(coordinate) {
    const arr = coordinate.replace(" ", "").split(",");
    this._x = arr[0];
    this._y = arr[1];
    this.setStyling();
  }
  //static functions
  static getSurfaceArea() {
    return this._w * this._h;
  }
  static getDistance(r1, r2) {
    return Math.pow(
      Math.pow(r1._x - r2._x, 2) + Math.pow(r1._y - r2._y, 2),
      0.5
    );
  }
  static collision(r1, r2) {
    return (
      r1._x < r2._x + r2._w &&
      r1._x + r1._w > r2._x &&
      r1._y < r2._y + r2._h &&
      r1._y + r1._h > r2._y
    );

    // collision detected!
  }

  // change color on click,
  makeClickRefresh() {
    this._ref.onclick = () => {
      this.setStyling();
    };
  }
}

rectangle1 = new Rectangle(
  getRandomRange(0, 500),
  getRandomRange(0, 500),
  getRandomRange(0, 1800),
  getRandomRange(0, 800)
);
rectangle2 = new Rectangle(
  getRandomRange(0, 500),
  getRandomRange(0, 500),
  getRandomRange(0, 1800),
  getRandomRange(0, 800)
);
// rectangle3 = new Rectangle(
//   getRandomRange(0, 500),
//   getRandomRange(0, 500),
//   getRandomRange(0, 1800),
//   getRandomRange(0, 800)
// );
// rectangle4 = new Rectangle(
//   getRandomRange(0, 500),
//   getRandomRange(0, 500),
//   getRandomRange(0, 1800),
//   getRandomRange(0, 800)
// );
// rectangle5 = new Rectangle(
//   getRandomRange(0, 500),
//   getRandomRange(0, 500),
//   getRandomRange(0, 1800),
//   getRandomRange(0, 800)
// );
// rectangle6 = new Rectangle(
//   getRandomRange(0, 500),
//   getRandomRange(0, 500),
//   getRandomRange(0, 1800),
//   getRandomRange(0, 800)
// );
console.log(Rectangle.getDistance(rectangle1, rectangle2));
console.log(Rectangle.collision(rectangle1, rectangle2));
console.log(rectangle1);
console.log(rectangle1.getX);
// generate random range
function getRandomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// generate random colour
function getRandomRgb() {
  return (
    "rgba(" +
    getRandomRange(0, 255) +
    "," +
    getRandomRange(0, 255) +
    "," +
    getRandomRange(0, 255) +
    ")"
  );
}
//
