import {createBrowserRouter} from "react-router-dom";
import Root from "../pages/Root.jsx";
import HomePage from "../pages/HomePage.jsx";
import ItemPage from "../pages/ItemPage.jsx";
import UserPage from "../pages/UserPage.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: '/',
                element: <HomePage/>,
                index: true
            },
            {
                path: '/products/:id',
                element: <ItemPage />
            },
            {
                path: '/user',
                element: <UserPage />
            }
        ]
    }
]);

export default router;