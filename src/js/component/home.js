import React, { useState } from "react";

export function TrafficLight() {
	let colorList = [];
	const [color, setColor] = useState(colorList);

	let changeColor = e => {
		let newColor = e.target.textContent;
		setColor(newColor);
	};

	return (
		<div className="container">
			<div className="trafficTop mx-auto"></div>
			<div className="trafficLight mx-auto">
				<div
					onClick={changeColor}
					className={
						color == "red" ? "red selected mx-auto" : "red mx-auto"
					}>
					red
				</div>
				<div
					onClick={changeColor}
					className={
						color == "yellow"
							? "yellow selected mx-auto"
							: "yellow mx-auto"
					}>
					yellow
				</div>
				<div
					onClick={changeColor}
					className={
						color == "green"
							? "green selected mx-auto"
							: "green mx-auto"
					}>
					green
				</div>
			</div>
		</div>
	);
}
