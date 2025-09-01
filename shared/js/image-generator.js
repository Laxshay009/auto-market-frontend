// Image generator for demo purposes
// Creates SVG-based placeholder images that work offline

function generateCarImage(brand, model, color = '#333333') {
    const svg = `
        <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#f0f0f0;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#e0e0e0;stop-opacity:1" />
                </linearGradient>
                <linearGradient id="car" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
                    <stop offset="100%" style="stop-color:${adjustColor(color, -20)};stop-opacity:1" />
                </linearGradient>
            </defs>
            
            <!-- Background -->
            <rect width="400" height="300" fill="url(#bg)"/>
            
            <!-- Ground -->
            <rect x="0" y="250" width="400" height="50" fill="#d0d0d0"/>
            
            <!-- Car Body -->
            <rect x="50" y="150" width="300" height="80" rx="20" fill="url(#car)"/>
            
            <!-- Car Top -->
            <path d="M 120 150 L 160 100 L 240 100 L 280 150 Z" fill="${color}" opacity="0.9"/>
            
            <!-- Windows -->
            <path d="M 130 145 L 165 105 L 235 105 L 270 145 Z" fill="#4a90e2" opacity="0.3"/>
            
            <!-- Wheels -->
            <circle cx="100" cy="230" r="25" fill="#2c2c2c"/>
            <circle cx="100" cy="230" r="15" fill="#888"/>
            <circle cx="300" cy="230" r="25" fill="#2c2c2c"/>
            <circle cx="300" cy="230" r="15" fill="#888"/>
            
            <!-- Headlights -->
            <ellipse cx="350" cy="180" rx="15" ry="10" fill="#fff" opacity="0.8"/>
            <ellipse cx="50" cy="180" rx="15" ry="10" fill="#ffcccc" opacity="0.6"/>
            
            <!-- Brand Text -->
            <text x="200" y="270" font-family="Arial, sans-serif" font-size="14" fill="#666" text-anchor="middle">
                ${brand} ${model}
            </text>
        </svg>
    `;
    
    return 'data:image/svg+xml;base64,' + btoa(svg);
}

