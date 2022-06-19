const data = {
	labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
	datasets: [
		{
			label: "Sales Report",
			data: [18, 12, 6, 9, 12, 3, 9],
			backgroundColor: "rgba(29,117,179,0.2)",
			borderColor: "rgba(29,117,179,0.81)",
			tension: 0.4,

			fill: true,
		},
	],
};

// config
const config = {
	type: "line",
	data,
	options: {
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	},
};

// render init block
const myChart = new Chart(document.getElementById("myChart"), config);
