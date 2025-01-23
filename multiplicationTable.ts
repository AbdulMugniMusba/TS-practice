function multiplicationTable(num:number){
    let ans:number;
for (let i = 1; i <= 10; i++) {
  ans = num * i;
  console.log(`${num} X ${i} = ${ans}`);
}
}
(multiplicationTable(7));
(multiplicationTable(8));