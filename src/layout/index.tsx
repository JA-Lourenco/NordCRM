import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Separator } from "@/components/ui/separator";

import { Outlet, Link, useNavigate } from "react-router-dom";

import {
	AlignStartHorizontal,
	ArrowLeft,
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

	const navigate = useNavigate();

	const menuItems = [
		{ name: "Início", icon: <Home />, path: "/home" },
		{
			name: "Painel de Leads",
			icon: <AlignStartHorizontal />,
			path: "/leadspanel",
		},
		{ name: "Clientes", icon: <Users />, path: "/customers" },
		{ name: "Produtos", icon: <Box />, path: "/products" },
		{ name: "Equipes", icon: <Handshake />, path: "/teams" },
		{ name: "Painéis", icon: <Columns3 />, path: "/panels" },
		{ name: "Usuários", icon: <UserCog />, path: "/users" },
		{ name: "Sair", icon: <LogOut />, path: "/" },
	];

	const username = localStorage.getItem("username");

	function handleSidebar() {
		setIsSidebarOpen((state) => !state);
	}

	function Sidebar() {
		return (
			<aside
				className={`border-r-2 px-2 flex flex-col gap-2 relative ${
					isSidebarOpen ? "w-52" : "w-22"
				}`}
			>
				<h2 className="text-2xl font-bold text-center my-10">
					{isSidebarOpen ? "Nord CRM" : "NR"}
				</h2>

				{menuItems.map(({ name, icon, path }, index) => (
					<Button variant="ghost">
						<Link
							to={path}
							key={index}
							className="flex items-center gap-2 w-full"
						>
							{icon}
							{isSidebarOpen && name}
						</Link>
					</Button>
				))}

				<div className="absolute bottom-5 right-2">
					<Button variant="ghost" size={"sm"} onClick={() => handleSidebar()}>
						{isSidebarOpen ? <ArrowLeftToLine /> : <ArrowRightToLine />}
					</Button>
				</div>
			</aside>
		);
	}

	return (
		<div className="h-dvh flex gap-x-10">
			<Sidebar />

			<main className="w-full pt-10 pr-10">
				<div className="w-full flex items-center justify-between">
					<div className="flex items-center gap-5">
						<Button
							variant="ghost"
							className="w-full"
							onClick={() => navigate(-1)}
						>
							<ArrowLeft />
						</Button>
						<h1 className="text-3xl font-bold">{pageName.toUpperCase()}</h1>
					</div>

					<div className="flex items-center gap-5">
						<h3>Bem Vindo (a), {username ? username.toUpperCase() : "NR"}!</h3>

						<Avatar>
							<AvatarImage src="" />
							<AvatarFallback>
								{username ? username.substring(0, 2).toUpperCase() : "NR"}
							</AvatarFallback>
						</Avatar>

						<ModeToggle />
					</div>
				</div>

				<div className="pt-10">
					<Separator className="mb-5" />

					<Outlet />
				</div>
			</main>
		</div>
	);
}
