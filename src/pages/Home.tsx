import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";

import { Link } from "react-router-dom";

export function Home() {
	return (
		<div>
			<h1>Home</h1>
			<Button variant="default">
				<Link to="/">Go Back</Link>
			</Button>
			{/* <ModeToggle /> */}
		</div>
	);
}
