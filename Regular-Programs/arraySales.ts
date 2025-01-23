let sales:number[] = [1000, 2000, 3000, 4000];
console.log(`First index ${sales}`); //Printing the sales of array
sales.push(5000, 6000); // adding the sales in array
console.log(`After adding "push" ${sales}`);
sales.unshift(8000); //adding the sales to first index
console.log(`After adding "unshift" ${sales}`);
sales.shift(); //removing the first element from array
console.log(`After removing the first element using "Shift" ${sales}`);
sales.pop(); // removeing the last element of array
console.log(`After removing the last index using "pop" ${sales}`);

let totalSales:number = 0;
for (let i = 0; i < sales.length; i++) {
  totalSales = totalSales + sales[i];
  console.log(`Sales ${i + 1}= ${sales[i]}`);
}
console.log();
console.log(`Total Sales: ${totalSales}`);
console.log();
let newSales = sales.slice(2, 5);
console.log(`Sales from index 2 to 5 is  ${newSales}`);
console.log();
let position = sales.indexOf(5000);
console.log(`index of 5000 is ${position}`);