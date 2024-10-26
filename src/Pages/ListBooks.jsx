import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getBooks, getWishlist } from "../Utils";
import Read from "../Components/Read";
import ShowWishlist from "../Components/ShowWishlist";

const ListBooks = () => {

    const [index, setIndex] = useState(0);
    const [books, setBooks] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [showRead, setShowRead] = useState(true);
    const [showWishlist, setShowWishlist] = useState(false);

    useEffect(() => {
        setBooks(getBooks());
        setWishlist(getWishlist());
    }, []);

    
    const handleSort = (event) => {
        const sortType = event.target.value;
        let sortedBooks = [...books];

        if (sortType === "rating") {
            sortedBooks.sort((a, b) => b.rating - a.rating);
        } else if (sortType === "pages") {
            sortedBooks.sort((a, b) => b.pages - a.pages);
        }

        setBooks(sortedBooks);
    };

    return (
        <div className="max-w-[90%] xl:max-w-[1200px] mx-auto">
            <div className="bg-gray-100 py-4 rounded-lg mb-5">
                <h1 className="text-center font-bold text-2xl">Books</h1>
            </div>

            <div className="text-center mb-8">
                <select onChange={handleSort} className="bg-green-500 text-white py-2 px-5 font-bold text-xl rounded-md outline-none" name="sort">
                    <option value="sort">Sort By</option>
                    <option value="rating">Rating</option>
                    <option value="pages">Pages</option>
                </select>
            </div>

            <div className="flex items-center overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap">
                <Link to='' onClick={() => { setIndex(0); setShowRead(true); setShowWishlist(false) }} className={`flex items-center flex-shrink-0 px-4 py-3 space-x-2 rounded-t-lg border-black ${index === 0 ? 'border-2 border-b-0 ' : 'border-b-2'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Read Books</span>
                </Link>
                
                <Link to='wishlist' onClick={() => { setIndex(1); setShowRead(false); setShowWishlist(true) }} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg border-black ${index === 1 ? 'border-2 border-b-0 ' : 'border-b-2'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Wishlist Books</span>
                </Link>
            </div>

            <div className="mt-8">
                <Outlet></Outlet>
            </div>

            {
                showRead 
                &&
                <div className="pb-10">
                {books.map((book, index) => <Read key={index} book={book} />)}
                </div>
            }

            {
                showWishlist 
                &&
                <div className="pb-10">
                {wishlist.map((book, index) => <ShowWishlist key={index} book={book} />)}
                </div>
            }
        </div>
    )
}

export default ListBooks;
