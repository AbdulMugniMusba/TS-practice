function fact(n) {
    var mul = 1;
    for (var i = 1; i <= n; i++) {
        mul = mul * i;
    }
    console.log("Factorial of ".concat(n, " is ").concat(mul));
}
fact(5);
