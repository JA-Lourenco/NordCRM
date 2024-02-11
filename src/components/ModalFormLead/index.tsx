import { Button } from "../ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { LeadProps } from "@/pages/LeadsPanel";
import { Check, Lightbulb, Save } from "lucide-react";

interface ModalFormLeadProps {
	children: React.ReactNode;
	lead: LeadProps;
}

const leadFormSchema = z.object({
	id: z.string(),
	customer: z.string(),
	cpfcnpj: z.string(),
	phone: z.string(),
	email: z.string(),
	product: z.string(),
	category: z.string(),
	owner: z.string(),
});

type LeadFormType = z.infer<typeof leadFormSchema>;

export function ModalFormLead({ children, lead }: ModalFormLeadProps) {
	const form = useForm<LeadFormType>();
	const { register, handleSubmit } = form;

	const entryDate = lead.createdAt.toLocaleDateString("pt-Br", {
		dateStyle: "short",
	});

	function submit(data: LeadFormType) {
		console.log("daaaaaaata --->", data);
	}

	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>

			<DialogContent className="">
				<section className="flex items-center justify-between">
					<div>
						<DialogTitle>#{lead.id}</DialogTitle>
						<DialogDescription>{lead.owner}</DialogDescription>
					</div>

					<div className="">
						<Label htmlFor="createdAt">Data Entrada</Label>
						<Input id="createdAt" type="text" value={entryDate} disabled />
					</div>
				</section>

				<form
					onSubmit={handleSubmit(submit)}
					className="grid grid-cols-3 grid-rows-3 gap-3"
				>
					<div className="col-span-3">
						<Label htmlFor="customer">Cliente</Label>
						<Input
							id="customer"
							type="text"
							defaultValue={lead.customer}
							{...register("customer")}
						/>
					</div>

					<div className="col-span-2">
						<Label htmlFor="phone">CPF/CNPJ</Label>
						<Input
							id="cpfcnpj"
							type="text"
							defaultValue={lead.cpfcnpj}
							{...register("cpfcnpj")}
						/>
					</div>

					<div className="col-span-1">
						<Label htmlFor="phone">Telefone</Label>
						<Input
							id="phone"
							type="text"
							defaultValue={lead.phone}
							{...register("phone")}
						/>
					</div>

					<div className="col-span-3">
						<Label htmlFor="email">E-mail</Label>
						<Input
							id="email"
							type="text"
							defaultValue={lead.email}
							{...register("email")}
						/>
					</div>

					<div className="col-span-2">
						<Label htmlFor="product">Produto</Label>
						<Input
							id="product"
							type="text"
							defaultValue={lead.product}
							{...register("product")}
						/>
					</div>

					<div className="col-span-1">
						<Label htmlFor="category">Categoria</Label>
						<Input
							id="category"
							type="text"
							defaultValue={lead.category}
							{...register("category")}
						/>
					</div>

					<Button type="submit" className="col-span-3">
						<Save className="mr-2" />
						Salvar
					</Button>
				</form>

				<hr />

				<DialogFooter className="flex flex-col gap-3">
					<Button className="h-10 bg-green-500">
						<Lightbulb className="mr-2" /> Negociação
					</Button>
					<Button className="h-10 bg-blue-500">
						<Check className="mr-2" /> Finalizado
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
