import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import {routing} from "@/pages";

export const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <div>error</div>,
        children: routing()
    },
])


export const withRouter = () => () => <RouterProvider router={router} />
