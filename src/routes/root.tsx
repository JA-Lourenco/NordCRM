import { createBrowserRouter } from "react-router-dom";

import { Login } from "@/pages/Login";
import { Home } from "@/pages/Home";
import { Panel } from "@/pages/Panel";
import { Customer } from "@/pages/Customer";
import { Product } from "@/pages/Product";
import { Team } from "@/pages/Team";
import { ErrorPage } from "@/pages/ErrorPage";

import { Layout } from "@/layout";
import { User } from "@/pages/User";

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
    path: "/product",
    element: <Layout pageName="PRODUTOS" />,
    children: [
      {
        path: "/product",
        element: <Product />,
      },
    ],
  },
  {
    path: "/team",
    element: <Layout pageName="Equipe" />,
    children: [
      {
        path: "/team",
        element: <Team />,
      },
    ],
  },
  {
    path: "/user",
    element: <Layout pageName="USUÁRIOS" />,
    children: [
      {
        path: "/user",
        element: <User />,
      },
    ],
  },
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
]);
