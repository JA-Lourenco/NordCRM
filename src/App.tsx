import { RouterProvider } from "react-router-dom";
import { router } from "./routes/root";

export function App() {
	return <RouterProvider router={router} />;
}
