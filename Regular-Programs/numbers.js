var numbers = [1, 2, 3];
console.log(numbers);
var string = numbers.map(function (numbers) { return numbers.toString(); });
console.log(string);
var processed = "-Processed";
var processedArray = string.map(function (string) { return string.concat(processed); });
console.log(processedArray);
