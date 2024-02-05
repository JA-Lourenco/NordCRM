import { createBrowserRouter } from "react-router-dom";

import { Login } from "@/pages/Login";
import { Home } from "@/pages/Home";
import { Panel } from "@/pages/Panel";
import { ErrorPage } from "@/pages/ErrorPage";

import { Layout } from "@/layout";

export const router = createBrowserRouter([
	{
		path: "/home",
		element: <Layout pageName="INÍCIO" />,
		children: [
			{
				path: "/home",
				element: <Home />,
			},
		],
	},
	{
		path: "/panel",
		element: <Layout pageName="PAINEL DE LEADS" />,
		children: [
			{
				path: "/panel",
				element: <Panel />,
			},
		],
	},
	{
		path: "/",
		element: <Login />,
		errorElement: <ErrorPage />,
	},
]);
