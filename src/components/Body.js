import Login from "./Login"
import Browse from "./Browse"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const Body = () => {
    const appRoute = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/browse",
            element: <Browse />,
        },

    ])
    return (
        <RouterProvider router={appRoute} />
    )
}

export default Body