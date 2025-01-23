function printFib(a) {
    var m = 0;
    var n = 1;
    var str = "0 1 ";
    for (var i = 0; i <= a - 2; i++) {
        var sum = m + n;
        m = n;
        n = sum;
        str = str + sum + " ";
    }
    console.log("Fibonessi Series are  " + str);
}
printFib(7);
printFib(12);
