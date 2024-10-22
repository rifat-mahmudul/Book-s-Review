import { Link } from 'react-router-dom'
import img from '../assets/banner.png'

const Hero = () => {
    return (
        <section>
            <div className="max-w-[90%] rounded-lg xl:max-w-[1200px] flex flex-col justify-center mx-auto py-6 mt-5 lg:flex-row lg:justify-between bg-gray-100 px-8 sm:px-32">
                <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-xl lg:text-left">
                    <h1 className="text-3xl font-bold sm:text-6xl">
                        Books to freshen up your bookshelf
                    </h1>
        
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0  lg:justify-start">
                        <Link to='/listBooks' className="px-8 py-3 text-lg font-semibold rounded bg-green-500 hover:bg-green-700 transition-[0.5s] text-white mt-16">View The List</Link>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={img} className="h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
            </div>
        </section>
    )
}

export default Hero
