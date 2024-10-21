import PropTypes from 'prop-types'
import { FaRegStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Book = ({book}) => {

    const {bookId, bookName, author, image, rating, category} = book;

    return (
        <Link to={`/book/${bookId}`} className='p-4 border border-gray-300 shadow-lg rounded-lg hover:scale-105 transition'>
            <div className='bg-gray-100 p-5 rounded-lg'>
                <img src={image} className='h-[150px]  mx-auto' alt="" />
            </div>

            <h3 className='mt-4 mb-3 font-bold text-green-500'>{category}</h3>
            <h3 className='font-bold text-xl mb-3'>{bookName}</h3>
            <p className='border-b border-dotted border-gray-500 pb-4'>By : {author}</p>

            <div className='flex justify-between items-center mt-3'>
                <p>Fiction</p>
                <div className='flex gap-3 items-center'>
                    <h4>{rating}</h4>
                    <FaRegStar />
                </div>
            </div>

        </Link>
    )
}

Book.propTypes = {
    book : PropTypes.object,
}

export default Book
