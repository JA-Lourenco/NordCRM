import { createBrowserRouter } from "react-router-dom";

import { Login } from "@/pages/Login";
import { Home } from "@/pages/Home";
import { Panel } from "@/pages/Panel";
import { Customer } from "@/pages/Customer";
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
		path: "/customer",
		element: <Layout pageName="CLIENTES" />,
		children: [
			{
				path: "/customer",
				element: <Customer />,
			},
		],
	},
	{
		path: "/",
		element: <Login />,
		errorElement: <ErrorPage />,
	},
]);
