import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Modal } from "@/components/Modal";
import { DialogClose } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
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

import { api } from "@/services/api";
import { useParams } from "react-router-dom";
import { AxiosError, isAxiosError } from "axios";

interface CustomerProps {}

const customerFormSchema = z.object({
	fullName: z.string(),
	personType: z.string(),
	cpfCnpj: z.string(),
	phone: z.string(),
	email: z.string(),
	address: z.object({
		zipCode: z.string(),
		street: z.string(),
		city: z.string(),
		state: z.string(),
		district: z.string(),
		complement: z.string(),
	}),
});

type CustomerType = z.infer<typeof customerFormSchema>;

export function CustomerDetails() {
	const [customer, setCustomer] = useState({} as CustomerProps);

	const form = useForm<CustomerType>();
	const { register, handleSubmit } = form;
	const { id } = useParams();

	async function getCustomer() {
		try {
			const { data } = await api.get(`/customer/${id}`);
		} catch (e: any | AxiosError) {
			if (isAxiosError(e)) {
				console.log("getCustomer Error: ", e.message);
				alert("Erro ao buscar dados do Cliente!");
			}
		}
	}

	async function postOrPutCustomer(data: CustomerType) {
		try {
			console.log("post", data);
			let response;

			if (id === "create") {
				response = await api.post("/customer", data);
			} else {
				response = await api.put("/customer", data);
			}
			console.log(response.data);
		} catch (e: any | AxiosError) {
			console.log("postOrPutCustomer Error: ", e.message);
			alert("Erro ao registrar Cliente!");
		}
	}

	async function deleteCustomer() {
		try {
			const { data } = await api.delete(`/customer/${id}`);
			console.log("data deleted", data);
		} catch (e) {
			console.log("deleteCustomer Error: ", e);
			alert("Erro ao realizar remoção de Cliente!");
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
					onClick={() => deleteCustomer()}
				>
					<UserX className="mr-2" />
					Remover
				</Button>
			</div>
		);
	}

	useEffect(() => {
		if (id !== "create") getCustomer();
	}, []);

	return (
		<Form {...form}>
			<form
				onSubmit={handleSubmit(postOrPutCustomer)}
				className="grid grid-cols-2 grid-rows-3 gap-5 w-2/6"
			>
				<div className="col-span-2">
					<Label htmlFor="fullName">Nome Completo</Label>
					<Input id="fullName" type="text" {...register("fullName")} />
				</div>

				<div className="col-span-1">
					<FormField
						control={form.control}
						name="personType"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Tipo Pessoa</FormLabel>
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
										<SelectItem value="PF">Pessoa Física</SelectItem>
										<SelectItem value="PJ">Pessoa Jurídica</SelectItem>
									</SelectContent>
								</Select>
							</FormItem>
						)}
					/>
				</div>

				<div className="col-span-1">
					<Label htmlFor="cpfCnpj">CPF/CNPJ</Label>
					<Input id="cpfCnpj" type="text" {...register("cpfCnpj")} />
				</div>

				<div className="col-span-1">
					<Label htmlFor="phone">Telefone</Label>
					<Input id="phone" type="text" {...register("phone")} />
				</div>

				<div className="col-span-1">
					<Label htmlFor="email">E-mail</Label>
					<Input id="email" type="text" {...register("email")} />
				</div>

				<Separator className="col-span-2" />

				<div className="col-span-1">
					<Label htmlFor="zipCode">CEP</Label>
					<Input id="zipCode" type="text" {...register("address.zipCode")} />
				</div>

				<div className="col-span-1">
					<Label htmlFor="city">Cidade</Label>
					<Input id="city" type="text" {...register("address.city")} />
				</div>

				<div className="col-span-1">
					<Label htmlFor="street">Rua</Label>
					<Input id="street" type="text" {...register("address.street")} />
				</div>

				<div className="col-span-1">
					<Label htmlFor="state">Estado</Label>
					<Input id="state" type="text" {...register("address.state")} />
				</div>

				<div className="col-span-1">
					<Label htmlFor="district">Bairro</Label>
					<Input id="district" type="text" {...register("address.district")} />
				</div>

				<div className="col-span-1">
					<Label htmlFor="complement">Complemento</Label>
					<Input
						id="complement"
						type="text"
						{...register("address.complement")}
					/>
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
						<UserX className="mr-2" />
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
