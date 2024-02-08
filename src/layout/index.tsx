import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/ui/mode-toggle";

import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

import {
	ArrowLeftToLine,
	ArrowRightToLine,
	Box,
	Columns3,
	Handshake,
	Home,
	LogOut,
	UserCog,
	Users,
} from "lucide-react";

interface LayoutProps {
	pageName: string;
}

export function Layout({ pageName }: LayoutProps) {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

	const menuItems = [
		{ name: "Início", icon: <Home />, path: "/home" },
		{ name: "Painel de Leads", icon: <Columns3 />, path: "/panel" },
		{ name: "Clientes", icon: <Users />, path: "/customer" },
		{ name: "Produtos", icon: <Box />, path: "/products" },
		{ name: "Equipe", icon: <Handshake />, path: "/teams" },
		{ name: "Usuários", icon: <UserCog />, path: "/users" },
		{ name: "Sair", icon: <LogOut />, path: "/" },
	];

	function handleSidebar() {
		setIsSidebarOpen((state) => !state);
	}

	function Sidebar() {
		return isSidebarOpen ? (
			<aside className="border-r-2 px-2 flex flex-col gap-2 w-52 relative">
				<h2 className="text-2xl font-bold text-center my-10">Nord CRM</h2>

				{menuItems.map(({ name, icon, path }, index) => (
					<Link to={path} key={index}>
						<Button className="gap-2" variant="ghost">
							{icon}
							{name}
						</Button>
					</Link>
				))}

				<div className="absolute bottom-5 right-2">
					<Button variant="ghost" size={"sm"} onClick={() => handleSidebar()}>
						<ArrowLeftToLine />
					</Button>
				</div>
			</aside>
		) : (
			<aside className="border-r-2 px-2 flex flex-col items-center gap-2 w-15 relative">
				<h2 className="text-2xl font-bold text-center my-10">NR</h2>

				{menuItems.map(({ icon, path }, index) => (
					<Link to={path} key={index}>
						<Button variant="ghost" size={"sm"}>
							{icon}
						</Button>
					</Link>
				))}

				<div className="absolute bottom-5">
					<Button variant="ghost" size={"icon"} onClick={() => handleSidebar()}>
						<ArrowRightToLine />
					</Button>
				</div>
			</aside>
		);
	}

	return (
		<div className="h-dvh flex gap-x-10">
			<Sidebar />

			<main className="w-full pt-10 pr-5">
				<div className="w-full flex items-center justify-between">
					<h1 className="text-3xl font-bold">{pageName.toUpperCase()}</h1>

					<div className="flex items-center gap-5">
						<h3>Bem Vindo (a), Bruna!</h3>

						<Avatar>
							<AvatarImage src="" />
							<AvatarFallback>NO</AvatarFallback>
						</Avatar>

						<ModeToggle />
					</div>
				</div>

				<div className="pt-10">
					<Outlet />
				</div>
			</main>
		</div>
	);
}
