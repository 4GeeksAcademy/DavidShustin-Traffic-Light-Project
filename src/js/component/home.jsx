import React, {useState, useEffect} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selectedColor, setSelectedColor] = useState("null");
	const [cycleActive, setCycleActive] = useState(false);

	const cycleTrafficColors = () => {
		if (cycleActive) {
			if (selectedColor === "green" ) {
				setSelectedColor("yellow");
			} else if (selectedColor === "yellow") {
				setSelectedColor("red");
			} else if (selectedColor === "red") {
				setSelectedColor("green");
			}
		}
	}
	const startStopCycle = () => {
		setCycleActive(!cycleActive);
		if (!cycleActive) {
			setSelectedColor("green");
		}
	};

	useEffect(() => {
		const intervalId = setInterval(cycleTrafficColors, 1800);
		return () => clearInterval(intervalId);
	}, [selectedColor])
	return (
		<div className="d-flex justify-content-center">
			<div className="traffic-light-container">
				<div className="traffic-light-top">

				</div>
				<div className="traffic-light">
					<div
						onClick={() => setSelectedColor("red")}
						className={"light red" + ((selectedColor === "red") ? " glow" : "")}>
					</div>
					<div
						onClick={() => setSelectedColor("yellow")}
						className={"light yellow" + ((selectedColor === "yellow") ? " glow" : "")}>
					</div>
					<div
						onClick={() => setSelectedColor("green")}
						className={"light green" + ((selectedColor === "green") ? " glow" : "")}>
					</div>
				</div>
				<div className="d-flex justify-content-center">
					<button className="btn btn-dark" onClick={startStopCycle}  id="cycleButton">{cycleActive ? "stop traffic light cycle": "start traffic light cycle"}</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
