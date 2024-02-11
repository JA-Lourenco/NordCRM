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

export function Panels() {
	return (
		<>
			<section className="flex items-center justify-between mb-5">
				<div className="flex items-center">
					<Input type="text" placeholder="Pesquisar..." className="w-52 mr-2" />

					<Button>
						<Search />
					</Button>
				</div>

				<Button>
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
					<TableRow>
						<TableCell>Painel 001</TableCell>
						<TableCell>Equipe Ametista</TableCell>
						<TableCell>
							<Button>
								<Pencil />
							</Button>
						</TableCell>
					</TableRow>

					<TableRow>
						<TableCell>Painel 10</TableCell>
						<TableCell>Equipe Rubi</TableCell>
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
