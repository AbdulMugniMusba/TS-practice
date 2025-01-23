class rect {
  hight: number;
  width: number;

  constructor(hi: number, wi: number) {
    this.hight = hi;
    this.width = wi;
  }

  calculateArea() {
    return this.hight * this.width;
  }
  calculateParameter() {
    return 2 * (this.hight * this.width);
  }
  displayDetails() {
    console.log(`Height: ${this.hight} , Width: ${this.width}`);
  }
}
const rect1 = new rect(10, 5);
rect1.displayDetails();
console.log(`Area = ${rect1.calculateArea()} `);
console.log(`Parameter = ${rect1.calculateParameter()}`);