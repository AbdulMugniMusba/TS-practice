function primeNum(n: number):void {
  let prime: boolean = true;
  let i: number = 2;
  while (i < n) {
    let remainder = n % i;
    console.log(i);
    if (remainder == 0) {
      prime = false;
      break;
    }
    i++;
  }
  if (prime) {
    console.log(n + " is a prime number");
  } else {
    console.log(n + " is not a prime number");
  }
}
primeNum(7);
primeNum(5);
primeNum(9);
primeNum(100);
