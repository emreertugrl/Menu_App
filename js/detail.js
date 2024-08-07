import { menu } from "./db.js";
import { calculatePrice, elements } from "./helpers.js";
/*
URL'deki parametreleri yönetmek için  URLSearchParams classından örnek oluşturduk.
örneği oluştururken kendi URL'mizdeki parametreleri gönderdik.
*/

const search = window.location.search;
const searchParams = new URLSearchParams(search);
//* Get metoduna gönderdiğimiz değişkene göre değere ulaştık.
const paramid = searchParams.get("id");
//*URL'den aldığımız paramid değişkenini number çevridik ve sonrasında bu idli elemanı dizi içerisinde bulduk.
const product = menu.find((item) => item.id === Number(paramid));
console.log(product);

elements.outlet.innerHTML = `
<div class="d-flex justify-content-between align-items-center">
        <a href="/index.html">
          <i class="bi bi-house fs-1"></i>
        </a>

        <div class="">Anasayfa / ${
          product.category
        } / ${product.title.toLocaleLowerCase()}</div>
      </div>
      <h1 class="text-center my-3 shadow p-2 rounded">${product.title}</h1>
      <div class="d-flex justify-content-center align-items-center">
        <img
          src="${product.img}"
          class="img-fluid rounded"
          alt=""
          style="max-width: 480px"
        />
      </div>
      <div class="">
        <h3 class="my-5">
          Ürünün Kategorisi: <span class="text-success">${
            product.category
          }</span>
        </h3>
        <h3>Ürünün Fiyatı: <span class="text-success" > ${calculatePrice(
          product.price
        )} ₺</span></h3>
      </div>
      <p class="lead fs-3">
    ${product.desc}
      </p>
`;
