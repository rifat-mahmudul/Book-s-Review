import { Link, useLoaderData, useParams } from "react-router-dom"
import { saveBooks, saveWishlist } from "../Utils";

const BookDetails = () => {

    const books = useLoaderData();
    const {id} = useParams();
    const book = books?.find(book => book.bookId == id);

    const {bookName, author, image, rating, review, tags, publisher, totalPages, yearOfPublishing} = book;

    const handleRead = (book) =>{
        saveBooks(book);
    };

    const handleWishlist = (book) => {
        saveWishlist(book);
    }

    return (
        <section className="pb-16">
            <div className="max-w-[90%] xl:max-w-[1200px] flex flex-col justify-center items-center mx-auto sm:py-12 lg:py-8 lg:flex-row lg:justify-around">
                <div className="bg-gray-100 p-20 xl:p-24 mb-10 lg:mb-0 rounded-xl">
                    <img src={image} className="h-72 w-full sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
                <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                        {bookName}
                    </h1>
                    <p className="mt-4">By : {author}</p>
                    <p className="border-t border-b border-dotted py-3 mt-4 border-gray-500">Fiction</p>
                    <p className="mt-6 text-lg mb-4">
                        <span className="font-bold text-xl">Review : </span>{review}
                    </p>
                    <p className="mb-4 border-b border-dotted border-gray-400 pb-5">
                        <span className="font-bold text-xl">Tag  </span>
                        <span className="mr-5 ml-8 font-bold text-green-500">{tags[0]}</span>
                        <span className="mr-5 font-bold text-green-500">{tags[1]}</span>
                        <span className="mr-5 font-bold text-green-500">{tags[2]}</span>
                    </p>

                    <p className="mb-3">Number of Pages : <span className="font-bold">{totalPages}</span></p>
                    <p className="mb-3">Publisher : <span className="font-bold">{publisher}</span></p>
                    <p className="mb-3">Year of publishing : <span className="font-bold">{yearOfPublishing}</span></p>
                    <p className="mb-5">Rating : <span className="font-bold">{rating}</span></p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <Link onClick={()=>handleRead(book)} className="px-8 py-3 text-lg font-semibold rounded border border-black">Read</Link>

                        <Link onClick={() => handleWishlist(book)} className="px-8 py-3 text-lg font-semibold border rounded bg-sky-600 text-white">Wishlist</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BookDetails
