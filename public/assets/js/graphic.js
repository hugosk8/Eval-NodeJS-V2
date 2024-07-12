document.addEventListener("DOMContentLoaded", () => {
    const barCanvas = document.getElementById('barCanvas');
    const names = materialData.map(item => item.name);
    const quantities = materialData.map(item => item.quantity);

    const barChart = new Chart(barCanvas, {
        type: "bar",
        data: {
            labels: names,
            datasets: [{
                data: quantities,
                backgroundColor: [
                    "crimson",
                    "lightgreen",
                    "lightblue",
                    "violet"
                ]
            }]
        }
    });
});