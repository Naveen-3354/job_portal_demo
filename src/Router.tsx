import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { Home } from "./pages/Home"
import { ImportJobs } from "./components/popularJobs"
import { ViewJob } from "./components/ViewJobs"
import { AppliedJobd, Apply } from "./components/Apply"

export const Router =()=>{

    const router = createBrowserRouter([
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/register",
            element:<Register />
        },
        {
            path:"/",
            element:<Home/>,
            children:[
                {
                    path:"/",
                    element:<ImportJobs />
                },{
                    path:"/:id",
                    element:<ViewJob />
                }
                ,{
                    path:"/:name/:id",
                    element:<Apply />
                },
                {
                    path:"appliedJobs",
                    element:<AppliedJobd />
                }

            ]
        }
    ])

    return(
        <RouterProvider router={router}/>
    )

}