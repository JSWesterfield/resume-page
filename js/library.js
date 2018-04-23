//event is fired when the initial HTML document has been completely loaded and parsed,
// without waiting for stylesheets, images, and subframes to finish loading
// document.addEventListener('DOMContentLoaded', function(event) {
//     console.log('DOM fully loaded and parsed');
// });

// can only access globally scoped objects/functions fronm the page in the console.
var Library = function() {
	//Library should utilize functions
	this.booksArray = [];
};

//Global Book obj, how to: add books into Library
var Book = function(title, author, numPages, pubDate) {
	this.title = title;
	this.author = author;
	this.numberOfPages = numPages;
	this.publishDate = new Date(pubDate); //JS date object
};

//book global instances, should I add a g to variable name?
var book0 = new Book('The Great Gatsby', 'Scott Fitzgerald', 800, 'December 17, 1925 03:24:00'); 
var book1 = new Book('Ready Player One', 'Ernest Cline', 385, 'August 16, 2011 08:33:00'); 
var book2 = new Book('The Wind-Up Bird Chronicle', 'Haruki Murakami', 607, 'August 25, 1995 11:41:00');
var book3 = new Book('Martian Chronicles', 'Ray Bradbury', 222, 'October 03, 1950 14:24:46');
var book4 = new Book('American Gods', 'Neil Gaiman', 465, 'June 19, 2001 10:43:11');  
var book5 = new Book('Planetfall', 'Emma Newman', 694, 'March 15, 2015 04:28:30'); //duplicate authors
var book6 = new Book('Outliers: The Story of Success', 'Malcolm Gladwell', 304, 'February 05, 1988 03:24:00'); 
var book7 = new Book('Children of Time', 'Adrian Tchaikovsky', 609, 'June 04, 2015 16:10:22'); 
var book8 = new Book('The Alchemist', 'Paulo Coelho', 208, 'August 14, 1988 11:11:34');
var book11 = new Book('Enders Game', 'Orson Scott Card', 324, 'April 27, 1985 06:00:30'); //Extra book to add on the first function
var book12 = new Book('The Ultimate Hitchhikers Guide To The Galaxy', 'Douglas Adams', 653, 'October 15, 1992 11:14:05');
var book13 = new Book('Dune', 'Frank Herbert', 412, 'October 23, 1965 02:20:30');
var book14 = new Book('Life of Pi', 'Yann Martel', 336, 'September 11, 2001 12:45:09');
var book15 = new Book('All the Light We Cannot See', 'Anthony Doerr', 544, 'May 06, 2014 09:42:22');
var book16 = new Book('Six Wakes', 'Mur Lafferty', 361, 'January 31, 2017 12:00:04');
var book17 = new Book('Sleeping Giants', 'Sylvain Neuvel', 361, 'April 20, 2016 10:50:11');
var book18 = new Book('Borne', 'Jeff VanderMeer', 336, 'April 24, 2017 06:39:07');



//new instance of 'library'
var jakeLibrary = new Library();

Library.prototype._addAllBooks = function () {
	jakeLibrary._addBook(book0);
	jakeLibrary._addBook(book1);
	jakeLibrary._addBook(book2);
	jakeLibrary._addBook(book3);
	jakeLibrary._addBook(book4);
	jakeLibrary._addBook(book5);
	jakeLibrary._addBook(book6);
	jakeLibrary._addBook(book7);
	jakeLibrary._addBook(book8);
	jakeLibrary._addBook(book9);
	jakeLibrary._addBook(book10);

	console.log('... inside this _addAllBooks function');
}

Library.prototype.init = function() {
	this._addBook;
	this._removeBookByTitle;
	this._removeBookByAuthor;
	this._getRandomBook;
	this._getBookByTitle;
	this._getBooksByAuthor;
	this._addBooks;
	this._getAuthors;
	this._getRandomAuthorName;

	return false;
}

