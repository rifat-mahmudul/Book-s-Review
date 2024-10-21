import { Link, NavLink } from "react-router-dom"

/* eslint-disable react/no-unescaped-entities */
const Nav = () => {
    return (
        <header className="max-w-[90%] xl:max-w-[1200px] mx-auto p-4 top-0 sticky z-50 backdrop-blur-lg">
            <div className="container flex justify-between items-center h-16 mx-auto">
                <Link to={'/'} rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
                    <h1 className="font-bold text-3xl"><span className="text-green-500">Book's</span> <span className="text-sky-500">Store</span></h1>
                </Link>
                <ul className="hidden space-x-3 lg:flex items-center">
                    <NavLink to="/" className={({isActive}) => isActive ? 'border border-green-500 p-2 rounded-md text-green-500 font-bold' : 'font-bold p-2'}>
                        Home
                    </NavLink>

                    <NavLink to='/listBooks' className={({isActive}) => isActive ? 'border border-green-500 p-2 rounded-md text-green-500 font-bold' : 'font-bold p-2'}>
                        Listed Books
                    </NavLink>

                    <NavLink to='/pageRead' className={({isActive}) => isActive ? 'border border-green-500 p-2 rounded-md text-green-500 font-bold' : 'font-bold p-2'}>
                        Pages to Read
                    </NavLink>
                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex gap-5">
                    <button className="self-center px-8 py-3 rounded bg-green-500 hover:bg-green-700 transition-[0.5s] font-semibold text-white">Sign in</button>
                    <button className="self-center px-8 py-3 font-semibold rounded bg-sky-500 hover:bg-sky-700 transition-[0.5s] text-white">Sign up</button>
                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    )
}

export default Nav
