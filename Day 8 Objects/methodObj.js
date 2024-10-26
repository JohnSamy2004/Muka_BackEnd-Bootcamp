const Book = {
    title: 'The Great Gatsby',
    author: 'F.Scott Fitzgerald',
    yearPublished: 1925,

    method: function(){
        return `The title of the book => ${this.title}`;
    }
};

console.log(Book.method());