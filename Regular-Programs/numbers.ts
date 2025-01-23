let numbers:number[]=[1,2,3];
console.log(numbers);

let string:string[]=numbers.map(numbers=>numbers.toString())
console.log(string);

let processed:string="-Processed"
let processedArray:string[]=string.map(string=>string.concat(processed));
console.log(processedArray);