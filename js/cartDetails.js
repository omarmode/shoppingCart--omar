let products = JSON.parse(localStorage.getItem("products"));
console.log(products);
let productId = localStorage.getItem("productId");
let productDetails = products.find((item) => item.id == productId);
let itemDom = document.querySelector(".item-details");

itemDom.innerHTML = `
<img src="${productDetails.images}" alt="">
<h2>"${productDetails.title}"</h2>
<p>"${productDetails.desc}</p>
<span>size "${productDetails.size}"</span><br>
<span>quantity "${productDetails.qty}"</span>`;
