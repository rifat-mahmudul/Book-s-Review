import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import ListBooks from "../Pages/ListBooks";
import PagesRead from "../Pages/PagesRead";
import BookDetails from "../Components/BookDetails";
import ReadBooks from "../Components/ReadBooks";
import Wishlist from "../Components/Wishlist";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children : [
            {
                path : "/",
                element : <Home></Home>,
            },
            {
                path : "/listBooks",
                element : <ListBooks></ListBooks>,
                children : [
                    {
                        index : true,
                        element : <ReadBooks></ReadBooks>
                    },
                    {
                        path : 'wishlist',
                        element : <Wishlist></Wishlist>,
                    },
                ]
            },
            {
                path : "/pageRead",
                element : <PagesRead></PagesRead>,
            },
            {
                path : "/book/:id",
                element : <BookDetails></BookDetails>,
                loader : () => fetch(`/Data.json`)
            },
        ]
    },
]);