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
import { useNavigate } from "react-router-dom";
import { api } from "@/services/api";

import { Pencil, Plus, Search } from "lucide-react";

export function Teams() {
	const [teams, setTeams] = useState([]);
	const navigate = useNavigate();

	function handleAddTeam() {
		navigate("/teams/create");
	}

	async function getTeams() {
		try {
			const { data } = await api.get("/team");
			console.log("Team", data);
			setTeams(data);
		} catch (e) {
			console.log("getTeams Error: ", e);
			alert("Erro ao carregar Equipes!");
		}
	}

	useEffect(() => {
		getTeams();
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

				<Button onClick={() => handleAddTeam()}>
					<Plus /> Adicionar
				</Button>
			</section>

			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Equipe</TableHead>
						<TableHead>Painel</TableHead>
						<TableHead>Editar</TableHead>
					</TableRow>
				</TableHeader>

				<TableBody>
					<TableRow>
						<TableCell>Equipe Ametista</TableCell>
						<TableCell>P001</TableCell>
						<TableCell>
							<Button>
								<Pencil />
							</Button>
						</TableCell>
					</TableRow>

					<TableRow>
						<TableCell>Equipe Rubi</TableCell>
						<TableCell>P10</TableCell>
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
