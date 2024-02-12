import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";

interface ModalProps {
	children: React.ReactNode;
	title: string;
	description?: string;
	content: React.ReactNode;
	footer?: any;
}

export function Modal({
	children,
	title,
	description,
	content,
	footer,
}: ModalProps) {
	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>

			<DialogContent>
				<DialogTitle className="text-2xl">{title}</DialogTitle>
				<DialogDescription>{description}</DialogDescription>
				{content}
				<DialogFooter>{footer}</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
