const Book = [
    {
        title: 'The Great Gatsby',
        author: 'F.Scott Fitzgerald',
        yearPublished: 1925
    },
    {
        title: 'ex1',
        author: 'Ahmed',
        yearPublished: 1996
    },
    {
        title: 'ex2',
        author: 'Sameh',
        yearPublished: 1926
    },
    {
        title: 'ex3',
        author: 'Amin',
        yearPublished: 1930
    },
    {
        title: 'ex4',
        author: 'Youssef',
        yearPublished: 1966
    }
];

function findBookByTitle(title, arr){
    return arr.find(Book => Book.title === title);
}

console.log(findBookByTitle('ex1', Book));