// Representative points for places and walking districts, in WGS84.
const spotPoints = {
  gyeongbok:[37.5796,126.977],bukchon:[37.5826,126.983],jumunjin:[37.894,128.832],corridor:[37.5787,126.977],
  hyundai:[37.5259,126.9284],seongsu:[37.5435,127.0533],yeonnam:[37.562,126.925],mangwon:[37.556,126.906],
  hannam:[37.536,127.001],euljiro:[37.566,126.992],seochon:[37.579,126.97],haebangchon:[37.545,126.985],
  songridan:[37.51,127.11],seoulforest:[37.544,127.037],changdeok:[37.58,126.991],changgyeong:[37.5788,126.995],
  deoksu:[37.566,126.975],gyeonghui:[37.571,126.969],unhyeon:[37.576,126.987],namsangol:[37.559,126.994],
  eunpyeong:[37.641,126.938],jeonjuhanok:[35.815,127.153],haenggung:[37.282,127.014],gyochon:[35.829,129.214],
  nami:[37.792,127.526],nseoul:[37.552,126.988],noksapyeong:[37.535,126.987],mongted:[37.285,127.014],
  gongjin:[36.199,129.339],hanmi:[37.473,126.637],sunshine:[36.126,127.1],hanbyeok:[35.812,127.161],
  boseong:[34.714,127.081],mungyeong:[36.772,128.075],yeouido:[37.529,126.933],ttukseom:[37.53,127.067],
  haneul:[37.568,126.885],seonyudo:[37.544,126.9],olympic:[37.521,127.12],dadaepo:[35.047,128.966],
  gwangalli:[35.154,129.119],anmok:[37.772,128.948],hyeopjae:[33.394,126.239],suncheon:[34.885,127.509]
};
let exploreMap, markers;
function showSpotPins(selected) {
  const container = document.getElementById('spotPins');
  if (!window.L || !spotPoints[selected.id]) return;
  $('#nearbyMapFrame').hidden = true;
  container.hidden = false;
  if (!exploreMap) {
    exploreMap = L.map(container,{scrollWheelZoom:false});
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(exploreMap);
    markers = L.layerGroup().addTo(exploreMap);
  }
  markers.clearLayers();
  for (const spot of spots) {
    const point = spotPoints[spot.id];
    if (!point) continue;
    const active = spot.id===selected.id;
    const name = (spot[lang] || spot.ko)[0];
    const marker = L.marker(point,{title:name,alt:name,zIndexOffset:active?1000:0,icon:L.divIcon({className:'pin-shell',html:active?'◆':'●',iconSize:[24,24],iconAnchor:[12,12]})}).addTo(markers);
    marker.on('click',() => {
      selectMapSpot(spot.id,false);
      showSpotDetail(spot.id);
    });
    if (active) marker.bindTooltip(name,{permanent:true,direction:'top',offset:[0,-10]}).openTooltip();
  }
  exploreMap.setView(spotPoints[selected.id],14);
  requestAnimationFrame(() => exploreMap.invalidateSize());
}
function selectMapSpot(id,scroll=true) {
  director.posePreview = false;
  director.spotId = id;
  director.customPhotoUrl = null;
  updateCameraUI();
  renderNearbyPage();
  if (scroll) $('.nearby-map-card').scrollIntoView({block:'center',behavior:'smooth'});
}

const salonCache = new Map();
async function showSalonPins(spot, context) {
  const point = spotPoints[spot.id];
  if (!point || !window.L) return;
  try {
    let places = salonCache.get(spot.id);
    if (!places) {
      const query = `[out:json][timeout:8];nwr["shop"="hairdresser"]["name"](around:1600,${point[0]},${point[1]});out center 50;`;
      const response = await fetch('https://overpass-api.de/api/interpreter?data='+encodeURIComponent(query),{signal:AbortSignal.timeout(10000)});
      if (!response.ok) return;
      const result = await response.json();
      places = result.elements.map(item => ({name:item.tags.name,point:item.center || item})).filter(item=>Number.isFinite(item.point.lat)&&Number.isFinite(item.point.lon));
      salonCache.set(spot.id,places);
    }
    if (!places.length || discoveryContext !== context || activeTab !== 'nearby') return;
    showSpotPins(spot);
    markers.clearLayers();
    const bounds = L.latLngBounds([point]);
    for (const salon of places) {
      const location = [salon.point.lat,salon.point.lon];
      bounds.extend(location);
      const title = Object.assign(document.createElement('b'),{textContent:salon.name});
      const pin = L.marker(location,{title:salon.name,alt:salon.name,icon:L.divIcon({className:'pin-shell',html:'✂',iconSize:[28,28],iconAnchor:[14,14]})}).bindPopup(title).addTo(markers);
      pin.on('click',() => {
        $('#nearbyMapLabel').textContent = salon.name;
        $('#nearbyMapLink').href = 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(salon.name+' '+spot.ko[1]);
      });
    }
    exploreMap.fitBounds(bounds,{padding:[20,20],maxZoom:16});
  } catch { /* The Google Maps salon search stays visible when OSM data is unavailable. */ }
}
