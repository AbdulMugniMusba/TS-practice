class book{
    author:string;
    title:string;

    constructor(au:string,ti:string){
        this.author = au;
        this.title= ti;
    }
    displayDetails(){
        console.log(`Author:${this.author} Title:${this.title}`);
    }

}
let book1= new book("John","Harry Potter");
book1.displayDetails()