import { Button } from "../ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from "@/components/ui/form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { LeadProps } from "@/pages/LeadsPanel";
import { Check, Lightbulb, Save } from "lucide-react";
import { useState } from "react";

interface ModalFormLeadProps {
	children: React.ReactNode;
	lead?: LeadProps;
	create?: boolean;
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

export function ModalFormLead({ children, lead, create }: ModalFormLeadProps) {
	const [customers, setCustomers] = useState([
		{
			id: "5",
			customer: "Emma Wilson",
			cpfcnpj: "999.888.777-66",
			phone: "(555) 777-7777",
			email: "emma.wilson@example.com",
		},
		{
			id: "6",
			customer: "Tech Solutions Inc.",
			cpfcnpj: "12.345.678/0001-99",
			phone: "(555) 123-4567",
			email: "info@techsolutions.com",
		},
		{
			id: "7",
			customer: "Smith Enterprises",
			cpfcnpj: "98.765.432/0001-99",
			phone: "(555) 987-6543",
			email: "contact@smithenterprises.com",
		},
		{
			id: "8",
			customer: "Johnson & Co.",
			cpfcnpj: "11.222.333/0001-99",
			phone: "(555) 222-3333",
			email: "info@johnsonandco.com",
		},
		{
			id: "9",
			customer: "Brown Industries",
			cpfcnpj: "55.666.777/0001-99",
			phone: "(555) 666-7777",
			email: "info@brownindustries.com",
		},
		{
			id: "10",
			customer: "Wilson Corp.",
			cpfcnpj: "99.888.777/0001-99",
			phone: "(555) 888-9999",
			email: "contact@wilsoncorp.com",
		},
	]);
	const [products, setProducts] = useState([
		{ id: "1", name: "Product A", category: "Category 1" },
		{ id: "2", name: "Product B", category: "Category 2" },
		{ id: "3", name: "Product C", category: "Category 1" },
		{ id: "4", name: "Product D", category: "Category 3" },
		{ id: "5", name: "Product E", category: "Category 2" },
	]);

	const form = useForm<LeadFormType>();
	const { register, handleSubmit } = form;

	const entryDate = lead?.createdAt.toLocaleDateString("pt-Br", {
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
						<DialogTitle>
							{lead?.id ? "# " + lead?.id : "Nova Lead"}
						</DialogTitle>
						<DialogDescription>{lead?.owner}</DialogDescription>
					</div>

					<div className="">
						<Label htmlFor="createdAt">Data Entrada</Label>
						<Input id="createdAt" type="text" value={entryDate} disabled />
					</div>
				</section>
				<Form {...form}>
					<form
						onSubmit={handleSubmit(submit)}
						className="grid grid-cols-3 grid-rows-3 gap-3"
					>
						{create ? (
							<div className="col-span-3">
								<FormField
									control={form.control}
									name="customer"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Cliente</FormLabel>
											<Select
												onValueChange={field.onChange}
												defaultValue={field.value}
											>
												<FormControl>
													<SelectTrigger>
														<SelectValue
															placeholder={"Selecione"}
															defaultValue={lead?.customer}
														/>
													</SelectTrigger>
												</FormControl>

												<SelectContent>
													{customers.map(({ id, customer }) => (
														<SelectItem key={id} value={customer}>
															{customer}
														</SelectItem>
													))}
												</SelectContent>
											</Select>
										</FormItem>
									)}
								/>
							</div>
						) : (
							<div className="col-span-2">
								<Label htmlFor="customer">CPF/CNPJ</Label>
								<Input
									id="customer"
									type="text"
									defaultValue={lead?.customer}
									{...register("customer")}
									readOnly
								/>
							</div>
						)}

						<div className="col-span-2">
							<Label htmlFor="cpfcnpj">CPF/CNPJ</Label>
							<Input
								id="cpfcnpj"
								type="text"
								value={lead?.cpfcnpj}
								{...register("cpfcnpj")}
								readOnly
							/>
						</div>

						<div className="col-span-1">
							<Label htmlFor="phone">Telefone</Label>
							<Input
								id="phone"
								type="text"
								defaultValue={lead?.phone}
								{...register("phone")}
							/>
						</div>

						<div className="col-span-3">
							<Label htmlFor="email">E-mail</Label>
							<Input
								id="email"
								type="text"
								defaultValue={lead?.email}
								{...register("email")}
							/>
						</div>

						{create ? (
							<div className="col-span-2">
								<FormField
									control={form.control}
									name="product"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Produto</FormLabel>
											<Select
												onValueChange={field.onChange}
												defaultValue={field.value}
											>
												<FormControl>
													<SelectTrigger>
														<SelectValue
															placeholder={
																lead?.product ? lead.product : "Selecione"
															}
														/>
													</SelectTrigger>
												</FormControl>

												<SelectContent>
													{products.map(({ id, name }) => (
														<SelectItem key={id} value={name}>
															{name}
														</SelectItem>
													))}
												</SelectContent>
											</Select>
										</FormItem>
									)}
								/>
							</div>
						) : (
							<div className="col-span-2">
								<Label htmlFor="product">Produto</Label>
								<Input
									id="product"
									type="text"
									defaultValue={lead?.product}
									{...register("product")}
									readOnly
								/>
							</div>
						)}

						<div className="col-span-1">
							<Label htmlFor="category">Categoria</Label>
							<Input
								id="category"
								type="text"
								defaultValue={lead?.category}
								{...register("category")}
							/>
						</div>

						<Button type="submit" className="col-span-3">
							<Save className="mr-2" />
							Salvar
						</Button>
					</form>
				</Form>

				<Separator />

				{!create && (
					<DialogFooter className="flex flex-col gap-3">
						<Button className="h-10 bg-green-500">
							<Lightbulb className="mr-2" /> Negociação
						</Button>
						<Button className="h-10 bg-blue-500">
							<Check className="mr-2" /> Finalizado
						</Button>
					</DialogFooter>
				)}
			</DialogContent>
		</Dialog>
	);
}
