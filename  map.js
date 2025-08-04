// Initialize map centered on Queensland
const map = L.map('map').setView([-23, 145], 6);

// Add OpenStreetMap as the base layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Add a sample marker (Brisbane)
L.marker([-27.47, 153.02])
    .addTo(map)
    .bindPopup("<b>Potential Data Center Site</b><br>Brisbane");