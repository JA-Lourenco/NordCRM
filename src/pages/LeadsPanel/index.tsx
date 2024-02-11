import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { ModalFormLead } from "@/components/ModalFormLead";

import { ExternalLink, Plus, Smartphone, User } from "lucide-react";
import { useState } from "react";

export interface LeadProps {
	id: string;
	customer: string;
	cpfcnpj: string;
	phone: string;
	email: string;
	product: string;
	category: string;
	owner: string;
	createdAt: Date;
}

export function LeadsPanel() {
	const [leads, setLeads] = useState<LeadProps[]>([
		{
			id: "1",
			customer: "John Doe",
			cpfcnpj: "123.456.789-00",
			phone: "(555) 555-5555",
			email: "john.doe@example.com",
			product: "Product A",
			category: "Category 1",
			owner: "Owner 1",
			createdAt: new Date(),
		},
		{
			id: "2",
			customer: "Jane Smith",
			cpfcnpj: "987.654.321-00",
			phone: "(555) 123-4567",
			email: "jane.smith@example.com",
			product: "Product B",
			category: "Category 2",
			owner: "Owner 2",
			createdAt: new Date(),
		},
		{
			id: "3",
			customer: "Alice Johnson",
			cpfcnpj: "111.222.333-44",
			phone: "(555) 999-9999",
			email: "alice.johnson@example.com",
			product: "Product C",
			category: "Category 3",
			owner: "Owner 3",
			createdAt: new Date(),
		},
		{
			id: "4",
			customer: "Bob Brown",
			cpfcnpj: "555.666.777-88",
			phone: "(555) 888-8888",
			email: "bob.brown@example.com",
			product: "Product D",
			category: "Category 4",
			owner: "Owner 4",
			createdAt: new Date(),
		},
		{
			id: "5",
			customer: "Emma Wilson",
			cpfcnpj: "999.888.777-66",
			phone: "(555) 777-7777",
			email: "emma.wilson@example.com",
			product: "Product E",
			category: "Category 5",
			owner: "Owner 5",
			createdAt: new Date(),
		},
		{
			id: "6",
			customer: "David Lee",
			cpfcnpj: "444.333.222-11",
			phone: "(555) 666-6666",
			email: "david.lee@example.com",
			product: "Product F",
			category: "Category 6",
			owner: "Owner 6",
			createdAt: new Date(),
		},
		{
			id: "7",
			customer: "Grace Taylor",
			cpfcnpj: "222.333.444-55",
			phone: "(555) 555-4444",
			email: "grace.taylor@example.com",
			product: "Product G",
			category: "Category 7",
			owner: "Owner 7",
			createdAt: new Date(),
		},
		{
			id: "8",
			customer: "Michael Evans",
			cpfcnpj: "777.888.999-00",
			phone: "(555) 444-5555",
			email: "michael.evans@example.com",
			product: "Product H",
			category: "Category 8",
			owner: "Owner 8",
			createdAt: new Date(),
		},
		{
			id: "9",
			customer: "Sarah Brown",
			cpfcnpj: "333.222.111-00",
			phone: "(555) 333-3333",
			email: "sarah.brown@example.com",
			product: "Product I",
			category: "Category 9",
			owner: "Owner 9",
			createdAt: new Date(),
		},
		{
			id: "10",
			customer: "William Clark",
			cpfcnpj: "666.777.888-99",
			phone: "(555) 222-1111",
			email: "william.clark@example.com",
			product: "Product J",
			category: "Category 10",
			owner: "Owner 10",
			createdAt: new Date(),
		},
	]);

	const panels = [
		{ id: 1, name: "Ametista" },
		{ id: 2, name: "Rubi" },
		{ id: 3, name: "Esmeralda" },
		{ id: 4, name: "Safira" },
		{ id: 5, name: "Ônix" },
		{ id: 6, name: "Âmbar" },
	];

	function PanelSelect() {
		return (
			<Select>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Painel" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						{panels.map(({ id, name }) => (
							<SelectItem value={name} key={id}>
								{name}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
		);
	}

	function LeadCard() {
		return leads.map((lead) => (
			<Card className="mb-5" key={lead.id}>
				<CardHeader className="relative">
					<CardTitle>{lead.id}</CardTitle>
					<CardDescription>{lead.owner}</CardDescription>

					<ModalFormLead lead={lead}>
						<ExternalLink className="absolute top-5 right-5 hover:cursor-pointer" />
					</ModalFormLead>
				</CardHeader>

				<CardContent>
					<p className="flex items-center gap-2">
						<User /> {lead.customer}
					</p>
				</CardContent>

				<CardFooter>
					<p className="flex items-center gap-2">
						<Smartphone /> {lead.phone}
					</p>
				</CardFooter>
			</Card>
		));
	}

	return (
		<>
			<section className="flex items-center gap-x-5">
				<Dialog>
					<DialogTrigger asChild>
						<Button>
							<Plus className="mr-2" /> Adicionar
						</Button>
					</DialogTrigger>

					<DialogContent>
						<DialogTitle>Nova Lead</DialogTitle>
					</DialogContent>
				</Dialog>

				<PanelSelect />
			</section>

			<section className="h-[650px] flex items-start justify-start gap-x-10 my-4 py-5">
				<div className="h-[95%]">
					<h3 className="text-3xl text-center p-3 text-white bg-slate-800 rounded-t-md border-2 border-yellow-500">
						Qualificação
					</h3>

					<ScrollArea className="h-full w-96 p-5 border-2 border-yellow-500 border-t-0 rounded-b-md">
						<LeadCard />
					</ScrollArea>
				</div>

				<div className="h-[95%]">
					<h3 className="text-3xl text-center p-3 text-white bg-slate-800 rounded-t-md border-2 border-green-500">
						Negociação
					</h3>

					<ScrollArea className="h-full w-96 p-5 border-2 border-green-500 border-t-0 rounded-b-md">
						<LeadCard />
					</ScrollArea>
				</div>

				<div className="h-[95%]">
					<h3 className="text-3xl text-center p-3 text-white bg-slate-800 rounded-t-md border-2 border-blue-500">
						Finalizado
					</h3>

					<ScrollArea className="h-full w-96 p-5 border-2 border-blue-500 border-t-0 rounded-b-md">
						<LeadCard />
					</ScrollArea>
				</div>
			</section>
		</>
	);
}