// Adds in one book at a time
Library.prototype._addBook = function(book) {
	for (var i = 0; i <= this.booksArray.length; i++) {
		if (this.booksArray[i] === book) {    
			console.log('This book exists in booksArray already, can not add your book: ');
			console.log(this.booksArray[i]);
			return false;
		}    
	}

	console.log('This books does not exists, adding it now');

	//Set the values from these titles to 
	var _title = $('.title').val();
	var _author= $('.author').val();
	var _numPages = $('.numPages').val();
	var _pubDate = $('.pubDate').val();

	/* Store our variable ALSO with the data object, by creating a data attribute to target a certain DOM element */
	$('.temp-title').text(_title);  //Will set the location of the data to '.temp-title', or the template for our data. THEN
	$('.temp-author').text(_author);
	$('.temp-numPages').text(_numPages );
	$('.temp-pubDate').text(_pubDate);

	this.booksArray.push(book);
	return true;
};


/* REMOVE BOOK BY TITLE */
Library.prototype._removeBookByTitle = function(title) { //pass in the book array, and the instance of a book model your trying to delete
	for(var i = this.booksArray.length - 1; i >= 0; --i) {
		if (this.booksArray[i].title === title) {
			console.log('We found a match! Lets get to splicing!');
			this.booksArray.splice(i, 1);
			return true;
		} 
	}
	console.log('no match for splice found');
	return false
}; 


// /* REMOVE AUTHOR */
Library.prototype._removeBookByAuthor = function(authorName) {
	 //set a flag for if the author was removed. If author was removed and 
	 var j = 0;
	for(var i = this.booksArray.length - 1; i > -1; i--) {
		if (this.booksArray[i].author == authorName) {
			console.log('We found a match! Lets get to splicing!');
			this.booksArray.splice(i, 1);
			j++
		}
	}
	console.log('length of array = ' + this.booksArray.length);
	if (j > 0) {
		return true;
	}
	return false;
}; 


// /* GET RANDOM */
Library.prototype._getRandomBook = function() {
	if (this.booksArray.length <= 0 ) {
		return null;
	}
	console.log('found a random book!');

	return this.booksArray[Math.floor(Math.random() * this.booksArray.length - 1)];
};


/* REMOVE BOOK BY TITLE */
Library.prototype._getBookByTitle = function(title) {
	var matchingTitlesArray = [];
	for (var i = 0; i < this.booksArray.length; i++) {
		if(RegExp(title.toUpperCase(), "i").test(this.booksArray[i].title.toUpperCase())) {
			matchingTitlesArray.push(this.booksArray[i]);
		}
	}
	return matchingTitlesArray;
}; 


/* GET BOOKS BY AUTHOR */
Library.prototype._getBooksByAuthor = function(author) {
	var authorMatchingArray = [];
	// for(var i = 0; i < this.booksArray.length; i++) {
	//     if(authorName.indexOf(this.booksArray[i]) !== -1){
	//         authorMatchingArray.push(this.booksArray[i]);
	//         console.log('Found match, placing in authorArray');              
	//     } 
	// }
	for (var i = 0; i < this.booksArray.length; i++) {
		if(RegExp(author.toUpperCase(), "i").test(this.booksArray[i].author.toUpperCase())) {
			console.log('Found a match, adding your author now.');
			authorMatchingArray.push(this.booksArray[i]);
		}
	}
	console.log('Were outside the for loop now.');
	return authorMatchingArray;
};

/* ADD BOOKS*/
Library.prototype._addBooks = function(books) {
	//add books
	var count = 0
	for (var i = 0; i < books[i].length; i++) {
		this._addBook(books[i]);
		count++;
	}
	return count;
};

Library.prototype._getAuthors = function() {
	var authorArray = [];
	for (var i = 0; i < this.booksArray.length; i++) {
		if(authorArray.indexOf(this.booksArray[i].author) === -1 ) {
			authorArray.push(this.booksArray[i].author);
		}
	}
	return authorArray;
};

Library.prototype._getRandomAuthorName = function() {
	if(this.booksArray.length == 0) {
		return null;
	}
	return this.booksArray[Math.floor(Math.random() * this.booksArray.length - 1)];
};