import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Link } from "react-router-dom";

export function Login() {
	return (
		<div className="h-dvh flex items-center justify-center relative">
			<div className="absolute top-5 right-5">
				<ModeToggle />
			</div>

			<div className="w-30 flex flex-col ring-1 ring-slate-800 p-10 gap-3 rounded-md">
				<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-10">
					Nord CRM
				</h1>

				<Form>
					<Label htmlFor="username">Usuário</Label>
					<Input id="username" name="username" type="text" />

					<Label htmlFor="password">Senha</Label>
					<Input id="password" name="password" type="password" />

					<Link to="/home">
						<Button variant="default" type="submit" className="w-full">
							Entrar
						</Button>
					</Link>
				</Form>
			</div>
		</div>
	);
}
