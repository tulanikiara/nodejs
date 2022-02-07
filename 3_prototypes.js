//Constructor

function Book(title, author, year) {
    //console.log('Book Initialized')
this.title = title;
this.author = author;
this.year = year;
}

//getSummary
Book.prototype.getSummary = function() {return `${this.title} was written by ${this.author} in ${this.year}`};

//getAge
Book.prototype.getAge = function() {
    const years = new Date().getFullYear - this.year;
    return `${this.title} is ${years} years old`
}

//revis / change year

Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revised = true;
}
//Instantiate
const book1 = new Book("Book One", "John Doe", "2013");
const book2 = new Book("Book Two", "Jane Doe", "2016");

//can make more books more easily
console.log(book2.getSummary());
book2.revise("2018");
console.log(book2);
