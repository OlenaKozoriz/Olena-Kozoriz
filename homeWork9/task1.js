import { Book } from "./Book.js";
import { EBook } from "./EBook.js";

//Creation of different objects using the template 'Book'
const book1 = new Book ("Dandelion Wine", "Ray Bradbury", 1957);
const book2 = new Book ("The Little Prince", "Antoine de Saint-Exupery", 1943);
const book3 = new Book ("The Picture of Dorian Gray", "Oscar Wilde", 1890);

//Calling of the class method for different objects which prints all the properties of the class
book1.printInfo();
book2.printInfo();
book3.printInfo();

//Printing of 'Book' getters results
console.log(book1._title);
console.log(book2._author);
console.log(book3._author);

//Book's setter's calling
book2.year=1944;
console.log(book2.year);
// book1.title = 65;
// console.log(book1.title);

//Creation of 'books' massive for the static method of 'Book' class
let books = [new Book ("Dandelion Wine", "Ray Bradbury", 1957),
             new Book ("The Little Prince","Antoine de Saint-Exupery", 1943),
             new Book ("The Picture of Dorian Gray","Oscar Wilde", 1890),
             new Book ("Jane Eyre","Charlotte Bronte", 1847)];
//Calling of 'Book' static method and printing the results
const result = Book.oldestYear(books);
console.log(result);


//Creation of an instance using the template 'EBook'
const instanceEBook = new EBook ('Jane Eyre', 'Charlotte Bronte', 1847, 'PDF');

//Calling the method which prints all the properties of the 'EBook'object
instanceEBook.printInfo();

//Printing of 'EBook' getter's result
console.log(instanceEBook._fileFormat);

//EBook's setter's calling
instanceEBook.fileFormat='txt';
console.log(instanceEBook.fileFormat);

//Calling of 'EBook' static method and printing the results
const resultEBook = EBook.methodEBook (book2, 'csv');
resultEBook.printInfo();








