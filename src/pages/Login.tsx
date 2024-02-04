import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Link } from "react-router-dom";

export function Login() {
	return (
		<div>
			<h1>Hello World!</h1>
			<Button variant="default">
				<Link to="/home">Go HOME</Link>
			</Button>
			<ModeToggle />
		</div>
	);
}
