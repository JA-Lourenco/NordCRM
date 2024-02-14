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
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { CornerDownLeft, Save, UserX } from "lucide-react";

const userFormSchema = z.object({
	username: z.string(),
	email: z.string(),
	role: z.string(),
	password: z.string(),
	confirm_pwd: z.string(),
});

type UserType = z.infer<typeof userFormSchema>;

export function UserDetails() {
	const [user, setUser] = useState({
		id: 1,
		name: "Leanne Graham",
		username: "Bret",
		email: "sincere@april.biz",
	});
	const [roles, setRoles] = useState([
		{
			id: "1",
			name: "Administrador",
		},
		{
			id: "2",
			name: "Regular",
		},
	]);

	const form = useForm<UserType>();
	const { register, handleSubmit } = form;

	function submit(data: UserType) {
		console.log("product", data);
	}

	function RemoveModalFooter() {
		return (
			<div className="flex items-center justify-between mt-10">
				<DialogClose className="h-10 flex items-center justify-center">
					<CornerDownLeft className="mr-2" />
					Cancelar
				</DialogClose>

				<Button variant="destructive" className="h-10 col-span-1">
					<UserX className="mr-2" />
					Remover
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
				<div className="col-span-1">
					<Label htmlFor="name">Usuário</Label>
					<Input id="name" type="text" {...register("username")} />
				</div>

				<FormField
					control={form.control}
					name="role"
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
									{roles.map(({ id, name }) => (
										<SelectItem key={id} value={name}>
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
					<Input id="password" {...register("password")} />
				</div>

				<div className="col-span-1">
					<Label htmlFor="confirm_pwd">Confirmar Senha</Label>
					<Input id="confirm_pwd" {...register("confirm_pwd")} />
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
