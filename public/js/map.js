  maptilersdk.config.apiKey = mapToken;
  const map = new maptilersdk.Map({
    container: 'map', // container id
    style: maptilersdk.MapStyle.STREETS,
    center: [77.209, 28.6139], // starting position [lng, lat]
    zoom: 10 // starting zoom
  });
