import { createBrowserRouter } from "react-router-dom";

import { Login } from "@/pages/Login";
import { Home } from "@/pages/Home";
import { ErrorPage } from "@/pages/ErrorPage";

import { Layout } from "@/layout";

export const router = createBrowserRouter([
	{
		path: "/home",
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/home",
				element: <Home />,
			},
		],
	},
	{
		path: "/",
		element: <Login />,
	},
]);
