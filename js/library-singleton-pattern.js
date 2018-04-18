var Library;

(function() {
    var libraryOfAlexandria;

    Library = function() {
        // return the instance if we already have one
        if (libraryOfAlexandria) {
            return libraryOfAlexandria;
        }

        libraryOfAlexandria = this;

        this.title = 'hello';

        //functionality
        this.foo = function() {
            return 'bar';
        };
    };
})(); //wrapping in an a immediately invoked function expression

var s1 = new Library();
var s2 = new Library(); // this! 


// Usage: 
 Library.prototype.booksArray = [];


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

    console.log('successfully added all of your books 0 through 10');
    console.log(this.booksArray);   //show booksArray so that I may choose an author or title for use on other functions
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
    this._getBooksBy;

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
    console.log('This books does not exist, adding it now');
    console.log(this.booksArray.push);
    this.booksArray.push(book);
    return true;
};


/* REMOVE BOOK BY TITLE */
Library.prototype._removeBookByTitle = function(title) { //pass in the book array, and the booksArray of a book model your trying to delete
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
Library.prototype._removeBookByAuthor = function(author) {
     //set a flag for if the author was removed. If author was removed and 
     var j = 0;
    for(var i = this.booksArray.length - 1; i > -1; i--) {
        if (this.booksArray[i].author.toUpperCase() == author.toUpperCase()) {
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

    return this.booksArray[Math.floor(Math.random() * this.booksArray.length - 1)];
};

/* GENERIC GETBOOKSBY function for reusability */
Library.prototype._getBooksBy = function(val, searchOn) { //val = 'string' && searchOn = property of the booksArray object
    var tempArr = [];
    for (var i ; i < this.booksArray.length; i++) {
        if(this.booksArray[i][searchOn].indexOf(val) !== -1) {
            tempArr.push(this.booksArray[i][searchOn]); //searchOn will be the author or title or whatever
        }
    }

    return tempArr;
}
  

/* REMOVE BOOK BY TITLE */
Library.prototype._getBookByTitle = function(title) {
    var tempArr = [];
    for(var i = 0; i < this.booksArray.length; i++)  {
        if (this.booksArray[i].title.indexOf(title) !== -1) {
            tempArr.push(this.booksArray[i]);
        }
    }

    return tempArr;
}; 


/* GET BOOKS BY AUTHOR */
Library.prototype._getBooksByAuthor = function(author) {
    var tempArr = [];
    
    for (var i = 0; i < this.booksArray.length; i++) {
        if(RegExp(author.toUpperCase(), "i").test(this.booksArray[i].author.toUpperCase())) {
            console.log('Found a match, adding your author now.');
            tempArr.push(this.booksArray[i]);
        }
    }
    console.log('Were outside the for loop now.');
    return tempArr;
};

/* ADD BOOKS*/
Library.prototype._addBooks = function(books) {
    //add books
    var count = 0
    for (var i = 0; i < this.booksArray.length; i++) {
        if(this._addBook(this.booksArray[i])) {
            count++;
        } 
        
    }
    return count;
};

Library.prototype._getAuthors = function() {
    var authorArray = [];
    for (var i = 0; i < this.booksArray.length; i++) {
        if(authorArray.indexOf(this.booksArray[i].author.toLowerCase()) === -1) {
            authorArray.push(this.booksArray[i].author.toLowerCase());
        }
    }
    return authorArray;
};

Library.prototype._getRandomAuthorName = function() {
    return this._getRandomBook().author;
};


// /* Set Local Storage, and set an object using an booksArrayKey */
// Library.prototype.setObject = function(booksArrayKey) {
//     return localStorage.setItem(booksArrayKey, JSON.stringify(this.booksArray));
// };

// /* To get Object*/
// Library.prototype.getObject = function(booksArrayKey) {
//     return this.booksArray = JSON.parse(localStorage.getItem(booksArrayKey));
// }

// /* To clear localStorage*/
// Library.prototype.clearObject = function(booksArrayKey) {
//     return localStorage.removeItem(booksArrayKey);
// }
