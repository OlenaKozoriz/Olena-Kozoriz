// 'Book' class creation. Export is needed for inheritance of the properties by some other class
export class Book {
    //For using secure properties outside of the 'Book' class (for instance in daughter class) '_' is added to all the properties
    _title;
    _author;
    _year;
    constructor(title, author, year) {
        (this._title = title), (this._author = author), (this._year = year);
    }
    //Method for printing all the properties of the objects
    printInfo() {
        console.log(this.title, this.author, this.year);
    }
    // Creation of static method for comparing the year through all the objects of the 'Book' and 'EBook' classes and getting the most early year
    static oldestYear(books) {
        let minYear = books[0].year;
        for (const book of books) {
            if (book.year < minYear) {
                minYear = book.year;
            }
        }
        return minYear;
    }
    //Adding of Getters
    get title() {
        return this._title;
    }
    get author() {
        return this._author;
    }
    get year() {
        return this._year;
    }
    //Adding of Setters
    set title(newTitle) {
        if (typeof newTitle !== 'string') {
            throw new Error('The title should be a string');
        }
        this._title = newTitle;
    }
    set author(newAuthor) {
        if (typeof newAuthor !== 'string') {
            throw new Error('The author should be a string');
        }
        this._author = newAuthor;
    }
    set year(newYear) {
        if (newYear <= 0) {
            throw new Error('The year cannot be 0 or negative value');
        }
        this._year = newYear;
    }
}
