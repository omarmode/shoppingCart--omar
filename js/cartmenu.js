let cartsProductDom = document.querySelector(".carts-products div");
let badgeDom = document.querySelector(".badge");

//check if there is item in localStorage
let addItem = localStorage.getItem("productsInCart") //معناها هل الاسم ده موجود في localStorage?
  ? JSON.parse(localStorage.getItem("productsInCart")) //لو ايوه حولها لي object
  : []; //لو لا هاتها array فاضيه

if (addItem) {
  addItem.map((item) => {
    cartsProductDom.innerHTML += `<p>${item.title} ${item.qty}</p>`;
  });
  badgeDom.innerHTML += addItem.length;
}
