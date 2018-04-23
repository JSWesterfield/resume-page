

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
    var book2 = new Book('Do Androids Dream of Electric Sheep?', 'Phillip K. Dick', 210 , 'July 22, 1968 11:41:00');
    var book3 = new Book('Martian Chronicles', 'Ray Bradbury', 222, 'October 4 27, 1950 14:24:46');
    var book4 = new Book('American Gods', 'Neil Gaiman', 465, 'June 19, 2001 10:43:11');  
    var book5 = new Book('Game of Thrones', 'George R.R. Martin', 694, 'March 15, 1997 04:28:30'); //duplicate authors
    var book6 = new Book('A Brief History of Time', 'Stephen Hawking', 256, 'February 05, 1988 03:24:00'); 
    var book7 = new Book('A Clash of Kings', 'George R.R. Martin', 768, 'September 21, 1998 16:10:22'); //duplicate authors
    var book8 = new Book('A Clash of Kings', 'George R.R. Martin Jr.', 768, 'September 21, 1998 16:10:22'); //duplicate title
    var book9 = new Book('The Sun Also Rises', 'Ernest Hemingway', 342, 'June 14, 1998 16:10:22'); 
    var book10 = new Book('The Alchemist', 'Paulo Coelho', 208, 'August 14, 1988 11:11:34');
    var book11 = new Book('Enders Game', 'Orson Scott Card', 324, 'April 27, 1985 06:00:30'); 
    var book12 = new Book('The Metamorphosis', 'Franz Kafka', 324, 'October 22, 1915 06:10:30'); //Only add to _addbook
     

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
    
    //Kyle's Example
    //addBooks
        // var bookAdded = 0;
        // for(var i=0; i < this.booksArray.length; i++) {
        //     if(this._addBook(this.booksArray[i])) {
        //         bookAdded++;
        //     };
        // }
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


    /* Set Local Storage, and set an object using an instanceKey */
    Library.prototype.setObject = function(instanceKey) {
        return localStorage.setItem(instanceKey, JSON.stringify(this.booksArray));
    };

    /* To get Object*/
    Library.prototype.getObject = function(instanceKey) {
        return this.booksArray = JSON.parse(localStorage.getItem(instanceKey));
    }
    
    /* To clear localStorage*/
    Library.prototype.clearObject = function(instanceKey) {
        return localStorage.removeItem(instanceKey);
    }

    function factorial(n) {
        if(n === 0 ) {
            return 1;
        }

        //console.log('Im iterating recursively');
        return n * factorial(n-1);
        console.log(factorial(5));
    }