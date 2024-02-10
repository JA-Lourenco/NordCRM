import { Link, useRouteError } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function ErrorPage() {
	const error = useRouteError();
	console.error(error);
	return (
		<>
			<div>Ops! We do not found that page.</div>
			<Link to="/home">
				<Button variant="destructive">Back</Button>
			</Link>
		</>
	);
}
