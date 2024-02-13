import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Modal } from "@/components/Modal";
import { DialogClose } from "@/components/ui/dialog";
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

import { useForm } from "react-hook-form";
import { z } from "zod";
import { CornerDownLeft, Save, UserX } from "lucide-react";

const productFormSchema = z.object({
	name: z.string(),
	supplier: z.string(),
	category: z.string(),
	description: z.string(),
});

type ProductType = z.infer<typeof productFormSchema>;

export function ProductDetails() {
	const [products, setProducts] = useState([
		{
			id: "1",
			name: "Lab Equipment A",
			supplier: "Supplier X",
			description: "High precision lab equipment for various experiments.",
			category: "Equipment",
		},
		{
			id: "2",
			name: "Lab Chemical B",
			supplier: "Supplier Y",
			description: "Chemical reagent for laboratory use.",
			category: "Chemical",
		},
		{
			id: "3",
			name: "Lab Glassware C",
			supplier: "Supplier Z",
			description: "Various glassware items for laboratory experiments.",
			category: "Glassware",
		},
	]);
	const form = useForm<ProductType>();
	const { register, handleSubmit } = form;

	function submit(data: ProductType) {
		console.log("product", data);
	}

	function RemoveModalFooter() {
		return (
			<div className="flex items-center justify-between mt-10">
				<DialogClose className="h-10 flex items-center justify-center">
					<CornerDownLeft className="mr-2" />
					Cancelar
				</DialogClose>

				<Button className="h-10 col-span-1">
					<UserX className="mr-2" />
					Confirmar
				</Button>
			</div>
		);
	}

	return (
		<Form {...form}>
			<form
				onSubmit={handleSubmit(submit)}
				className="grid grid-cols-2 grid-rows-3 gap-5 w-2/6"
			>
				<div className="col-span-2">
					<Label htmlFor="name">Nome do Produto</Label>
					<Input id="name" type="text" {...register("name")} />
				</div>

				<div className="col-span-1">
					<FormField
						control={form.control}
						name="category"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Categoria</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Selecione" />
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

				<div className="col-span-2">
					<Label htmlFor="phone">Fornecedor</Label>
					<Input id="supplier" type="text" {...register("supplier")} />
				</div>

				<div className="col-span-2">
					<Label htmlFor="email">Descrição</Label>
					<Textarea id="description" {...register("description")} />
				</div>

				<Modal
					title="ATENÇÃO"
					content="Deseja realmente remover este registro?"
					footer={<RemoveModalFooter />}
				>
					<Button type="button" className="h-10 mt-5 col-span-1">
						<UserX className="mr-2" />
						Remover
					</Button>
				</Modal>

				<Button type="submit" className="h-10 mt-5 col-span-1">
					<Save className="mr-2" />
					Salvar
				</Button>
			</form>
		</Form>
	);
}
