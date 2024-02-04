import { createBrowserRouter } from "react-router-dom";

import { Login } from "@/pages/Login";
import { ErrorPage } from "@/pages/ErrorPage";
import { Home } from "@/pages/Home";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/home",
		element: <Home />,
		errorElement: <ErrorPage />,
	},
]);
