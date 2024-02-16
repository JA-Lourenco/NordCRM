import { useEffect, useState } from "react";

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
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { useParams } from "react-router-dom";
import { api, userApi } from "@/services/api";
import { AxiosError } from "axios";
import { toast } from "sonner";

import { CornerDownLeft, Save, UserX } from "lucide-react";

const userFormSchema = z.object({
	username: z.string(),
	email: z.string(),
	roles: z.string(),
	password: z.string(),
});

type UserType = z.infer<typeof userFormSchema>;

export function UserDetails() {
	const [user, setUser] = useState([]);
	const [roles, setRoles] = useState([
		{
			id: "1",
			name: "Gerente",
			value: "ADMIN",
		},
		{
			id: "2",
			name: "Analista",
			value: "USER",
		},
	]);

	const form = useForm<UserType>();
	const { register, handleSubmit } = form;
	const { id } = useParams();

	console.log(id);

	async function postUser(body: UserType) {
		try {
			console.log("body req user", body);
			const { data } = await userApi.post<UserType>("/user", body);

			console.log("Usuário criado com sucesso!", data);
			form.reset();
		} catch (e: any | AxiosError) {
			console.log("postUser Error: ", e.message);
			toast.error("Erro ao criar Usuário!");
		}
	}

	async function putUser(body: UserType) {
		try {
			const { data } = await api.put<UserType>(`/user${id}`, body);

			console.log("Usuário atualizado com sucesso!", data);
		} catch (e) {
			console.log("putUser Error: ", e);
			toast.error("Erro ao atualizar Usuário!");
		}
	}

	async function deleteUser() {
		try {
			const { data } = await api.delete(`/user/${id}`);
			console.log("Usuário removido com sucesso!", data);
		} catch (e) {
			console.log("deleteUser Error: ", e);
			toast.error("Erro ao remover Usuário!");
		}
	}

	async function getUserById() {
		try {
			const { data } = await api.get(`/user/${id}`);
			console.log("user by id", data);
			setUser(data);
		} catch (e) {
			console.log("getUserById Error: ", e);
			toast.error("Erro ao buscar Usuário!");
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
					onClick={() => deleteUser()}
				>
					<UserX className="mr-2" />
					Remover
				</Button>
			</div>
		);
	}

	useEffect(() => {
		if (id !== "create") {
			getUserById();
		}
	}, []);

	return (
		<Form {...form}>
			<form
				onSubmit={handleSubmit(id === "create" ? postUser : putUser)}
				className="grid grid-cols-2 grid-rows-3 gap-5 w-2/6"
			>
				<div className="col-span-1">
					<Label htmlFor="name">Usuário</Label>
					<Input id="name" type="text" {...register("username")} />
				</div>

				<FormField
					control={form.control}
					name="roles"
					render={({ field }) => (
						<FormItem className="col-span-1">
							<FormLabel>Perfil</FormLabel>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="Selecione" />
									</SelectTrigger>
								</FormControl>

								<SelectContent>
									{roles.map(({ id, name, value }) => (
										<SelectItem key={id} value={value}>
											{name}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</FormItem>
					)}
				/>

				<div className="col-span-1">
					<Label htmlFor="email">E-mail</Label>
					<Input id="email" type="text" {...register("email")} />
				</div>

				<div className="col-span-1"></div>

				<div className="col-span-1">
					<Label htmlFor="password">Senha</Label>
					<Input id="password" type="password" {...register("password")} />
				</div>

				<div className="col-span-1"></div>

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
