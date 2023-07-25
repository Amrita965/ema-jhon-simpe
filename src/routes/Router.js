import React, { Children } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Shop from '../components/Shop/Shop';
import Orders from '../components/Orders/Orders';
import { productsAndCartLoader } from '../loaders/productsAndCartLoader';

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main />,
            children:  [
                {
                    path: '/',
                    element: <Shop />,
                    loader: async () => fetch('products.json'),
                },
                {
                    path: '/orders',
                    element: <Orders />,
                    loader: productsAndCartLoader,
                },
            ]
        },
        {

        }
    ]);
    return <RouterProvider router={router}/>
};

export default Router;