import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

export function Home() {
	return (
		<>
			<section className="mb-16 ">
				<h3 className="text-3xl text-center text-white p-3 bg-slate-800 rounded-md">
					Qualificação
				</h3>

				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Nome</TableHead>
							<TableHead>Painel</TableHead>
							<TableHead>Equipe</TableHead>
							<TableHead>Cliente</TableHead>
							<TableHead>Lead</TableHead>
						</TableRow>
					</TableHeader>

					<TableBody>
						<TableRow>
							<TableCell>Ricardo</TableCell>
							<TableCell>P001</TableCell>
							<TableCell>Ametista</TableCell>
							<TableCell>TG Soluções</TableCell>
							<TableCell>#3570</TableCell>
						</TableRow>

						<TableRow>
							<TableCell>Victor</TableCell>
							<TableCell>P001</TableCell>
							<TableCell>Ruby</TableCell>
							<TableCell>WTL</TableCell>
							<TableCell>#556</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</section>

			<section className="mb-16 ">
				<h3 className="text-3xl text-center text-white p-3 bg-slate-800 rounded-md">
					Negociação
				</h3>

				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Nome</TableHead>
							<TableHead>Painel</TableHead>
							<TableHead>Equipe</TableHead>
							<TableHead>Cliente</TableHead>
							<TableHead>Lead</TableHead>
						</TableRow>
					</TableHeader>

					<TableBody>
						<TableRow>
							<TableCell>Eduardo</TableCell>
							<TableCell>P002</TableCell>
							<TableCell>Safira</TableCell>
							<TableCell>Grupo JG</TableCell>
							<TableCell>#1043</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</section>

			<section>
				<h3 className="text-3xl text-center text-white p-3 bg-slate-800 rounded-md">
					Finalizados
				</h3>

				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Nome</TableHead>
							<TableHead>Painel</TableHead>
							<TableHead>Equipe</TableHead>
							<TableHead>Cliente</TableHead>
							<TableHead>Lead</TableHead>
						</TableRow>
					</TableHeader>

					<TableBody>
						<TableRow>
							<TableCell>Daniel</TableCell>
							<TableCell>P002</TableCell>
							<TableCell>Esmeralda</TableCell>
							<TableCell>AGO</TableCell>
							<TableCell>#350</TableCell>
						</TableRow>

						<TableRow>
							<TableCell>Victor</TableCell>
							<TableCell>P001</TableCell>
							<TableCell>Ruby</TableCell>
							<TableCell>TT LTDA</TableCell>
							<TableCell>#56</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</section>
		</>
	);
}
