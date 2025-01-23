var rect = /** @class */ (function () {
    function rect(hi, wi) {
        this.hight = hi;
        this.width = wi;
    }
    rect.prototype.calculateArea = function () {
        return this.hight * this.width;
    };
    rect.prototype.calculateParameter = function () {
        return 2 * (this.hight * this.width);
    };
    rect.prototype.displayDetails = function () {
        console.log("Height: ".concat(this.hight, " , Width: ").concat(this.width));
    };
    return rect;
}());
var rect1 = new rect(10, 5);
rect1.displayDetails();
console.log("Area = ".concat(rect1.calculateArea(), " "));
console.log("Parameter = ".concat(rect1.calculateParameter()));
