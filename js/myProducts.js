let productDom = document.querySelector(".product");
let noItemsDom = document.querySelector(".noItems");

let drawproducts;
(drawproducts = function (products = []) {
  let myProducts = products.filter((item) => item.isMe === "Y");
  if (myProducts.length != 0) {
    console.log("yes");
    let productsul = myProducts.map((item) => {
      return `
        <div class="product-item" style="border:${
          item.isMe === "Y" ? "2px solid #08f" : ""
        }" >
                    <img src="${item.images}" 
                    class="product-img" alt="irpods">
                       <div class="product-item-decs">
                        <a onclick='saveItemData(${item.id})'>${item.title}</a>
                        <p>${item.desc}</p>
                        <span>size:${item.size}</span>
                        ${
                          item.isMe === "Y"
                            ? "<button class='Edit-product' onclick='EditProduct(" +
                              item.id +
                              ")' >Edit product</button>"
                            : ""
                        }
                        <button class="edit-product" onclick='DeleteProduct(${
                          item.id
                        })'>DeleteProduct</button>
                       </div>    
                       
                       </div>
                </div>   
        
        `;
    });
    productDom.innerHTML = productsul.join("");
  } else {
    noItemsDom.innerHTML = "No Products";
  }
})(JSON.parse(localStorage.getItem("products")) || productsDB);
//شرح الداله
//1-بجيب المنتجات كلها بعدين اعمل filter
//اخد المنتجات بعد الفلتر واعديها علي الماب
//*edit product
function EditProduct(id) {
  localStorage.setItem("EditProduct", id);
  window.location = "EditProduct.html";
}

function DeleteProduct(id) {
  let products = JSON.parse(localStorage.getItem("products")) || productsDB;
  let myProducts = products.filter((item) => item.isMe === "Y");
  let filtered = myProducts.filter((i) => i.id !== id);
  //   //معناها هاتلي كل المنتجات من ال localStorage or productsDB from data.js
  //   // بعدها هات المنتجات كلها واعملها فلتر وسميها myProducts
  //   // بعد كده اعلمها فلتر لو ال id ==id شيله و سيب الباقي
  let clickedItem = myProducts.find((i) => i.id === id);
  products = products.filter((i) => i.id !== clickedItem.id);
  localStorage.setItem("products", JSON.stringify(products));
  drawproducts(filtered);
}
