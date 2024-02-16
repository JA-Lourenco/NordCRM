import { useEffect, useState } from "react";

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

import { useForm } from "react-hook-form";
import { z } from "zod";
import { CornerDownLeft, Save, X } from "lucide-react";
import { api } from "@/services/api";
import { AxiosError } from "axios";
import { useParams } from "react-router-dom";

const productFormSchema = z.object({
	name: z.string(),
	supplier: z.string(),
	category: z.string(),
	description: z.string(),
});

type ProductType = z.infer<typeof productFormSchema>;

export function ProductDetails() {
	const [product, setProduct] = useState({});

	const form = useForm<ProductType>();
	const { register, handleSubmit } = form;
	const { id } = useParams();

	async function postProduct(body: ProductType) {
		try {
			console.log("body req user", body);
			const { data } = await api.post<ProductType[]>("/product", body);

			console.log("Produto criado com sucesso!", data);
			form.reset();
		} catch (e: any | AxiosError) {
			console.log("postProduct Error: ", e.message);
			alert("Erro ao criar Produto!");
		}
	}

	async function putProduct(body: ProductType) {
		try {
			const { data } = await api.put<ProductType>(`/product${id}`, body);

			console.log("Produto atualizado com sucesso!", data);
		} catch (e) {
			console.log("putProduct Error: ", e);
			alert("Erro ao atualizar Produto!");
		}
	}

	async function deleteProduct() {
		try {
			const { data } = await api.delete(`/product/${id}`);
			console.log("Produto removido com sucesso!", data);
		} catch (e) {
			console.log("deleteProduct Error: ", e);
			alert("Erro ao remover Produto!");
		}
	}

	async function getProductById() {
		try {
			const { data } = await api.get(`/product/${id}`);
			console.log("Product by id", data);
			setProduct(data);
		} catch (e) {
			console.log("getProductById Error: ", e);
			alert("Erro ao buscar Produto!");
		}
	}

	function RemoveModalFooter() {
		return (
			<div className="flex items-center justify-between mt-10">
				<DialogClose className="h-10 flex items-center justify-center">
					<CornerDownLeft className="mr-2" />
					Cancelar
				</DialogClose>

				<Button
					variant="destructive"
					className="h-10 col-span-1"
					onClick={() => deleteProduct()}
				>
					<X className="mr-2" />
					Remover
				</Button>
			</div>
		);
	}

	useEffect(() => {
		if (id !== "create") {
			getProductById();
		}
	}, []);

	return (
		<Form {...form}>
			<form
				onSubmit={handleSubmit(id === "create" ? postProduct : putProduct)}
				className="grid grid-cols-2 grid-rows-3 gap-5 w-2/6"
			>
				<div className="col-span-2">
					<Label htmlFor="name">Nome do Produto</Label>
					<Input id="name" type="text" {...register("name")} />
				</div>

				<div className="col-span-1">
					<Label htmlFor="category">Categoria</Label>
					<Input id="category" type="text" {...register("category")} />
				</div>

				<div className="col-span-2">
					<Label htmlFor="supplier">Fornecedor</Label>
					<Input id="supplier" type="text" {...register("supplier")} />
				</div>

				<div className="col-span-2">
					<Label htmlFor="description">Descrição</Label>
					<Textarea id="description" {...register("description")} />
				</div>

				<Modal
					title="ATENÇÃO"
					content="Deseja realmente remover este registro?"
					footer={<RemoveModalFooter />}
				>
					<Button
						type="button"
						variant="outline"
						className="h-10 mt-5 col-span-1"
					>
						<X className="mr-2" />
						Remover
					</Button>
				</Modal>

				<Button type="submit" className="h-10 mt-5 col-span-1 bg-green-500">
					<Save className="mr-2" />
					Salvar
				</Button>
			</form>
		</Form>
	);
}
