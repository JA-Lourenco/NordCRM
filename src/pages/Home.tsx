import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Home() {
	return (
		<div>
			<h1>Home</h1>
			<Link to="/">
				<Button variant="default">Go Back</Button>
			</Link>
		</div>
	);
}
