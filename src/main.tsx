import "./global.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Toaster } from "@/components/ui/sonner";

import { ThemeProvider } from "./components/theme/theme-provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<App />
			<Toaster position="top-right" richColors />
		</ThemeProvider>
	</React.StrictMode>
);
