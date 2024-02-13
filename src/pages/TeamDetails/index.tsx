import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Modal } from "@/components/Modal";
import { DialogClose } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from "@/components/ui/form";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { CornerDownLeft, Save, UserX } from "lucide-react";

const teamFormSchema = z.object({
	name: z.string(),
	members: z.array(z.string()).refine((value) => value.some((item) => item)),
});

type TeamType = z.infer<typeof teamFormSchema>;

export function TeamDetails() {
	const [users, setUsers] = useState([
		{ id: "1", username: "user1" },
		{ id: "2", username: "user2" },
		{ id: "3", username: "user3" },
		{ id: "4", username: "user4" },
		{ id: "5", username: "user5" },
		{ id: "6", username: "user6" },
		{ id: "7", username: "user7" },
		{ id: "8", username: "user8" },
		{ id: "9", username: "user9" },
		{ id: "10", username: "user10" },
	]);

	const form = useForm<TeamType>();
	const { register, handleSubmit } = form;

	function submit(data: TeamType) {
		console.log("product", data);
	}

	function RemoveModalFooter() {
		return (
			<div className="flex items-center justify-between mt-10">
				<DialogClose className="h-10 flex items-center justify-center">
					<CornerDownLeft className="mr-2" />
					Cancelar
				</DialogClose>

				<Button className="h-10 col-span-1 bg-red-500 dark:text-white hover:dark:text-black">
					<UserX className="mr-2" />
					Confirmar
				</Button>
			</div>
		);
	}

	return (
		<Form {...form}>
			<form
				onSubmit={handleSubmit(submit)}
				className="w-2/6 flex flex-col gap-5"
			>
				<div className="">
					<Label htmlFor="name">Nome da Equipe</Label>
					<Input id="name" type="text" {...register("name")} />
				</div>

				<section className="p-5 border-2 rounded-b-md">
					<ScrollArea className="h-52">
						{users.map(({ id, username }) => (
							<div key={id} className="flex items-center gap-3">
								<Label htmlFor={id}>{username}</Label>
							</div>
						))}
					</ScrollArea>
				</section>

				<section className="flex items items-center justify-between gap-3">
					<Modal
						title="ATENÇÃO"
						content="Deseja realmente remover este registro?"
						footer={<RemoveModalFooter />}
					>
						<Button type="button" className="h-10 w-full mt-5 col-span-1">
							<UserX className="mr-2" />
							Remover
						</Button>
					</Modal>

					<Button
						type="submit"
						className="h-10 w-full mt-5 col-span-1 bg-green-500"
					>
						<Save className="mr-2" />
						Salvar
					</Button>
				</section>
			</form>
		</Form>
	);
}
