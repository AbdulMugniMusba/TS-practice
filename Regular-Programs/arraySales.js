var sales = [1000, 2000, 3000, 4000];
console.log("First index ".concat(sales)); //Printing the sales of array
sales.push(5000, 6000); // adding the sales in array
console.log("After adding \"push\" ".concat(sales));
sales.unshift(8000); //adding the sales to first index
console.log("After adding \"unshift\" ".concat(sales));
sales.shift(); //removing the first element from array
console.log("After removing the first element using \"Shift\" ".concat(sales));
sales.pop(); // removeing the last element of array
console.log("After removing the last index using \"pop\" ".concat(sales));
var totalSales = 0;
for (var i = 0; i < sales.length; i++) {
    totalSales = totalSales + sales[i];
    console.log("Sales ".concat(i + 1, "= ").concat(sales[i]));
}
console.log();
console.log("Total Sales: ".concat(totalSales));
console.log();
var newSales = sales.slice(2, 5);
console.log("Sales from index 2 to 5 is  ".concat(newSales));
console.log();
var position = sales.indexOf(5000);
console.log("index of 5000 is ".concat(position));
