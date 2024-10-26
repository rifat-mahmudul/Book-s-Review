import { Link, NavLink } from "react-router-dom"
import { CiMenuFries } from "react-icons/ci";

/* eslint-disable react/no-unescaped-entities */
const Nav = () => {
    return (
        <header className="max-w-[90%] xl:max-w-[1200px] mx-auto py-5 top-0 sticky z-50 backdrop-blur-lg">
            <div className="flex justify-between items-center mx-auto">
                <Link to={'/'}>
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
                    <Link to='/signIn' className="self-center px-8 py-3 rounded bg-green-500 hover:bg-green-700 transition-[0.5s] font-semibold text-white">Sign in</Link>
                    <Link to='/signUp' className="self-center px-8 py-3 font-semibold rounded bg-sky-500 hover:bg-sky-700 transition-[0.5s] text-white">Sign up</Link>
                </div>
                <div className="lg:hidden">
                    <CiMenuFries size={20} />
                </div>
            </div>
        </header>
    )
}

export default Nav
