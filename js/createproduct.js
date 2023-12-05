let productName = document.getElementById("product-name");
let productDesc = document.getElementById("product-desc");
let productSelectSize = document.getElementById("size");
let productSizeValue;
let productImage;
let productForm = document.getElementById("create-form");
let inputFile = document.getElementById("upLoad-image-file");

/***** Event *****/
productSelectSize.addEventListener("change", getProductSizeValue);
productForm.addEventListener("submit", createProductFun);
inputFile.addEventListener("change", uploadImage);

/***functions *****/
function getProductSizeValue(e) {
  productSizeValue = e.target.value;
}
function createProductFun(e) {
  e.preventDefault();
  let allProducts = JSON.parse(localStorage.getItem("products")) || productsDB;
  let nameValue = productName.value;
  var decsValue = productDesc.value;
  if (nameValue && decsValue) {
    let obj = {
      id: allProducts ? allProducts.length + 1 : 1,
      title: nameValue,
      desc: decsValue,
      images: productImage,
      size: productSizeValue,
      qty: 1,
      isMe: "Y",
    };
    let newProducts = allProducts ? [...allProducts, obj] : [obj];
    localStorage.setItem("products", JSON.stringify(newProducts));

    productName.value = "";
    productDesc.value = "";
    productSelectSize.value = "";

    setTimeout(() => {
      window.location = "index1.html";
    }, 500);
  } else {
    alert("EnterData");
  }
}
//****uploadImage ****/
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
