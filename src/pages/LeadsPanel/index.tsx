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
import { ModalForm } from "@/components/ModalForm";

import { ExternalLink, Plus, Smartphone, User } from "lucide-react";

export function LeadsPanel() {
	const leads = [
		{
			idLead: "#3480",
			client: "Joel Santos Pereira",
			phone: "62 994399439",
			owner: "Victor Ramos",
		},
		{
			idLead: "#189",
			client: "Joana Carvalho",
			phone: "62 998129812",
			owner: "Ricardo Oliveira",
		},
		{
			idLead: "#912",
			client: "Múltipla Transportes",
			phone: "62 998709870",
			owner: "Hadryan Silva",
		},
		{
			idLead: "#45",
			client: "FA Distribuidora",
			phone: "62 990349034",
			owner: "Daniel Miranda",
		},
	];

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

	function LeadGenerator() {
		return leads.map(({ idLead, client, phone, owner }) => (
			<Card className="mb-5" key={idLead}>
				<CardHeader className="relative">
					<CardTitle>{idLead}</CardTitle>
					<CardDescription>{owner}</CardDescription>

					<ModalForm
						title={idLead}
						description={owner}
						client={client}
						phone={phone}
					>
						<ExternalLink className="absolute top-5 right-5 hover:cursor-pointer" />
					</ModalForm>
				</CardHeader>

				<CardContent>
					<p className="flex items-center gap-2">
						<User /> {client}
					</p>
				</CardContent>

				<CardFooter>
					<p className="flex items-center gap-2">
						<Smartphone /> {phone}
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
						<LeadGenerator />
					</ScrollArea>
				</div>

				<div className="h-[95%]">
					<h3 className="text-3xl text-center p-3 text-white bg-slate-800 rounded-t-md border-2 border-green-500">
						Negociação
					</h3>

					<ScrollArea className="h-full w-96 p-5 border-2 border-green-500 border-t-0 rounded-b-md">
						<LeadGenerator />
					</ScrollArea>
				</div>

				<div className="h-[95%]">
					<h3 className="text-3xl text-center p-3 text-white bg-slate-800 rounded-t-md border-2 border-blue-500">
						Finalizado
					</h3>

					<ScrollArea className="h-full w-96 p-5 border-2 border-blue-500 border-t-0 rounded-b-md">
						<LeadGenerator />
					</ScrollArea>
				</div>
			</section>
		</>
	);
}
