import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/ui/mode-toggle";

import { login } from "@/services/api";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface AuthProps {
	token: string;
}

const loginSchema = z.object({
	username: z.string(),
	password: z.string(),
});

type LoginType = z.infer<typeof loginSchema>;

export function Login() {
	const form = useForm<LoginType>();
	const { register, handleSubmit } = form;
	const navigate = useNavigate();

	function setAuthToken({ token }: AuthProps) {
		const isAuth = localStorage.getItem("authToken") || "";

		if (isAuth) {
			localStorage.removeItem("authToken");
		}

		localStorage.setItem("authToken", token);
	}

	async function authenticate(params: LoginType) {
		try {
			console.log("params", params);
			const { data: token } = await login.post<AuthProps>(
				"/auth/login",
				params
			);

			console.log(token);
			if (token) {
				setAuthToken(token);
				navigate("/home");
			}
		} catch (e) {
			console.log("authenticate Error: ", e);
		}
	}

	return (
		<div className="h-dvh flex items-center justify-center relative">
			<div className="absolute top-5 right-5">
				<ModeToggle />
			</div>

			<div className="w-30 flex flex-col ring-1 ring-slate-800 p-10 gap-3 rounded-md">
				<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-10">
					Nord CRM
				</h1>

				<form onSubmit={handleSubmit(authenticate)}>
					<Label htmlFor="username">Usuário</Label>
					<Input id="username" type="text" {...register("username")} />

					<Label htmlFor="password">Senha</Label>
					<Input id="password" type="password" {...register("password")} />

					<Button variant="default" type="submit" className="w-full h-10 mt-10">
						Entrar
					</Button>
				</form>
			</div>
		</div>
	);
}
