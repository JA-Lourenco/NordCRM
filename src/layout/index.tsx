import { Outlet } from "react-router-dom";

export function Layout() {
	return (
		<>
			<div className="w-full">
				<span className="text-justify">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
					amet quod minima magni ea. Voluptatum, aut vero ullam, ipsa nesciunt
					labore sint atque quaerat omnis doloribus aliquam nisi, quia dolore!
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet est
					repellat eaque. Esse quos modi blanditiis aliquid natus perspiciatis a
					labore? Quibusdam sequi suscipit impedit, repellat inventore
					doloremque perspiciatis adipisci?
				</span>
			</div>

			<Outlet />
		</>
	);
}
