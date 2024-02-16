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

import { api } from "@/services/api";
import { useNavigate } from "react-router-dom";

import { Pencil, Plus, Search } from "lucide-react";

interface ProductProps {
	name: string;
	supplier: string;
	category: string;
	description: string;
}

export function Products() {
	const [isLoading, setIsLoading] = useState(false);
	const [products, setProducts] = useState<ProductProps[]>([]);

	const navigate = useNavigate();

	async function getProducts() {
		try {
			setIsLoading(true);
			const { data } = await api.get<ProductProps[]>("/product");
			console.log(data);
			setProducts(data);
		} catch (e) {
			console.log("getCustomer Error: ", e);
			alert("Erro ao buscar Clientes!");
		} finally {
			setIsLoading(false);
		}
	}

	function handleCreateProduct() {
		navigate("/products/create");
	}

	useEffect(() => {
		getProducts();
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

						<Button onClick={() => handleCreateProduct()}>
							<Plus /> Adicionar
						</Button>
					</section>

					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Produto</TableHead>
								<TableHead>Categoria</TableHead>
								<TableHead>Editar</TableHead>
							</TableRow>
						</TableHeader>

						<TableBody>
							{products.map(({ name, category }) => (
								<TableRow key={name}>
									<TableCell>{name}</TableCell>
									<TableCell>{category}</TableCell>
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
