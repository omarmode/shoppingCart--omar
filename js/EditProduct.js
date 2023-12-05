let products = JSON.parse(localStorage.getItem("products")) || productsDB;
let productId = JSON.parse(localStorage.getItem("EditProduct"));
let getProduct = products.find((i) => i.id === productId);

let productName = document.getElementById("product-name");
let productDesc = document.getElementById("product-desc");
let productSelectSize = document.getElementById("size");
let productSizeValue;
let productImage;
let UpdateForm = document.getElementById("Update-form");
let inputFile = document.getElementById("upLoad-image-file");

productName.value = getProduct.title;
//معناها ان اسم المنتج الي اخترته يتعمله تعديل ==الاسم الي هايتحط في ال form
productDesc.value = getProduct.desc;
productSelectSize.value = getProduct.size;
productImage = getProduct.images;
// /***** Event *****/
productSelectSize.addEventListener("change", getProductSizeValue);
UpdateForm.addEventListener("submit", EditProductFun);
inputFile.addEventListener("change", uploadImage);

// /***functions *****/
function getProductSizeValue(e) {
  productSizeValue = e.target.value;
}
function EditProductFun(e) {
  e.preventDefault();
  getProduct.title = productName.value;
  getProduct.desc = productDesc.value;
  getProduct.size = productSizeValue;
  getProduct.images = productImage;

  localStorage.setItem("products", JSON.stringify(products));

  setTimeout(() => {
    window.location = "index1.html";
  }, 1000);

  //   let allProducts = JSON.parse(localStorage.getItem("products")) || productsDB;
  //   let nameValue = productName.value;
  //   var decsValue = productDesc.value;
  //   if (nameValue && decsValue) {
  //     let obj = {
  //       id: allProducts ? allProducts.length + 1 : 1,
  //       title: nameValue,
  //       desc: decsValue,
  //       images: productImage,
  //       size: productSizeValue,
  //       qty: 1,
  //       isMe: "Y",
  //     };
  //     let newProducts = allProducts ? [...allProducts, obj] : [obj];
  //     localStorage.setItem("products", JSON.stringify(newProducts));

  //     productName.value = "";
  //     productDesc.value = "";
  //     productSelectSize.value = "";

  //     setTimeout(() => {
  //       window.location = "index1.html";
  //     }, 500);
  //   } else {
  //     alert("EnterData");
  //   }
}
// //****uploadImage ****/
let preview;
function uploadImage() {
  let file = this.files[0];
  console.log(file);
  let types = ["image/gif", "image/jpeg", "image/png"];
  if (types.indexOf(file.type) == -1) {
    alert("type not supported");
    return;
  }
  if (file.size > 2 * 1024 * 1024) {
    alert("image not Exceed 2MG");
    return;
  }
  getImageBase64(file);
  // productImage = URL.createObjectURL(file);
}

function getImageBase64(file) {
  let reader = new FileReader();
  //علشان يقدر يقرا ال file بتاعك
  reader.readAsDataURL(file);
  //بيحول ال file لي base 64

  reader.onload = function () {
    productImage = reader.result;
  };
  reader.onerror = function () {
    alert("Error");
  };
}
