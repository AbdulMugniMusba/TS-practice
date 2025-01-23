function primeNum(n) {
    var prime = true;
    var i = 2;
    while (i < n) {
        var remainder = n % i;
        console.log(i);
        if (remainder == 0) {
            prime = false;
            break;
        }
        i++;
    }
    if (prime) {
        console.log(n + " is a prime number");
    }
    else {
        console.log(n + " is not a prime number");
    }
}
primeNum(7);
primeNum(5);
primeNum(9);
primeNum(100);
