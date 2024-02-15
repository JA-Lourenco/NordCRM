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

import { Pencil, Plus, Search } from "lucide-react";

export function Users() {
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
						<TableHead>Usuário</TableHead>
						<TableHead>E-mail</TableHead>
						<TableHead>Editar</TableHead>
					</TableRow>
				</TableHeader>

				<TableBody>
					<TableRow>
						<TableCell>raul.osorio</TableCell>
						<TableCell>raul.osorio@nord.com</TableCell>
						<TableCell>
							<Button>
								<Pencil />
							</Button>
						</TableCell>
					</TableRow>

					<TableRow>
						<TableCell>tallis.marques</TableCell>
						<TableCell>tallis.marques@nord.com</TableCell>
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
