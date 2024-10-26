const Book = {
    title: 'The Great Gatsby',
    author: 'F.Scott Fitzgerald',
    yearPublished: 1925
};


function logBook(Book){
    for (let key in Book){
        if (Book.hasOwnProperty(key)){
            console.log(`${key}: ${Book[key]}`);
        }
    }
}

//test
logBook(Book);
