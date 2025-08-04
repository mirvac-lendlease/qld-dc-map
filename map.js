document.addEventListener('DOMContentLoaded', function() {
    // Initialize map centered on Queensland
    const map = L.map('map').setView([-23, 145], 6);
    
    // Base map (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap'
    }).addTo(map);

    // ===== NEW QUEENSLAND DATA LAYERS ===== //
    
    // 1. Power Infrastructure (sample GeoJSON)
    fetch('data/qld_power.geojson')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load power data');
            return response.json();
        })
        .then(data => {
            L.geoJSON(data, {
                style: { color: 'orange', weight: 3 },
                onEachFeature: (feature, layer) => {
                    layer.bindPopup(`<b>Power Line</b><br>Voltage: ${feature.properties.voltage || 'Unknown'}`);
                }
            }).addTo(map);
        })
        .catch(error => console.warn('Power data error:', error));

    // 2. Keep your original Brisbane marker
    L.marker([-27.47, 153.02])
        .addTo(map)
        .bindPopup("<b>Potential Data Center Site</b><br>Brisbane");

    console.log("Map successfully loaded with QLD power data!");
});
