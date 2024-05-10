'use client';

import { routes } from "@/routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router: any = createBrowserRouter(routes);

const App = () => {
    return <>
        <RouterProvider router={router} />
    </>
}

export default App;