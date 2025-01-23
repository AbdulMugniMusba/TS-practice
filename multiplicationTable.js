function multiplicationTable(num) {
    var ans;
    for (var i = 1; i <= 10; i++) {
        ans = num * i;
        console.log("".concat(num, " X ").concat(i, " = ").concat(ans));
    }
}
(multiplicationTable(7));
(multiplicationTable(8));
