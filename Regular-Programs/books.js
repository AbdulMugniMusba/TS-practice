var book = /** @class */ (function () {
    function book(au, ti) {
        this.author = au;
        this.title = ti;
    }
    book.prototype.displayDetails = function () {
        console.log("Author:".concat(this.author, " Title:").concat(this.title));
    };
    return book;
}());
var book1 = new book("John", "Harry Potter");
var book2 = new book("michal", "Shatter");
book1.displayDetails();
