let userinfo = document.querySelector("#userinfo");
let userdom = document.querySelector("#user1");
let lienks = document.querySelector("#lienks");
let logout = document.querySelector("#log-out");
// let username=localStorage.getItem("username");
if (localStorage.getItem("username")) {
  userinfo.style.display = "flex";
  lienks.remove();
  userdom.innerHTML = localStorage.getItem("username");
}
logout.addEventListener("click", function () {
  localStorage.clear();
  setTimeout(() => {
    window.location = "regester.html";
  }, 1500);
});
// let productsInCart=localStorage.getItem("productsInCart");
let productDom = document.querySelector(".product");
// if(productsInCart){
//     let items=JSON.parse(productsInCart)
//     drawCartsProductUI(items);
// }
let noItemsDom = document.querySelector(".noItems");

function drawCartsProductUI(AllProducts) {
  if (JSON.parse(localStorage.getItem("productsFav")).length === 0)
    noItemsDom.innerHTML = "there is no item";

  let products = JSON.parse(localStorage.getItem("productsFav")) || AllProducts;
  let productsul = products.map((item) => {
    return `
        <div class="product-item">
                    <img src="${item.images}" 
                    class="product-img" alt="irpods">
                       <div class="product-item-decs">
                        <h2>${item.title}</h2>
                        <p>${item.desc}</p>
                        <span>size:${item.size}</span><br>
                        <span>quantity:${item.qty}</span>
                       </div>    
                       <div class="product-item-actions">
                                <button class="add-to-cart" onclick="RemoveFromCart(${item.id})">RemoveFromCart</button>
                                
                       </div>
                </div>   
        
        `;
  });
  productDom.innerHTML = productsul.join("");
}

drawCartsProductUI();

function RemoveFromCart(id) {
  let productsFav = localStorage.getItem("productsFav");
  if (productsFav) {
    let items = JSON.parse(productsFav);
    let felteredItem = items.filter((item) => item.id !== id);
    //يعني لو دوست علي اول عنصر شيله وسيب الباقي لو كان العنصر  مش بيساوي ال id
    //او لو رقم العنصر الي انا دوست عليه بيساوي  نفس الid شيله وسيب الباقي
    //بنده ال function عشان ترجع ترسم العناصر بعد التعديل
    localStorage.setItem("productsFav", JSON.stringify(felteredItem));
    //بعد كده احفظ العناصر الجديده وحول العناصر من object to string
    drawCartsProductUI(felteredItem);
  }
}
