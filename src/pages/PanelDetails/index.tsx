import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Modal } from "@/components/Modal";
import { DialogClose } from "@/components/ui/dialog";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from "@/components/ui/form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { CornerDownLeft, Save, X } from "lucide-react";

const panelFormSchema = z.object({
	name: z.string(),
	team: z.string(),
});

type PanelType = z.infer<typeof panelFormSchema>;

export function PanelDetails() {
	const [panels, setPanels] = useState([
		{
			id: "1",
			name: "Equipe Ametista",
		},
		{
			id: "2",
			name: "Equipe Rubi",
		},
		{
			id: "3",
			name: "Equipe Esmeralda",
		},
	]);
	const form = useForm<PanelType>();
	const { register, handleSubmit } = form;

	function submit(data: PanelType) {
		console.log("product", data);
	}

	function RemoveModalFooter() {
		return (
			<div className="flex items-center justify-between mt-10">
				<DialogClose className="h-10 flex items-center justify-center">
					<CornerDownLeft className="mr-2" />
					Cancelar
				</DialogClose>

				<Button variant="destructive" className="h-10 col-span-1">
					<X className="mr-2" />
					Remover
				</Button>
			</div>
		);
	}

	return (
		<Form {...form}>
			<form
				onSubmit={handleSubmit(submit)}
				className="grid grid-cols-2 grid-rows-3 gap-5 w-2/6"
			>
				<div className="col-span-2">
					<Label htmlFor="name">Nome do Painel</Label>
					<Input id="name" type="text" {...register("name")} />
				</div>

				<div className="col-span-1">
					<FormField
						control={form.control}
						name="team"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Equipe</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Selecione" />
										</SelectTrigger>
									</FormControl>

									<SelectContent>
										{panels.map(({ id, name }) => (
											<SelectItem key={id} value={name}>
												{name}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</FormItem>
						)}
					/>
				</div>

				<div className="col-span-1"></div>

				<Modal
					title="ATENÇÃO"
					content="Deseja realmente remover este registro?"
					footer={<RemoveModalFooter />}
				>
					<Button
						type="button"
						variant="outline"
						className="h-10 mt-5 col-span-1"
					>
						<X className="mr-2" />
						Remover
					</Button>
				</Modal>

				<Button type="submit" className="h-10 mt-5 col-span-1 bg-green-500">
					<Save className="mr-2" />
					Salvar
				</Button>
			</form>
		</Form>
	);
}
