import { useEffect, useState } from "react";

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loading } from "@/components/Loading";

import { useNavigate } from "react-router-dom";
import { api } from "@/services/api";

import { Pencil, Plus, Search } from "lucide-react";

export interface UsersProps {
	id: number;
	username: string;
	email: string;
}

export function Users() {
	const [isLoading, setIsLoading] = useState(false);
	const [users, setUsers] = useState<UsersProps[]>([]);

	const navigate = useNavigate();

	function handleAddUser() {
		navigate("/users/create");
	}

	function handleEditUser(userId: string) {
		navigate(`/users/${userId}`);
	}

	async function getUsers() {
		try {
			setIsLoading(true);
			const { data } = await api.get<UsersProps[]>("/user");
			console.log("Users", data);
			setUsers(data);
		} catch (e) {
			console.log("getUsers Error: ", e);
			alert("Erro ao carregar Usuários!");
		} finally {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<>
			{isLoading ? (
				<div className="flex items-center justify-center">
					<Loading />
				</div>
			) : (
				<>
					<section className="flex items-center justify-between mb-5">
						<div className="flex items-center">
							<Input
								type="text"
								placeholder="Pesquisar..."
								className="w-52 mr-2"
							/>

							<Button>
								<Search />
							</Button>
						</div>

						<Button onClick={() => handleAddUser()}>
							<Plus /> Adicionar
						</Button>
					</section>

					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Usuário</TableHead>
								<TableHead>E-mail</TableHead>
								<TableHead>Editar</TableHead>
							</TableRow>
						</TableHeader>

						<TableBody>
							{users.map(({ id, username, email }) => (
								<TableRow>
									<TableCell>{username}</TableCell>
									<TableCell>{email}</TableCell>
									<TableCell>
										<Button onClick={() => handleEditUser(id.toString())}>
											<Pencil />
										</Button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</>
			)}
		</>
	);
}
