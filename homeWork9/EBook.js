// 'Book' class import 
import {Book} from './Book.js';

//'EBook' class creation which extends the properties of 'Book' class
export class EBook extends Book {
//Adding a new property 'fileFormat' to the daughter 'EBook' class in the constructor	
_fileFormat;
constructor (title, author, year, fileFormat) {
	super (title, author, year);
	this._fileFormat = fileFormat;
};
//Method for printing all the properties of the objects
printInfo () {
	console.log (this._title, this._author, this._year, this._fileFormat)
}
//Adding a Getter for the added property in this class
get fileFormat () {             
	return this._fileFormat
};
//Adding a Setter for the added property in this class
set fileFormat (newFileFormat) {
	if (typeof newFileFormat !== "string") throw new Error("The file format should be a string");
	this._fileFormat = newFileFormat;
  };
// Creation of static method with the arguments (object of the 'Book' class and fileFormat property declared as a string
static methodEBook (book, format) {
	const newEBook = new EBook (book.title, book.author, book.year, format)
	return newEBook
};
}







