const sectionEnd = document.querySelector(".section_end");
const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const basket = document.querySelector(".basket");
const modalWrapper = document.querySelector(".modal_wrapper");
const cartItems = document.getElementById("cart_items");
const totalPriceElement = document.getElementById("total_price");
const dropdown=document.querySelector(".dropdown")
const login_icons=document.querySelector(".login_icons")
const API = "./data/data.json";



function getDatta() {
  let vaqt = new Date();
  days.textContent = vaqt.getDate();
  hours.textContent = vaqt.getHours();
  minutes.textContent = vaqt.getMinutes();
  seconds.textContent = vaqt.getSeconds();
}
setInterval(() => {
  getDatta();
}, 1000);
let listItem = [];
let cart = [];

fetch(API)
  .then((data) => {
    const data1 = data.json();
    return data1;
  })
  .then((data2) => {
    listItem = data2;
    // console.log(listItem);
    data2.forEach((item, index) => {
      sectionEnd.innerHTML += `
            <div class="cards">
            <div class="cards_img">
                    <img src="${item.img}" alt="">
                    <button onclick = "addToCart(${index})" > <p>Add To Cart</p></button>
                </div>
                <div class="cards_text">
                    <h1>${item.name}</h1>
                    <div class="summa">
                        <p>${item.summa}</p>
                        <p>$${item.chegirma}</p>
                    </div>
                    <div class="reyting">
                        <img src="./svg/yulduz.svg" alt="">
                        <img src="./svg/yulduz.svg" alt="">
                        <img src="./svg/yulduz.svg" alt="">
                        <img src="./svg/yulduz.svg" alt="">
                        <img src="./svg/yulduz.svg" alt="">
                        <p>(100)</p>
                    </div>
                </div>
                </div>
            `;
    });
  });

basket.addEventListener("click", () => {
  modalWrapper.style.display = "block";
});

function addToCart(id) {
  const product = listItem[id];
  console.log(product);
  const ProductIndex = cart.findIndex((item) => item.id === product.id);
  console.log(ProductIndex);

  if (ProductIndex !== -1) {
    // Agar mahsulot allaqachon savatda bo'lsa, miqdorini oshiramiz
    cart[ProductIndex].quantity++;
  } else {
    // Agar mahsulot savatda bo'lmasa, uni yangi mahsulot sifatida qo'shamiz

    cart.push({ ...product, quantity: 1 });
  }

  updateCart(); // Savatni yangilash
}

function updateCart() {
  cartItems.innerHTML = ""; // Savatni tozalaymiz
  let total = 0;
  cart.forEach((item) => {
    console.log(item);
    const itemTotal = item.chegirma * item.quantity;
    total += itemTotal;

    cartItems.innerHTML += `
          <div class="cart_item">
            <img src="${item.img}" alt="${item.name}">
            <div>
              <h3>${item.name}</h3>
              <p>Price: ${item.chegirma} sum</p>
              <p>Quantity: ${item.quantity}</p>
              <p>Total: ${itemTotal} sum</p>
            </div>
          </div>
        `;
  });

  totalPriceElement.textContent = total; // Umumiy narxni yangilash
}


// Bosilganda dropdownni ko'rsatish
login_icons.addEventListener('click', (e) => {
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  e.stopPropagation(); // Click eventni boshqa elementlarga tarqatmaslik uchun
});

// Dropdown yoki fa-user ustidan tashqariga bosilganda dropdownni yashirish
document.addEventListener('click', (e) => {
  if (!login_icons.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.style.display = 'none';
  }
});

// faUser.addEventListener("click",()=>{
//   dropdown.style.remove("hidden_1")
// })

// function drop(){
//   dropdown.style.display="block";
// }



