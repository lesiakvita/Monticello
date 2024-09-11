const titles = [
  "SIMPLE & MODERN",
  "WHAT WE DO",
  "LATEST NEWS",
  "GALLERY",
  "GET IN TOUCH",
];

document.addEventListener("DOMContentLoaded", function () {
  const indicators = document.querySelectorAll(".indicator");
  const headerCaption = document.querySelector(".header__caption");
  let currentSlide = 0;

  function changeSlide(slideIndex) {
    indicators.forEach((ind) => {
      ind.classList.remove("active");
    });
    indicators[slideIndex].classList.add("active");
    headerCaption.textContent = titles[slideIndex];
    currentSlide = slideIndex;
  }

  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      changeSlide(index);
      resetTimer();
    });
  });

  function autoChange() {
    currentSlide = (currentSlide + 1) % titles.length;
    changeSlide(currentSlide);
  }

  let slideInterval = setInterval(autoChange, 3000);

  function resetTimer() {
    clearInterval(slideInterval);
    slideInterval = setInterval(autoChange, 3000);
  }
  changeSlide(0);
});
/////
document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const items = document.querySelectorAll(".news__item");
  const indicators = document.querySelector(".news__indicators");

  items.forEach((item, index) => {
    const button = document.createElement("button");
    button.addEventListener("click", () => {
      changeSlide(index);
    });
    indicators.appendChild(button);
  });

  function changeSlide(index) {
    currentIndex = index;
    const offset = index * -320;
    document.querySelector(
      ".news__content"
    ).style.transform = `translateX(${offset}px)`;
    updateIndicators();
  }

  function updateIndicators() {
    Array.from(indicators.children).forEach((button, index) => {
      button.classList.toggle("active", index === currentIndex);
    });
    items.forEach((item, index) => {
      item.classList.toggle("active", index === currentIndex);
    });
  }

  document.querySelector(".news__prev").addEventListener("click", () => {
    if (currentIndex > 0) changeSlide(currentIndex - 1);
  });

  document.querySelector(".news__next").addEventListener("click", () => {
    if (currentIndex < items.length - 1) changeSlide(currentIndex + 1);
  });
  changeSlide(0);
});
// //////////////////////////
let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}
function init() {
  var mapOptions = {
    zoom: 11,
    center: new google.maps.LatLng(40.67, -73.94),
    styles: [
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#e9e9e9" }, { lightness: 17 }],
      },
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [{ color: "#f5f5f5" }, { lightness: 20 }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [{ color: "#ffffff" }, { lightness: 17 }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#ffffff" }, { lightness: 29 }, { weight: 0.2 }],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{ color: "#ffffff" }, { lightness: 18 }],
      },
      {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [{ color: "#ffffff" }, { lightness: 16 }],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{ color: "#f5f5f5" }, { lightness: 21 }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#dedede" }, { lightness: 21 }],
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          { visibility: "on" },
          { color: "#ffffff" },
          { lightness: 16 },
        ],
      },
      {
        elementType: "labels.text.fill",
        stylers: [{ saturation: 36 }, { color: "#333333" }, { lightness: 40 }],
      },
      { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#f2f2f2" }, { lightness: 19 }],
      },
      {
        featureType: "administrative",
        elementType: "geometry.fill",
        stylers: [{ color: "#fefefe" }, { lightness: 20 }],
      },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [{ color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 }],
      },
    ],
  };

  var mapElement = document.getElementById("map");

  var map = new google.maps.Map(mapElement, mapOptions);

  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(40.67, -73.94),
    map: map,
    title: "Snazzy!",
  });
}
// /////////////////
function toggleDetails(id) {
  var details = document.getElementById(id);
  if (details.style.display === "none") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}
///////////////////////
function loadMoreImages() {
  const galleryGrid = document.getElementById("galleryGrid");
  const newImages = [
    "./img/s4/extra_1.jpeg",
    "./img/s4/extra_4.jpeg",
    "./img/s4/extra_3.jpeg",
    "./img/s4/extra_5.jpeg",
  ];

  newImages.forEach((src) => {
    const newItem = document.createElement("div");
    newItem.classList.add("gallery__item");
    const newImg = document.createElement("img");
    newImg.src = src;
    newImg.alt = "New Gallery Image";
    newImg.classList.add("gallery__image");
    newItem.appendChild(newImg);
    galleryGrid.appendChild(newItem);
  });
}
