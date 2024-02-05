import { Button } from "@/components/ui/button";
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
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

import { Plus } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

export function Panel() {
	const panels = [
		{
			id: "PR1",
			name: "Painel Ruby",
		},
		{ id: "PA1", name: "Painel Ametista" },
		{ id: "PS1", name: "Painel Safira" },
		{ id: "PE1", name: "Painel Esmeralda" },
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
							<SelectItem value={id} key={id}>
								{name}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
		);
	}

	return (
		<>
			<div className="flex items-center justify-between">
				<Dialog>
					<DialogTrigger asChild>
						<Button>
							<Plus /> Adicionar
						</Button>
					</DialogTrigger>

					<DialogContent>
						<DialogTitle>Nova Lead</DialogTitle>
					</DialogContent>
				</Dialog>

				<PanelSelect />
			</div>

			<section className="h-[700px] flex items-start justify-center gap-x-52 mt-16">
				<section className="h-full">
					<h3 className="text-3xl text-center p-3 text-white bg-slate-800 rounded-t-md border-2 border-yellow-500">
						Qualificação
					</h3>

					<ScrollArea className="h-full w-96 p-5 border-2 border-yellow-500 border-t-0 rounded-b-md">
						{panels.map(({ id, name }) => (
							<div key={id}>{name}</div>
						))}
						{panels.map(({ id, name }) => (
							<div key={id}>{name}</div>
						))}
						{panels.map(({ id, name }) => (
							<div key={id}>{name}</div>
						))}
						{panels.map(({ id, name }) => (
							<div key={id}>{name}</div>
						))}
						{panels.map(({ id, name }) => (
							<div key={id}>{name}</div>
						))}
						{panels.map(({ id, name }) => (
							<div key={id}>{name}</div>
						))}
						{panels.map(({ id, name }) => (
							<div key={id}>{name}</div>
						))}
						{panels.map(({ id, name }) => (
							<div key={id}>{name}</div>
						))}
						{panels.map(({ id, name }) => (
							<div key={id}>{name}</div>
						))}
						{panels.map(({ id, name }) => (
							<div key={id}>{name}</div>
						))}
						{panels.map(({ id, name }) => (
							<div key={id}>{name}</div>
						))}
						{panels.map(({ id, name }) => (
							<div key={id}>{name}</div>
						))}
						{panels.map(({ id, name }) => (
							<div key={id}>{name}</div>
						))}
						{panels.map(({ id, name }) => (
							<div key={id}>{name}</div>
						))}
						{panels.map(({ id, name }) => (
							<div key={id}>{name}</div>
						))}
					</ScrollArea>
				</section>

				<section className="h-full">
					<h3 className="text-3xl text-center p-3 text-white bg-slate-800 rounded-t-md border-2 border-green-500">
						Negociação
					</h3>

					<ScrollArea className="h-full w-96 p-5 border-2 border-green-500 border-t-0 rounded-b-md">
						{panels.map(({ id, name }) => (
							<div key={id}>{name}</div>
						))}
						{panels.map(({ id, name }) => (
							<div key={id}>{name}</div>
						))}
						{panels.map(({ id, name }) => (
							<div key={id}>{name}</div>
						))}
						{panels.map(({ id, name }) => (
							<div key={id}>{name}</div>
						))}
						{panels.map(({ id, name }) => (
							<div key={id}>{name}</div>
						))}
						{panels.map(({ id, name }) => (
							<div key={id}>{name}</div>
						))}
						{panels.map(({ id, name }) => (
							<div key={id}>{name}</div>
						))}
						{panels.map(({ id, name }) => (
							<div key={id}>{name}</div>
						))}
						{panels.map(({ id, name }) => (
							<div key={id}>{name}</div>
						))}
						{panels.map(({ id, name }) => (
							<div key={id}>{name}</div>
						))}
						{panels.map(({ id, name }) => (
							<div key={id}>{name}</div>
						))}
						{panels.map(({ id, name }) => (
							<div key={id}>{name}</div>
						))}
						{panels.map(({ id, name }) => (
							<div key={id}>{name}</div>
						))}
						{panels.map(({ id, name }) => (
							<div key={id}>{name}</div>
						))}
						{panels.map(({ id, name }) => (
							<div key={id}>{name}</div>
						))}
					</ScrollArea>
				</section>

				<section className="h-full">
					<h3 className="text-3xl text-center p-3 text-white bg-slate-800 rounded-t-md border-2 border-blue-500">
						Finalizado
					</h3>

					<ScrollArea className="h-full w-96 p-5 border-2 border-blue-500 border-t-0 rounded-b-md">
						{panels.map(({ id, name }) => (
							<div key={id}>{name}</div>
						))}
						{panels.map(({ id, name }) => (
							<div key={id}>{name}</div>
						))}
						{panels.map(({ id, name }) => (
							<div key={id}>{name}</div>
						))}
						{panels.map(({ id, name }) => (
							<div key={id}>{name}</div>
						))}
						{panels.map(({ id, name }) => (
							<div key={id}>{name}</div>
						))}
						{panels.map(({ id, name }) => (
							<div key={id}>{name}</div>
						))}
						{panels.map(({ id, name }) => (
							<div key={id}>{name}</div>
						))}
						{panels.map(({ id, name }) => (
							<div key={id}>{name}</div>
						))}
						{panels.map(({ id, name }) => (
							<div key={id}>{name}</div>
						))}
						{panels.map(({ id, name }) => (
							<div key={id}>{name}</div>
						))}
						{panels.map(({ id, name }) => (
							<div key={id}>{name}</div>
						))}
						{panels.map(({ id, name }) => (
							<div key={id}>{name}</div>
						))}
						{panels.map(({ id, name }) => (
							<div key={id}>{name}</div>
						))}
						{panels.map(({ id, name }) => (
							<div key={id}>{name}</div>
						))}
						{panels.map(({ id, name }) => (
							<div key={id}>{name}</div>
						))}
					</ScrollArea>
				</section>
			</section>
		</>
	);
}
