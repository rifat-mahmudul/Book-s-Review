import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Read = ({book}) => {

    const {bookName, author, image, rating, category, tags, yearOfPublishing, publisher, totalPages} = book;

    return (
            <section>
                <div className="p-4 border border-gray-400 rounded-lg sm:flex gap-5 mb-6">
                    <div className="bg-gray-100 p-8 rounded-md">
                        <img src={image} alt="" />
                    </div>

                    <div>
                        <h1 className='font-bold text-xl'>{bookName}</h1>
                        <p className='mt-3 mb-3'>By : {author}</p>
                        <p className="mb-3 flex flex-col sm:flex-row">
                            <span className="font-bold text-xl">Tag  </span>
                            <span className="mr-5 sm:ml-8 mt-3 sm:mt-0 font-bold text-green-500">#{tags[0]}</span>
                            <span className="mr-5 font-bold text-green-500">#{tags[1]}</span>
                            <span className="mr-5 font-bold text-green-500">#{tags[2]}</span>
                            <span className='text-gray-500 sm:ml-5'>Year of publishing : {yearOfPublishing}</span>
                        </p>

                        <div className='mt-3 sm:flex gap-6 border-b border-dotted border-gray-400 pb-5'>
                            <p>Publisher : {publisher}</p>
                            <p>Page : {totalPages}</p>
                        </div>

                        <div className='mt-4 flex flex-col sm:flex-row gap-6'>
                            <button className='py-2 px-5 bg-sky-100 text-sky-500 font-bold rounded-3xl'>Category : {category}</button>
                            <button className='py-2 px-5 bg-orange-100 text-orange-500 font-bold rounded-3xl'>Rating : {rating}</button>
                            <Link className='py-2 text-center px-5 bg-green-100 text-green-500 font-bold rounded-3xl'>View Details</Link>
                            <button className='py-2 px-5 bg-red-100 text-red-500 font-bold rounded-3xl'>Delete</button>
                        </div>
                    </div>
                </div>
            </section>
    )
}

Read.propTypes = {
    book : PropTypes.object
}

export default Read
