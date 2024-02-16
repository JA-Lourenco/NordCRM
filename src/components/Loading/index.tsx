import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

export function Loading({ className }: { className?: string }) {
	return (
		<Loader2
			className={cn("my-28 h-16 w-16 text-slate-500 animate-spin", className)}
		/>
	);
}
