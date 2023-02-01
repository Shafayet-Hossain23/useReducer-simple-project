import { createBrowserRouter } from "react-router-dom";
import ProductCard from "../Card/ProductCard";
import Cart from "../Cart/Cart";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import TopRated from "../TopRated/TopRated";
import Wishlist from "../Wishlist/Wishlist";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/topRated',
                element: <TopRated></TopRated>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            },
            {
                path: '/wishlist',
                element: <Wishlist></Wishlist>
            }

        ]
    }
])