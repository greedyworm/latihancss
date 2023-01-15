// SEARCH SECTION

const featuresCard = document.getElementById("features-cards");

const features = [
  { icon: "latihancss/assets/icons/Icon-propertybaru.png", title: "Property Baru", subtitle: "Rumah impian kini jadi kenyataan. Beli rumah baru dengan fasilitas terbaik dengan lingkungan yang nyaman." },
  { icon: "latihancss/assets/icons/Icon Sewa.png", title: "Sewa Rumah", subtitle: "Beli rumah yang indah untuk keluarga anda, pilihan terbaik untuk tempat tinggal keluargamu." },
  { icon: "../assets/icons/Icon Beli.png", title: "Beli Rumah", subtitle: "Beli rumah sempurna dengan harga terbaik kualitas terjamin dari sumber terpercaya." },
];

featuresCard.innerHTML = features
  .map((card) => {
    return `<div class='card'>
    <div class='card-icon'><img src='${card.icon}' alt='beli rumah'/></div>
    <div class='card-title'>${card.title}</div>
    <div class='card-subtitle'>${card.subtitle}</div>
    </div>`;
  })
  .join("");

// RECOMENDATION SECTION

const list = document.getElementById("recomendation-list");

const productList = [
  { image: "../assets/images/Rekomendasi1.png", price: "600.000.000", address: "Jl Raden Wijaya No.92", status: "beli", bedroom: "4", bathroom: "5", wide: "380m2" },
  { image: "../assets/images/Rekomendasi2.png", price: "500.000.000", address: "Jl.Raden Wijaya No.90", status: "beli", bedroom: "3", bathroom: "6", wide: "360m2" },
  { image: "../assets/images/Rekomendasi3.png", price: "650.000.000", address: "Jl.Raden Wijaya No.70", status: "beli", bedroom: "3", bathroom: "4", wide: "250m2" },
  { image: "../assets/images/Rekomendasi4.png", price: "800.000.000", address: "Jl.Raden Wijaya No.88", status: "beli", bedroom: "4", bathroom: "5", wide: "350m2" },
  { image: "../assets/images/Rekomendasi5.png", price: "950.000.000", address: "Jl.Raden Wijaya No.90", status: "beli", bedroom: "5", bathroom: "5", wide: "400m2" },
  { image: "../assets/images/Rekomendasi6.png", price: "50.000.000/bulan", address: "Jl.Raden Wijaya No.87", status: "sewa", bedroom: "3", bathroom: "3", wide: "300m2" },
];

list.innerHTML = productList
  .map((house) => {
    return `<div class='list-item'>
      <div class="house-image">
        <img src="${house.image}" alt="" />
      </div>
      <div class='house-text'>
        <div class="house-price">Rp ${house.price}</div>
        <div class="house-address">${house.address}</div>
        <div class="house-status">${house.status}</div>
        <div class='house-spec'>
            <div class="house-room">
                <div class='room'>
                <span class="room-icon" ;'><img src='../assets/icons/Icon Kamar Tidur.png' alt='' /></span>
                <div class="room-number">${house.bedroom}</div>
                </div>
                <div class="room-title">Kamar Tidur</div>
            </div>
            <div class="house-room">
                <div class='room'>
                <span class="room-icon"><img src='../assets/icons/Icon Kamar Mandi.png' alt='' /></span>
                <div class="room-number">${house.bathroom}</div>
                </div>
                <div class="room-title">Kamar Mandi</div>
            </div>
            <div class="house-room">
                <div class='room'>
                <span class="room-icon"><img src='../assets/icons/Icon Luas Tanah.png' alt='' /></span>
                <div class="room-number">${house.wide}</div>
                </div>
                <div class="room-title">Luas Rumah</div>
            </div>
        </div>
      </div>
    </div>`;
  })
  .join("");

//   CAROUSEL SECTION
const carousel = document.getElementById("slider-image");

const carouselList = [
  { image: "../assets/images/Fitur Rumah 1.png", titleText: "Kamar Tidur", subtitleText: "Rumah minimalis Tipe-A1", priceText: "200" },
  { image: "../assets/images/Fitur Rumah 2.png", titleText: "Kamar Tidur", subtitleText: "Rumah minimalis Tipe-A2", priceText: "200" },
  { image: "../assets/images/Fitur Rumah 3.png", titleText: "Kamar Tidur", subtitleText: "Rumah minimalis Tipe-A3", priceText: "200" },
  { image: "../assets/images/Fitur Rumah 4.png", titleText: "Kamar Tidur", subtitleText: "Rumah minimalis Tipe-A4", priceText: "200" },
  { image: "../assets/images/Fitur Rumah 1.png", titleText: "Kamar Tidur", subtitleText: "Rumah minimalis Tipe-A5", priceText: "200" },
  { image: "../assets/images/Fitur Rumah 2.png", titleText: "Kamar Tidur", subtitleText: "Rumah minimalis Tipe-A6", priceText: "200" },
  { image: "../assets/images/Fitur Rumah 3.png", titleText: "Kamar Tidur", subtitleText: "Rumah minimalis Tipe-A7", priceText: "200" },
];

carousel.innerHTML = carouselList
  .map((slider) => {
    return `<div class="carousel">
        <div class='carousel-image'>
            <img src='${slider.image}' alt='#' />
        </div>
        <div class="carousel-text">
            <div class='text-title'>${slider.titleText}</div>
            <div class='text-subtitle'>${slider.subtitleText}</div>
            <div class='text-price'>Rp ${slider.priceText} jt</div>
            <div class='text-button'> Lihat Rumah
            </div>
        </div>
    </div>`;
  })
  .join("");
