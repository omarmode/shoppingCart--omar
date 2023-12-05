//get data from localStorage
let username = localStorage.getItem("username");
let email = localStorage.getItem("email");
let products = JSON.parse(localStorage.getItem("products"));
let myProducts = products.filter((i) => i.isMe === "Y");

//variable
let userNameDom = document.getElementById("userName");
let emailDom = document.getElementById("email");
let productsLength = document.querySelector("#productsLength span");

userNameDom.innerHTML = username;
emailDom.innerHTML = email;
if (myProducts.length != 0) {
  productsLength.innerHTML = myProducts.length;
} else {
  productsLength.remove;
}
