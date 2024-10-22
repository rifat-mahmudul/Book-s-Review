import toast from "react-hot-toast";

//getBooks Functionality
export const getBooks = () => {
    let books = [];
    const storedBooks = localStorage.getItem('books');
    if(storedBooks){
        books = JSON.parse(storedBooks);
    }

    return books;
}

//saveRead Functionality
export const saveBooks = book => {
    let books = getBooks();
    const isExist = books.find(b => b.bookId === book.bookId);
    if(isExist){
        return toast.error('Already Read')
    }

    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
    toast.success('You have successfully Read this books.')
}

//saveWishlist functionality
export const saveWishlist = book => {
    let wishlist = getBooks();
    const isExist = wishlist.find(b => b.bookId === book.bookId);
    if(isExist){
        return toast.error('Already Read')
    }

    wishlist.push(book);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    toast.success('You have successfully added wishlist.');
}