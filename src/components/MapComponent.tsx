'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapComponent = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Warsaw coordinates
    const warsawCoords: [number, number] = [52.2297, 21.0122];

    // Initialize map
    const map = L.map(mapRef.current).setView(warsawCoords, 13);
    mapInstanceRef.current = map;

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 18,
    }).addTo(map);

    // Custom marker icon
    const customIcon = L.divIcon({
      className: 'custom-marker',
      html: `
        <div style="
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #deb841, #de9e36);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(222, 184, 65, 0.4);
          border: 3px solid white;
        ">
          <div style="
            width: 20px;
            height: 20px;
            background: #37323e;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            color: #deb841;
            font-size: 12px;
          ">BC</div>
        </div>
      `,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40],
    });

    // Add marker
    const marker = L.marker(warsawCoords, { icon: customIcon }).addTo(map);

    // Add popup
    marker.bindPopup(`
      <div style="text-align: center; padding: 10px;">
        <h3 style="margin: 0 0 5px 0; color: #37323e; font-size: 16px;">Brewcode</h3>
        <p style="margin: 0; color: #6d6a75; font-size: 14px;">ul. Przykładowa 123<br>00-000 Warszawa</p>
      </div>
    `);

    // Add some styling to the map
    const style = document.createElement('style');
    style.textContent = `
      .leaflet-container {
        border-radius: 12px;
        overflow: hidden;
      }
      .leaflet-popup-content-wrapper {
        border-radius: 8px;
      }
      .leaflet-popup-tip {
        background: white;
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-64 rounded-lg shadow-lg"
      style={{ minHeight: '256px' }}
    />
  );
};

export default MapComponent; 