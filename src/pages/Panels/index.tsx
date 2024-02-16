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

import { api } from "@/services/api";
import { useNavigate } from "react-router-dom";

import { Pencil, Plus, Search } from "lucide-react";
import { toast } from "sonner";

interface PanelProps {}

export function Panels() {
	const [panels, setPanels] = useState<PanelProps[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	async function getPanels() {
		try {
			setIsLoading(true);
			const { data } = await api.get<PanelProps[]>("/product");
			console.log(data);
			setPanels(data);
		} catch (e) {
			console.log("getCustomer Error: ", e);
			toast.error("Erro ao buscar Painéis!");
		} finally {
			setIsLoading(false);
		}
	}

	function handleCreatePanel() {
		navigate("/panels/create");
	}

	useEffect(() => {
		getPanels();
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

						<Button onClick={() => handleCreatePanel()}>
							<Plus /> Adicionar
						</Button>
					</section>

					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Painel</TableHead>
								<TableHead>Equipe</TableHead>
								<TableHead>Editar</TableHead>
							</TableRow>
						</TableHeader>

						<TableBody>
							{panels.map(({}) => (
								<TableRow>
									<TableCell>Painel 001</TableCell>
									<TableCell>Equipe Ametista</TableCell>
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
