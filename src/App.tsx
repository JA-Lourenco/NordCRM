import { ThemeProvider } from "@/components/theme/theme-provider";
import { Button } from "./components/ui/button";
import { ModeToggle } from "./components/ui/mode-toggle";

export function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<div>
				<h1>Hello Wipeum!</h1>
				<Button variant="default">Butão</Button>
				<ModeToggle />
			</div>
		</ThemeProvider>
	);
}
