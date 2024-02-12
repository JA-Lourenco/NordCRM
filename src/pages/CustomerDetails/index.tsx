import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { CornerDownLeft, Link, Save, UserX } from "lucide-react";

const customerFormSchema = z.object({
	fullname: z.string(),
	personType: z.string(),
	cpfcnpj: z.string(),
	phone: z.string(),
	email: z.string(),
	birthDate: z.date(),
});

type CustomerType = z.infer<typeof customerFormSchema>;

export function CustomerDetails() {
	const form = useForm<CustomerType>();
	const { register, handleSubmit } = form;

	function submit(data: CustomerType) {
		console.log("customer", data);
	}

	function RemoveModalFooter() {
		return (
			<div className="flex items-center justify-between mt-10">
				<DialogClose className="h-10 flex items-center justify-center">
					<CornerDownLeft className="mr-2" />
					Cancelar
				</DialogClose>

				<Button className="h-10 col-span-1 bg-red-500 dark:text-white hover:dark:text-black">
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
					<Label htmlFor="fullname">Nome Completo</Label>
					<Input id="fullname" type="text" {...register("fullname")} />
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
					<Label htmlFor="phone">CPF/CNPJ</Label>
					<Input id="cpfcnpj" type="text" {...register("cpfcnpj")} />
				</div>

				<div className="col-span-1">
					<Label htmlFor="email">Data de Nascimento</Label>
					<Input id="birthDate" type="date" {...register("birthDate")} />
				</div>

				<div className="col-span-1" />

				<div className="col-span-1">
					<Label htmlFor="phone">Telefone</Label>
					<Input id="phone" type="text" {...register("phone")} />
				</div>

				<div className="col-span-1">
					<Label htmlFor="email">E-mail</Label>
					<Input id="email" type="text" {...register("email")} />
				</div>

				<Modal
					title="ATENÇÃO"
					content="Deseja realmente remover este registro?"
					footer={<RemoveModalFooter />}
				>
					<Button
						type="button"
						className="h-10 mt-5 col-span-1 bg-red-500 dark:text-white hover:dark:text-black"
					>
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