function generate360Image(brand, model, angle, color = '#333333') {
    const angles = {
        'front': { bodyX: 50, bodyWidth: 300, wheelSpacing: 200 },
        'side': { bodyX: 30, bodyWidth: 340, wheelSpacing: 240 },
        'rear': { bodyX: 50, bodyWidth: 300, wheelSpacing: 200 },
        'interior': { bodyX: 20, bodyWidth: 360, wheelSpacing: 0 }
    };
    
    const config = angles[angle] || angles['front'];
    
    const svg = `
        <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="bg360">
                    <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#f5f5f5;stop-opacity:1" />
                </radialGradient>
                <linearGradient id="car360" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
                    <stop offset="100%" style="stop-color:${adjustColor(color, -30)};stop-opacity:1" />
                </linearGradient>
            </defs>
            
            <!-- Background -->
            <rect width="800" height="600" fill="url(#bg360)"/>
            
            <!-- Floor -->
            <ellipse cx="400" cy="500" rx="350" ry="80" fill="#e0e0e0" opacity="0.5"/>
            
            <!-- Car Shadow -->
            <ellipse cx="400" cy="480" rx="200" ry="40" fill="#000" opacity="0.2"/>
            
            ${angle === 'interior' ? `
                <!-- Interior View -->
                <rect x="100" y="150" width="600" height="300" rx="30" fill="${color}" opacity="0.3"/>
                <rect x="150" y="200" width="500" height="200" rx="20" fill="#2c2c2c"/>
                
                <!-- Dashboard -->
                <rect x="180" y="220" width="440" height="80" rx="10" fill="#1a1a1a"/>
                
                <!-- Steering Wheel -->
                <circle cx="250" cy="300" r="60" fill="none" stroke="#888" stroke-width="8"/>
                <line x1="250" y1="240" x2="250" y2="300" stroke="#888" stroke-width="4"/>
                <line x1="190" y1="300" x2="310" y2="300" stroke="#888" stroke-width="4"/>
                
                <!-- Seats -->
                <rect x="200" y="350" width="80" height="100" rx="10" fill="#4a4a4a"/>
                <rect x="320" y="350" width="80" height="100" rx="10" fill="#4a4a4a"/>
                <rect x="440" y="350" width="80" height="100" rx="10" fill="#4a4a4a"/>
                <rect x="560" y="350" width="80" height="100" rx="10" fill="#4a4a4a"/>
                
                <!-- Center Console -->
                <rect x="290" y="320" width="220" height="120" rx="5" fill="#333"/>
                <rect x="350" y="340" width="100" height="60" rx="5" fill="#4a90e2" opacity="0.6"/>
                
                <text x="400" y="370" font-family="Arial" font-size="12" fill="#fff" text-anchor="middle">
                    INFOTAINMENT
                </text>
            ` : `
                <!-- Car Body -->
                <rect x="${config.bodyX}" y="250" width="${config.bodyWidth}" height="150" rx="30" fill="url(#car360)"/>
                
                <!-- Car Top/Roof -->
                <path d="M ${config.bodyX + 70} 250 L ${config.bodyX + 120} 150 L ${config.bodyX + config.bodyWidth - 120} 150 L ${config.bodyX + config.bodyWidth - 70} 250 Z" 
                      fill="${color}" opacity="0.95"/>
                
                <!-- Windows -->
                <path d="M ${config.bodyX + 80} 240 L ${config.bodyX + 125} 160 L ${config.bodyX + config.bodyWidth - 125} 160 L ${config.bodyX + config.bodyWidth - 80} 240 Z" 
                      fill="#4a90e2" opacity="0.4"/>
                
                <!-- Details based on angle -->
                ${angle === 'front' ? `
                    <!-- Front Grille -->
                    <rect x="350" y="300" width="100" height="40" rx="5" fill="#1a1a1a" opacity="0.7"/>
                    <!-- Headlights -->
                    <ellipse cx="300" cy="290" rx="30" ry="20" fill="#ffffcc" opacity="0.8"/>
                    <ellipse cx="500" cy="290" rx="30" ry="20" fill="#ffffcc" opacity="0.8"/>
                ` : angle === 'rear' ? `
                    <!-- Rear Lights -->
                    <ellipse cx="300" cy="290" rx="30" ry="15" fill="#ff6666" opacity="0.8"/>
                    <ellipse cx="500" cy="290" rx="30" ry="15" fill="#ff6666" opacity="0.8"/>
                    <!-- License Plate -->
                    <rect x="350" y="320" width="100" height="30" rx="3" fill="#fff"/>
                    <text x="400" y="340" font-family="Arial" font-size="12" fill="#000" text-anchor="middle">
                        DEMO-123
                    </text>
                ` : `
                    <!-- Side Mirrors -->
                    <ellipse cx="${config.bodyX + 100}" cy="230" rx="20" ry="10" fill="${color}"/>
                    <!-- Door Handles -->
                    <rect x="${config.bodyX + 140}" y="300" width="30" height="8" rx="4" fill="#888"/>
                    <rect x="${config.bodyX + 250}" y="300" width="30" height="8" rx="4" fill="#888"/>
                `}
                
                ${config.wheelSpacing > 0 ? `
                    <!-- Wheels -->
                    <ellipse cx="${400 - config.wheelSpacing/2}" cy="400" rx="40" ry="45" fill="#2c2c2c"/>
                    <ellipse cx="${400 - config.wheelSpacing/2}" cy="400" rx="25" ry="30" fill="#888"/>
                    <ellipse cx="${400 + config.wheelSpacing/2}" cy="400" rx="40" ry="45" fill="#2c2c2c"/>
                    <ellipse cx="${400 + config.wheelSpacing/2}" cy="400" rx="25" ry="30" fill="#888"/>
                ` : ''}
            `}
            
            <!-- Brand/Model Label -->
            <text x="400" y="550" font-family="Arial, sans-serif" font-size="24" fill="#666" text-anchor="middle">
                ${brand} ${model} - ${angle.charAt(0).toUpperCase() + angle.slice(1)} View
            </text>
        </svg>
    `;
    
    return 'data:image/svg+xml;base64,' + btoa(svg);
}

function generateBrandLogo(brandName, bgColor = '#ffffff', textColor = '#000000') {
    const svg = `
        <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="100" fill="${bgColor}"/>
            <text x="100" y="55" font-family="Arial, sans-serif" font-size="24" font-weight="bold" 
                  fill="${textColor}" text-anchor="middle">
                ${brandName}
            </text>
        </svg>
    `;
    
    return 'data:image/svg+xml;base64,' + btoa(svg);
}

function generateMapMarker(color = '#ff0000', label = '') {
    const svg = `
        <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
            <path d="M 20 35 L 12 20 Q 10 15 10 12 A 10 10 0 1 1 30 12 Q 30 15 28 20 Z" 
                  fill="${color}" stroke="#fff" stroke-width="2"/>
            <circle cx="20" cy="12" r="4" fill="#fff"/>
            ${label ? `<text x="20" y="16" font-size="8" fill="${color}" text-anchor="middle">${label}</text>` : ''}
        </svg>
    `;
    
    return 'data:image/svg+xml;base64,' + btoa(svg);
}

function adjustColor(color, amount) {
    const num = parseInt(color.replace('#', ''), 16);
    const r = Math.max(0, Math.min(255, (num >> 16) + amount));
    const g = Math.max(0, Math.min(255, ((num >> 8) & 0x00FF) + amount));
    const b = Math.max(0, Math.min(255, (num & 0x0000FF) + amount));
    return '#' + ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
}

// Export functions for use in other scripts
window.CarImages = {
    generateCarImage,
    generate360Image,
    generateBrandLogo,
    generateMapMarker
};