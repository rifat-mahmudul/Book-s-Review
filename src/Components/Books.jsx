import { useEffect, useState } from "react"
import Book from "./Book";

const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('/Data.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])


    return (
        <section className="py-16">
            <div className="max-w-[90%] xl:max-w-[1200px] mx-auto">
                <h1 className="text-center font-bold text-4xl mb-7">Books</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-between items-center">
                    {books.map(book => <Book key={book.bookId} book={book}></Book>)}
                </div>
            </div>
        </section>
    )
}

export default Books
