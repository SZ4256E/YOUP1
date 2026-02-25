const whatsappNumber = "0784686562";

const products = [
  { name: "ملصق أنمي 1", price: 10, image: "img/p1.jpg" },
  { name: "ملصق أنمي 2", price: 10, image: "img/p2.jpg" },
  { name: "ملصق أنمي 3", price: 10, image: "img/p3.jpg" }
];

let cart = [];

const productsDiv = document.getElementById("products");
const cartDiv = document.getElementById("cart");

// عرض المنتجات
products.forEach((p, i) => {
  const d = document.createElement("div");
  d.className = "product";
  d.innerHTML = `
    <img src="${p.image}">
    <h3>${p.name}</h3>
    <p>${p.price} درهم</p>
    <button onclick="addToCart(${i})">زيد للسلة</button>
  `;
  productsDiv.appendChild(d);
});

// إضافة للسلة
function addToCart(i) {
  cart.push(products[i]);
  renderCart();
}

// عرض السلة
function renderCart() {
  cartDiv.innerHTML = "";
  cart.forEach((p, i) => {
    cartDiv.innerHTML += `
      <div>
        ${p.name} - ${p.price}dh
        <button onclick="removeFromCart(${i})">❌</button>
      </div>
    `;
  });
}

// حذف من السلة
function removeFromCart(i) {
  cart.splice(i, 1);
  renderCart();
}

// طلب عبر واتساب
function orderWhatsApp() {
  if (cart.length === 0) {
    alert("السلة فارغة");
    return;
  }

  let msg = "طلب جديد:%0A";
  cart.forEach(p => {
    msg += `- ${p.name} (${p.price}dh)%0A`;
  });

  window.open(`https://wa.me/212${whatsappNumber}?text=${msg}`);
}
const quantity = document.getElementById("quantity").value;
console.log("عدد الستيكرز:", quantity);
