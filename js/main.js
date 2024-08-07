import { menu, buttonsData } from "./db.js";
import { calculatePrice, elements } from "./helpers.js";
// // !Olay izleyiciler
//function ile tanımlanırsa yeri önemli değil ama arrow functionda olay izleyici fonksiyonların altında olması lazım
// //*sayfa yüklendiği anda renderMenuItems fonksiyonunu çalıştırır ve menu parametresine gönderir.renderButtons fonksiyonu çalıştır ve seçili olarak hepsi kategorisini parametre olarak gönder.
// document.addEventListener("DOMContentLoaded", () => {
//   renderMenuItems(menu);
//   renderButtons("all");
// });

// //* Butonların bulunduğu alana tıklanıldığında searchCategory fonksiyonunu çalıştırır.
// elements.buttonsArea.addEventListener("click", searchCategory);

// ! Fonksiyonlar

// function searchCategory(e) {
//   //*tıklanılan butonun data özelliklerine eriştik ve değişkene aktardık.
//   const category = e.target.dataset.category;

//   //*tüm dizi elemanlarından yalnızca kategori değeri butonun kategori değeri ile eşleşirse bu ürünler getir.
//   const filtredMenu = menu.filter((item) => item.category === category);
//   if (category === "all") {
//     renderMenuItems(menu);
//   } else {
//     renderMenuItems(filtredMenu);
//   }

//   renderButtons(category);
// }
const searchCategory = (e) => {
  //*tıklanılan butonun data özelliklerine eriştik ve değişkene aktardık.
  const category = e.target.dataset.category;

  //*tüm dizi elemanlarından yalnızca kategori değeri butonun kategori değeri ile eşleşirse bu ürünler getir.
  const filtredMenu = menu.filter((item) => item.category === category);
  if (category === "all") {
    renderMenuItems(menu);
  } else {
    renderMenuItems(filtredMenu);
  }

  renderButtons(category);
};
//?----------------------------------------------------------------------
//*ekrana menü elemanlarını aktaracak fonksiyondur.
// function renderMenuItems(menuItems) {
//   //*gönderilen verileri dönüp her biri için a etiketi oluşturur.
//   let menuHTML = menuItems.map(
//     (item) =>
//       `
//     <a
//     id="card"
//     href="/productDetail.html"
//     class="text-decoration-none text-black d-flex flex-md-row flex-column gap-2"
//     >
//     <img src="${item.img}" alt="pasta" class="rounded shadow" />
//     <div class="">
//       <div class="d-flex justify-content-between align-item-center">
//         <h5>${item.title}</h5>
//         <p class="text-success">${item.price}₺</p>
//       </div>
//       <p class="lead">${item.desc}
//       </p>
//     </div>
//     </a>
//     `
//   );

//   //* map ile gelen virgülleri kaldırdık.
//   menuHTML = menuHTML.join(" ");
//   //*oluşturuğumuz menuHTML değişkenini ekrana aktardık.
//   elements.menuArea.innerHTML = menuHTML;
// }

const renderMenuItems = (menuItems) => {
  //*gönderilen verileri dönüp her biri için a etiketi oluşturur.
  let menuHTML = menuItems.map(
    (item) =>
      `
      <a 
      id="card"
      href="/productDetail.html?id=${item.id}&category=${item.category}&price=${
        item.price
      }"
      class="text-decoration-none text-black d-flex flex-md-row flex-column gap-2"
      >
      <img src="${item.img}" alt="pasta" class="rounded shadow" />
      <div class="">
        <div class="d-flex justify-content-between align-item-center">
          <h5>${item.title}</h5>
          <p class="text-success">${calculatePrice(item.price)}₺</p>
        </div>
        <p class="lead">${item.desc}
        </p>
      </div>
      </a>
      `
  );

  //* map ile gelen virgülleri kaldırdık.
  menuHTML = menuHTML.join(" ");
  //*oluşturuğumuz menuHTML değişkenini ekrana aktardık.
  elements.menuArea.innerHTML = menuHTML;
};
//?----------------------------------------------------------------------

// function renderButtons(active) {
//   elements.buttonsArea.innerHTML = "";
//   //*Yeni butonlar oluşturmak için buttonsData içerisindeki verileri dönüp her bir veri için bir button oluştururuz.
//   buttonsData.forEach((btn) => {
//     //*Her bir veri için bir HTML buton etiketi oluştur
//     const buttonEle = document.createElement("button");
//     //*oluşturduğumuz butonlara class ekledik.
//     buttonEle.className = "btn btn-outline-dark filter-btn";
//     //*oluşturulan buton içeriğini değiştirme
//     buttonEle.textContent = btn.text;
//     //*oluşturduğumuz butonun hangi kategoride olduğunu bilgisini button elementine ekledik.
//     buttonEle.dataset.category = btn.value;
//     //*Eğer ki active ile buton eşleşirse ona farklı class ekle.
//     if (btn.value === active) {
//       buttonEle.classList.add("bg-dark", "text-light");
//     }

//     //*HTML'e gönderme
//     elements.buttonsArea.appendChild(buttonEle);
//   });
// }
const renderButtons = (active) => {
  elements.buttonsArea.innerHTML = "";
  //*Yeni butonlar oluşturmak için buttonsData içerisindeki verileri dönüp her bir veri için bir button oluştururuz.
  buttonsData.forEach((btn) => {
    //*Her bir veri için bir HTML buton etiketi oluştur
    const buttonEle = document.createElement("button");
    //*oluşturduğumuz butonlara class ekledik.
    buttonEle.className = "btn btn-outline-dark filter-btn";
    //*oluşturulan buton içeriğini değiştirme
    buttonEle.textContent = btn.text;
    //*oluşturduğumuz butonun hangi kategoride olduğunu bilgisini button elementine ekledik.
    buttonEle.dataset.category = btn.value;
    //*Eğer ki active ile buton eşleşirse ona farklı class ekle.
    if (btn.value === active) {
      buttonEle.classList.add("bg-dark", "text-light");
    }

    //*HTML'e gönderme
    elements.buttonsArea.appendChild(buttonEle);
  });
};
//?----------------------------------------------------------------------

// !Olay izleyiciler

//*sayfa yüklendiği anda renderMenuItems fonksiyonunu çalıştırır ve menu parametresine gönderir.renderButtons fonksiyonu çalıştır ve seçili olarak hepsi kategorisini parametre olarak gönder.
document.addEventListener("DOMContentLoaded", () => {
  renderMenuItems(menu);
  renderButtons("all");
});

//* Butonların bulunduğu alana tıklanıldığında searchCategory fonksiyonunu çalıştırır.
elements.buttonsArea.addEventListener("click", searchCategory);
