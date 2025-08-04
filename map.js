// Wait for page to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize map centered on Queensland
    const map = L.map('map').setView([-23, 145], 6);
    
    // Add OpenStreetMap base layer with error handling
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
    // Add marker with console confirmation
    const marker = L.marker([-27.47, 153.02])
        .addTo(map)
        .bindPopup("<b>Potential Data Center Site</b><br>Brisbane");
    
    console.log("Map initialized successfully!");
});
