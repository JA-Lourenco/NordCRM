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
import { Loading } from "@/components/Loading";

import { Pencil, Plus, Search } from "lucide-react";
import { api } from "@/services/api";

import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface CustomerProps {
	id: number;
	fullName: string;
	phone: string;
	personType: string;
}

export function Customers() {
	const [customers, setCustomers] = useState<CustomerProps[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	const token = localStorage.getItem("authToken") || "";

	const headers = {
		Authorization: `Bearer ${token}`,
	};

	async function getCustomers() {
		try {
			setIsLoading(true);
			const { data } = await api.get<CustomerProps[]>("/customer", { headers });

			console.log(data);
			setCustomers(data);
		} catch (e) {
			console.log("getCustomer Error: ", e);
			toast.error("Erro ao buscar Clientes!");
		} finally {
			setIsLoading(false);
		}
	}

	function handleCreateCustomer() {
		navigate("/customers/create");
	}

	function handleEditCustomer(id: string) {
		navigate(`/customers/${id}`);
	}

	useEffect(() => {
		getCustomers();
	}, []);

	return (
		<>
			{isLoading ? (
				<div className="flex items-center justify-center">
					<Loading className="h-16 w-16" />
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
							{customers.map(({ id, phone, fullName, personType }) => (
								<TableRow key={id}>
									<TableCell>{fullName}</TableCell>
									<TableCell>{phone}</TableCell>
									<TableCell>
										{personType === "NATURAL_PERSON" ? "PF" : "PJ"}
									</TableCell>
									<TableCell>
										<Button onClick={() => handleEditCustomer(id.toString())}>
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
