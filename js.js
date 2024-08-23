const sectionEnd = document.querySelector(".section_end");
const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const basket = document.querySelector(".basket");
const modalWrapper = document.querySelector(".modal_wrapper");
const cartItems = document.getElementById("cart_items");
const totalPriceElement = document.getElementById("total_price");
const API = "./data/data.json";

const section=document.querySelector("section");
const login_1=document.querySelector(".login_1");
const signup=document.querySelector(".signup")
const hero=document.querySelector(".hero");
const register=document.querySelector("#register")
const signup_form=document.querySelector(".signup_form")
const login_form=document.querySelector(".login_form")
const ogohlantirish=document.querySelector(".ogohlantirish")
const ogohlantirish1=document.querySelector(".ogohlantirish_1")

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

register.addEventListener("click",(e)=>{
  e.preventDefault();
  section.classList.add('hidden_1');
  hero.classList.add('hidden_1');
  signup.classList.remove('hidden_1');
})

signup_form.addEventListener("submit",(e)=>{
  e.preventDefault();
  const signupName=signup_form.signup_name.value.trim();
  const signupEmail=signup_form.signup_email.value.trim();
  const signupPasword=signup_form.signup_pasword.value.trim();
  
  if(signupName=="samandar" && signupEmail=="dolimov@gmail.com" && signupPasword==12345678){
    console.log(signupName,signupEmail,signupPasword);
    signup.classList.add('hidden_1');
    login_1.classList.remove('hidden_1');
  }
  else{
    // alert("xato")
    ogohlantirish.style.display="block"
    setInterval(()=>{
      ogohlantirish.style.display="none"
    },3000)
  }
  signup_form.reset()
})

login_form.addEventListener("submit",(e)=>{
  e.preventDefault()
  const loginEmail=login_form.login_email.value.trim()
  const loginPasword=login_form.login_pasword.value.trim()
  if(loginEmail=="dolimov@gmail.com" && loginPasword==12345678){
    section.classList.remove('hidden_1');
    hero.classList.remove('hidden_1');
    login_1.classList.add('hidden_1');
  }
  else{
    // alert("xato")
    ogohlantirish1.style.display="block"
    setInterval(()=>{
      ogohlantirish1.style.display="none"
    },3000)
  }
  login_form.reset()
})


