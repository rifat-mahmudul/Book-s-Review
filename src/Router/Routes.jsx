import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import ListBooks from "../Pages/ListBooks";
import PagesRead from "../Pages/PagesRead";

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
                path : "/",
                element : <Home></Home>,
            },
            {
                path : "/listBooks",
                element : <ListBooks></ListBooks>,
            },
            {
                path : "/pageRead",
                element : <PagesRead></PagesRead>,
            },
        ]
    },
]);