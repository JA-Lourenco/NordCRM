import { Save } from "lucide-react";
import { Button } from "../ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";
import { Form } from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface ModalFormProps {
	children: React.ReactNode;
	title?: string;
	description?: string;
	client?: string;
	phone?: string;
}

const leadFormSchema = z.object({
	client: z.string(),
	phone: z.string(),
});

type LeadFormType = z.infer<typeof leadFormSchema>;

export function ModalForm({
	children,
	title,
	description,
	client,
	phone,
}: ModalFormProps) {
	const form = useForm<LeadFormType>();
	const { register, handleSubmit } = form;

	function submit(data: LeadFormType) {
		console.log("daaaaaaata --->", data);
	}

	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>

			<DialogContent>
				<DialogTitle>{title && title}</DialogTitle>
				<DialogDescription>{description && description}</DialogDescription>

				<Form {...form}>
					<form onSubmit={handleSubmit(submit)} className="flex flex-col gap-5">
						<div>
							<Label htmlFor="client">Cliente</Label>
							<Input
								id="client"
								type="text"
								defaultValue={client && client}
								{...register("client")}
							/>
						</div>

						<div>
							<Label htmlFor="phone">Telefone</Label>
							<Input
								id="phone"
								type="text"
								defaultValue={phone && phone}
								{...register("phone")}
							/>
						</div>

						<Button type="submit">
							<Save className="mr-2" />
							Salvar
						</Button>
					</form>
				</Form>

				<DialogFooter>
					<Button>Negociação</Button>
					<Button>Finalizado</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
