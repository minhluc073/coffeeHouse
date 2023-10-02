mapboxgl.accessToken =
  "pk.eyJ1IjoidGhlbWVzZmxhdCIsImEiOiJjbGt3NGxtYncwa2F2M21saHM3M21uM3h2In0.9NbzjykXil1nELxQ1V8rkA";
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12", // style URL
  center: [-74.249923, 40.67096], // starting position [lng, lat]
  zoom: 15.3,
});

const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-74.251468, 40.67254],
      },
      properties: {
        title: "An Coffee",
        rate: "4.8",
        imgSrc: "../images/banner-coffee/cf-store1.jpg",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-74.248564, 40.673232],
      },
      properties: {
        title: "An Coffee",
        rate: "4.7",

        imgSrc: "../images/banner-coffee/cf-store5.jpg",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-74.250455, 40.673137],
      },
      properties: {
        title: "An Coffee",
        rate: "4.7",

        imgSrc: "../images/banner-coffee/cf-store3.jpg",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-74.251675, 40.674093],
      },
      properties: {
        title: "An Coffee",
        rate: "4.7",
        imgSrc: "../images/banner-coffee/cf-store2.jpg",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-74.249574, 40.671783],
      },
      properties: {
        title: "Coffee Lab",
        rate: "4.8",

        imgSrc: "../images/banner-coffee/cf-store5.jpg",
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
          `<img src="${feature.properties.imgSrc}" alt='image' class="img-cf" /><div><p>${feature.properties.title}</p><span><i class="icon-star"></i>${feature.properties.rate}</span></div>`
        )
    )
    .addTo(map);
}
