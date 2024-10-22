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

export const getWishlist = () => {
    let wishlist = [];
    const storedBooks = localStorage.getItem('wishlist');
    if(storedBooks){
        wishlist = JSON.parse(storedBooks);
    }

    return wishlist;
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
    let wishlist = getWishlist();
    let books = getBooks();
    const isExist2 = books.find(b => b.bookId === book.bookId);
    const isExist = wishlist.find(b => b.bookId === book.bookId);
    if(isExist || isExist2){
        return toast.error('Already Read')
    }

    wishlist.push(book);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    toast.success('You have successfully added wishlist.');
}