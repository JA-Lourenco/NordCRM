import { createBrowserRouter } from "react-router-dom";

import { Login } from "@/pages/Login";
import { Home } from "@/pages/Home";
import { LeadsPanel } from "@/pages/LeadsPanel";
import { Customers } from "@/pages/Customers";
import { Products } from "@/pages/Products";
import { Teams } from "@/pages/Teams";
import { Panels } from "@/pages/Panels";
import { Users } from "@/pages/Users";
import { CustomerDetails } from "@/pages/CustomerDetails";
import { ProductDetails } from "@/pages/ProductDetails";
import { TeamDetails } from "@/pages/TeamDetails";
import { PanelDetails } from "@/pages/PanelDetails";
import { UserDetails } from "@/pages/UserDetails";
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
		path: "/leadspanel",
		element: <Layout pageName="PAINEL DE LEADS" />,
		children: [
			{
				path: "/leadspanel",
				element: <LeadsPanel />,
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
				element: <ProductDetails />,
			},
		],
	},
	{
		path: "/teams",
		element: <Layout pageName="EQUIPES" />,
		children: [
			{
				index: true,
				path: "/teams",
				element: <Teams />,
			},
			{
				path: "/teams/:id",
				element: <TeamDetails />,
			},
		],
	},
	{
		path: "/panels",
		element: <Layout pageName="PAINÉIS" />,
		children: [
			{
				index: true,
				path: "/panels",
				element: <Panels />,
			},
			{
				path: "/panels/:id",
				element: <PanelDetails />,
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
				element: <UserDetails />,
			},
		],
	},
	{
		path: "/",
		element: <Login />,
		errorElement: <ErrorPage />,
	},
]);
