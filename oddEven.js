function OddEven(n) {
    var remainder = n % 2;
    if (remainder > 0) {
        console.log(n + " is odd");
    }
    else
        console.log(n + " is even");
}
OddEven(9);
OddEven(10);
