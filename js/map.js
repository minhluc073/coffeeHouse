mapboxgl.accessToken =
  "pk.eyJ1IjoidGhlbWVzZmxhdCIsImEiOiJjbGt3NGxtYncwa2F2M21saHM3M21uM3h2In0.9NbzjykXil1nELxQ1V8rkA";
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12", // style URL
  center: [-73.991811, 40.70302], // starting position [lng, lat]
  zoom: 14,
});

const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-73.992111, 40.703751],
      },
      properties: {
        title: "New York Cafe",
        rate: "4.8",
        imgSrc: "images/banner-coffee/banner7.jpg",
      },
    },
  ],
};

for (const feature of geojson.features) {
  // create a HTML element for each feature
  const el = document.createElement("div");
  el.className = "marker";

  // make a marker for each feature and add it to the map
  new mapboxgl.Marker(el)
    .setLngLat(feature.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
          `<img src="${feature.properties.imgSrc}" alt='image' class="img-cf" /><div><p>${feature.properties.title}</p><span><i class="icon-rate"></i>${feature.properties.rate}</span></div>`
        )
    )
    .addTo(map);
}

document.addEventListener("DOMContentLoaded", () => map.resize());
