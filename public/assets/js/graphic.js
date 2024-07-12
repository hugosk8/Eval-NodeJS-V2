import Furniture from '../models/FurnituresModel.js';
const furnitures = Furniture.find();
console.log(furnitures);

const barCanvas = document.getElementById('barCanvas');

const barChart = new Chart(barCanvas, {
    type: "bar",
    data: {
        labels: [
            "beijing",
            "Tokyo",
            "Seoul",
            "Hong Kong"
        ],
        datasets: [{
            data: [240, 120, 180, 300],
            backgroundColor: [
                "crimson",
                "lightgreen",
                "lightblue",
                "violet"
            ],
            hoverOffset: 10
        }]
    },
    options: {
        scales: {
            y: {
                suggestedMax: 350
            }
        }
    }
});