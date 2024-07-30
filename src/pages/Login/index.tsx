import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Loading } from "@/components/Loading";

import { api } from "@/services/api";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { LogIn } from "lucide-react";

const loginSchema = z.object({
	username: z.string(),
	password: z.string(),
});

type LoginType = z.infer<typeof loginSchema>;

export function Login() {
	const [isLoading, setIsLoading] = useState(false);

	const form = useForm<LoginType>();
	const { register, handleSubmit } = form;
	const navigate = useNavigate();

	function setAuthToken(token: string) {
		const isAuth = localStorage.getItem("authToken") || "";

		if (isAuth) {
			localStorage.removeItem("authToken");
		}

		localStorage.setItem("authToken", token);
	}

	function setUserLS(username: string) {
		localStorage.removeItem("username");

		localStorage.setItem("username", username);
	}

	async function authenticate(params: LoginType) {
		try {
			setIsLoading(true);
			console.log("params", params);
			const { username, password } = params;
			const { data: token } = await api.post<string>(
				"/auth/login",
				{},
				{
					auth: {
						username,
						password,
					},
				}
			);

			if (token) {
				setAuthToken(token);
				setUserLS(username);
				navigate("/home");
			}
		} catch (e) {
			console.log("authenticate Error: ", e);
			toast.error("Falha ao realizar autenticação!");
		} finally {
			setIsLoading(false);
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

					<Button
						variant="default"
						type="submit"
						className="w-full h-10 mt-10"
						disabled={isLoading}
					>
						{isLoading ? (
							<Loading className="mr-2" />
						) : (
							<LogIn className="mr-2" />
						)}
						Entrar
					</Button>
				</form>
			</div>
		</div>
	);
}
