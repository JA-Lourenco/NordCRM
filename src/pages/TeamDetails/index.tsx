import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Modal } from "@/components/Modal";
import { DialogClose } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { api } from "@/services/api";
import { UsersProps } from "@/pages/Users";

import {
	CornerDownLeft,
	Save,
	Search,
	UserMinus,
	UserPlus,
	X,
} from "lucide-react";

const teamFormSchema = z.object({
	name: z.string(),
});

type TeamType = z.infer<typeof teamFormSchema>;

export function TeamDetails() {
	const [users, setUsers] = useState<UsersProps[]>([]);
	const [members, setMembers] = useState([]);

	const form = useForm<TeamType>();
	const { register, handleSubmit } = form;

	function submit(data: TeamType) {
		console.log("product", data);
	}

	async function getUsers() {
		try {
			const { data } = await api.get<UsersProps[]>("/user");

			setUsers(data);
		} catch (e) {
			console.log("getUsers Error: ", e);
		}
	}

	async function getMembers() {
		try {
			const { data } = await api.get(
				"https://jsonplaceholder.typicode.com/users"
			);

			const newData = data.map((item: any) => {
				return { ...item, checked: false };
			});
			setMembers(newData);
		} catch (e) {
			console.log("getMembers Error: ", e);
		}
	}

	function RemoveModalFooter() {
		return (
			<div className="flex items-center justify-between mt-10">
				<DialogClose className="h-10 flex items-center justify-center">
					<CornerDownLeft className="mr-2" />
					Cancelar
				</DialogClose>

				<Button variant="destructive" className="h-10">
					<X className="mr-2" />
					Remover
				</Button>
			</div>
		);
	}

	useEffect(() => {
		getUsers();
		getMembers();
	}, []);

	return (
		<form onSubmit={handleSubmit(submit)} className="w-2/6 flex flex-col gap-5">
			<div className="">
				<Label htmlFor="name">Nome da Equipe</Label>
				<Input id="name" type="text" {...register("name")} />
			</div>

			<h2 className="text-xl -mb-3">Usuários</h2>
			<section className="p-5 border-2 rounded-b-md">
				<div className="flex items-center gap-3">
					<Input
						type="text"
						id="search"
						name="search"
						placeholder="Pesquisar"
					/>

					<Button>
						<Search />
					</Button>
				</div>

				<ScrollArea className="h-52 mt-5">
					{users.map(({ id, username }) => (
						<div
							key={id}
							className="flex items-center justify-between gap-3 mt-5 pr-5"
						>
							<p>{username}</p>
							<Button variant="outline">
								<UserPlus />
							</Button>
						</div>
					))}
				</ScrollArea>
			</section>

			<h2 className="text-xl -mb-3">Membros</h2>
			<section className="p-5 border-2 rounded-b-md">
				<div className="flex items-center gap-3">
					<Input
						type="text"
						id="search"
						name="search"
						placeholder="Pesquisar"
					/>

					<Button>
						<Search />
					</Button>
				</div>

				<ScrollArea className="h-52 mt-5">
					{members.map(({ id, name }) => (
						<div
							key={id}
							className="flex items-center justify-between gap-3 mt-5 pr-5"
						>
							<p>{name}</p>
							<Button variant="outline">
								<UserMinus />
							</Button>
						</div>
					))}
				</ScrollArea>
			</section>

			<section className="flex items items-center justify-between gap-3 mt-5">
				<Modal
					title="ATENÇÃO"
					content="Deseja realmente remover este registro?"
					footer={<RemoveModalFooter />}
				>
					<Button type="button" variant="outline" className="h-10 w-full">
						<X className="mr-2" />
						Remover
					</Button>
				</Modal>

				<Button type="submit" className="h-10 w-full bg-green-500">
					<Save className="mr-2" />
					Salvar
				</Button>
			</section>
		</form>
	);
}
