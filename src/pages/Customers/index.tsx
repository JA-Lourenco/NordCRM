import { useEffect, useState } from "react";

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
import { Loading } from "@/components/Loading";

interface CustomerProps {
	id: number;
	fullName: string;
	phone: string;
}

export function Customers() {
	const [isLoading, setIsLoading] = useState(false);
	const [customers, setCustomers] = useState<CustomerProps[]>([]);

	const navigate = useNavigate();

	async function getCustomer() {
		try {
			setIsLoading(true);
			const { data } = await api.get<CustomerProps[]>("/customer");
			console.log(data);
			setCustomers(data);
		} catch (e) {
			console.log("getCustomer Error: ", e);
			alert("Erro ao buscar Clientes!");
		} finally {
			setIsLoading(false);
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
							{customers.map(({ id, phone, fullName }) => (
								<TableRow key={id}>
									<TableCell>{fullName}</TableCell>
									<TableCell>{phone}</TableCell>
									<TableCell>PF</TableCell>
									<TableCell>
										<Button>
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
