import { useEffect } from "react";

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Pencil, Plus, Search } from "lucide-react";
import { api } from "@/services/api";

import { useNavigate } from "react-router-dom";

export function Customers() {
	const navigate = useNavigate();
	async function getCustomer() {
		try {
			const { data } = await api.get("/customer");
			console.log(data);
		} catch (e) {
			console.log("getCustomer Error: ", e);
			alert("Erro ao buscar Clientes!");
		}
	}

	function handleCreateCustomer() {
		navigate("/customers/create");
	}

	useEffect(() => {
		getCustomer();
	}, []);

	return (
		<>
			<section className="flex items-center justify-between mb-5">
				<div className="flex items-center">
					<Input type="text" placeholder="Pesquisar..." className="w-52 mr-2" />

					<Button>
						<Search />
					</Button>
				</div>

				<Button onClick={() => handleCreateCustomer()}>
					<Plus /> Adicionar
				</Button>
			</section>

			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Nome</TableHead>
						<TableHead>Telefone</TableHead>
						<TableHead>Tipo Pessoa</TableHead>
						<TableHead>Editar</TableHead>
					</TableRow>
				</TableHeader>

				<TableBody>
					<TableRow>
						<TableCell>Ricardo Oliveira</TableCell>
						<TableCell>38 985258525</TableCell>
						<TableCell>PF</TableCell>
						<TableCell>
							<Button>
								<Pencil />
							</Button>
						</TableCell>
					</TableRow>

					<TableRow>
						<TableCell>Victor Ramos</TableCell>
						<TableCell>12 996539653</TableCell>
						<TableCell>PF</TableCell>
						<TableCell>
							<Button>
								<Pencil />
							</Button>
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</>
	);
}
