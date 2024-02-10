import { createBrowserRouter } from "react-router-dom";

import { Login } from "@/pages/Login";
import { Home } from "@/pages/Home";
import { Panel } from "@/pages/Panel";
import { Customers } from "@/pages/Customers";
import { Products } from "@/pages/Products";
import { Teams } from "@/pages/Teams";
import { Users } from "@/pages/Users";
import { CustomerDetails } from "@/pages/CustomerDetails";
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
		path: "/customers",
		element: <Layout pageName="CLIENTES" />,
		children: [
			{
				index: true,
				path: "/customers",
				element: <Customers />,
			},
			{
				path: "/customers/:id",
				element: <CustomerDetails />,
			},
		],
	},
	{
		path: "/products",
		element: <Layout pageName="PRODUTOS" />,
		children: [
			{
				index: true,
				path: "/products",
				element: <Products />,
			},
			{
				path: "/products/:id",
				element: <h1>TESTE PRODUTOS</h1>,
			},
		],
	},
	{
		path: "/teams",
		element: <Layout pageName="EQUIPE" />,
		children: [
			{
				index: true,
				path: "/teams",
				element: <Teams />,
			},
			{
				path: "/teams/:id",
				element: <h1>TESTE EQUIPE</h1>,
			},
		],
	},
	{
		path: "/users",
		element: <Layout pageName="USUÁRIOS" />,
		children: [
			{
				index: true,
				path: "/users",
				element: <Users />,
			},
			{
				path: "/users/:id",
				element: <h1>TESTE USUÁRIOS</h1>,
			},
		],
	},
	{
		path: "/",
		element: <Login />,
		errorElement: <ErrorPage />,
	},
]);
