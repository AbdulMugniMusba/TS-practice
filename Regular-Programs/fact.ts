function fact(n:number){
let mul = 1;
for (let i:number = 1; i <= n; i++) {
  mul = mul * i;
}
console.log(`Factorial of ${n} is ${mul}`);
}
fact(5);
