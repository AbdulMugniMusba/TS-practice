function printFib(a:number){
    let m:number = 0;
    let n:number = 1;
    let str:string = "0 1 "
    for (let i:number = 0; i <=a-2; i++) {
        let sum:number=m+n;
        m=n;
        n=sum
        str= str + sum + " ";
     }
    console.log("Fibonessi Series are  " +str );
    }
    printFib(7)
    printFib(12)