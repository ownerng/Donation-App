import { createBrowserRouter, Navigate } from "react-router";
import  ShowCounter  from "../pages/Counter/Counter";
import  DataCounter  from "../pages/DataCounter/DataCounter";


export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/show-counter" />,
    },
    {
        path: "/show-counter",
        element: <ShowCounter />
    },
    {
        path: "/data-counter",
        element: <DataCounter /> 
    }
]);