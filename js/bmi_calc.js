window.onload = () => {
	let button = document.querySelector("#submit");

	// Function for calculating BMI
	button.addEventListener("click", calculateBMI);
};

function calculateBMI() {

	/* Getting input from user into height variable.
	Input is string so typecasting is necessary. */
	let Height = parseInt(document
			.querySelector("#Height").value);

	/* Getting input from user into weight variable.
	Input is string so typecasting is necessary.*/
	let Weight = parseInt(document
			.querySelector("#Weight").value);

	let result = document.querySelector("#result");

	// Checking the user providing a proper
	// value or not
	if (Height === "" || isNaN(Height))
		result.innerHTML = "Provide a valid Height!";

	else if (Weight === "" || isNaN(Weight))
		result.innerHTML = "Provide a valid Weight!";

	// If both input is valid, calculate the bmi
	else {

		// Fixing upto 2 decimal places
		let bmi = (Weight / ((Height * Height)
							/ 10000)).toFixed(2);

		// Dividing as per the bmi conditions
		if (bmi < 18.6) result.innerHTML =
			`Under Weight : <span>${bmi}</span>`;

		else if (bmi >= 18.6 && bmi < 24.9)
			result.innerHTML =
				`Normal : <span>${bmi}</span>`;

		else result.innerHTML =
			`Over Weight : <span>${bmi}</span>`;
	}
}
