localStorage.setItem("name", "omar");
// console.log(localStorage.getItem("name"))
// //لو عايز اضيف داتا
// //لو عايز امسح داتا بكتب
localStorage.removeItem("name");
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

//defined products
// let cartsProductDom = document.querySelector(".carts-products div");
let cartsProductMenu = document.querySelector(".carts-products");

// let badgeDom = document.querySelector(".badge");
let shoppingCartIcon = document.querySelector(".shopping-cart");
let productDom = document.querySelector(".product");
let products = productsDB;

shoppingCartIcon.addEventListener = ("click", openCartProduct);
//display products
let drawproducts;
(drawproducts = function (products = []) {
  let productsul = products.map((item) => {
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
                       </div>    
                       <div class="product-item-actions">
                                <button class="add-to-cart" onclick="addtocart(${
                                  item.id
                                })">Add To Cart</button>
                                <i class="fav far fa-heart" style="color:${
                                  item.liked == true ? "red" : ""
                                }"
                                 onclick="addToFav(${item.id})" ></i>
                       </div>
                </div>   
        
        `;
  }); //("+item.id+")==(${item.id})
  //("+item.id+") بتتكتب في حالة ان الكود كله جوه علامة("")
  //<!--معناها لما اجي ادوس علي القلب لو في ال localStorage liked=true يبقا لون القلب بلون احمر>
  productDom.innerHTML = productsul.join(""); //علشان اشيل النقطه الي فوق كل رسمه products بضيف كلمه join("")
})(JSON.parse(localStorage.getItem("products")) || products);
//هنا انا ها احفظ المنتجات الي جايه من ال localStorage او الي جايه من  file بتاع ال data
//يعني هو لو ملاقاش حاجه في localStorage
//هايجيب الي في file data.js
//ولو لقاء حاجه في ال localStorage هايستخدم (products) الموجوده
// drawproducts();
//عملنا let فيه اربعه items بتوعنا علي شكل Array
//2- حطينا في كل item{id, title,size ,images}الي هايتغيروا بالترتيب
//3-عملنا function
//.map((item دي بمسابه كل item من الاربعه الي في ال array))
//`نقدر نكتب اي كود html داخل العلامتين دول ```
//علشان نغير اي كود داخل العلامتين دول بنكتب ${}

// //ckeck if there is item in localStorage
// let addItem = localStorage.getItem("productsInCart") //معناها هل الاسم ده موجود في localStorage?
//   ? JSON.parse(localStorage.getItem("productsInCart")) //لو ايوه حولها لي object
//   : []; //لو لا هاتها array فاضيه

// if (addItem) {
//   addItem.map((item) => {
//     cartsProductDom.innerHTML += `<p>${item.title} ${item.qty}</p>`;
//   });
//   badgeDom.innerHTML += addItem.length;
// }
//انا هنا بفحص لو لقيت addItem
//اضيف ال <P> في ال div ال .carts-products div
//الي هي الايكون
// let allItem = [];//انا لغيت دي علشان == addItem
//شرح ال allItem
//في الاول عايز اشوف
//هل ال chosenItem الي انا ضفته في العربيه موجود ولا لا
//انا مش عايز المنتجات تتكرر كل مره ادوس علي addtocart
//فا عملت array فاضيه
//***AddToCart****
function addtocart(id) {
  if (localStorage.getItem("username")) {
    let products = JSON.parse(localStorage.getItem("products")) || products;
    //||products هما الاربعه المنتجات بتوعنا
    //اما ال let products دي الي هاحفظ فيها البيانات سوا الي جايه من ال dataBase او من الي جايه من file ال data
    let chosenItem = products.find((item) => item.id === id);
    //find بترجع العنصر نفسه مش ال array
    let isProductInCart = addItem.some((i) => i.id === chosenItem.id);
    // some بترجع true or false ***find بترجع object
    //شرح ال some هل ال addItem.id كان موجود و هو هو بتاع ال chosenItem?
    //لو لا فا تروح علي ال else وضيف العنصر ده
    //لو كان موجود روح لل if
    //دي ال array الي هاضيف فيها العنصر الجديد
    //find يعني عايز ادور جواها
    //هل ال (id) الي في allItem هو هو نفس ال id الي في chosenItem
    //لو في حالة ان ال id هو هو زودلي بس ال qty الي احنا لسه ضايفينه في صفحه ال data.js
    // console.log("item", item);
    if (isProductInCart) {
      addItem == //معناها روح لل addItem و شوف
        //العنصر الي انت لسه دايس عليه هل هو موجود؟
        addItem.map((p) => {
          if (p.id === chosenItem.id) p.qty += 1; //معناها لو موجود ضيف
          return p; //لو لا ارجع ضيفه من جديد
        });
    } else {
      //ديما هاتشتغل لان ال allItem بتساوي صفر فا حطلي العنصر الجديد ده في chosenItem
      addItem.push(chosenItem); //معناها هاتلي ال allItems ضيف فيها ال chosenItem   العنصر الي انت اول مره ضفته
    }
    //UI
    cartsProductDom.innerHTML = ""; //معناها شيل القديم وضيف الجديد
    //علشان الكلمه نفسها متتكررش
    addItem.forEach((item) => {
      //forEach معناها عدي علي ال array
      cartsProductDom.innerHTML += `<p>${item.title}${item.qty}</p>`;
      //علشان ال array بيدا بي صفر وكل مره ال qty بتزيد واحد
    });

    // addItem = [...addItem, chosenItem];
    // let uniqueProductDom = getUnIqueArr(addItem, "id");
    //*************save data ***********/
    localStorage.setItem("productsInCart", JSON.stringify(addItem));
    let cartProductItem = document.querySelectorAll(".carts-products div p");
    // badgeDom.style.display = "block";
    badgeDom.innerHTML = cartProductItem.length;
    //JSON.stringify بيحول ال object الي string
    //    JSON.parse() بيحول من string to object
    // localStorage.setItem('الاسم المخزن', Object)
    // let uniqueProducts = getUnIqueArr(addItem, "id");
  } else {
    window.location = "login.html";
  }

  function getUnIqueArr(arr, filterType) {
    let unique = arr
      .map((item) => item[filterType])
      .map((item, i, final) => final.indexOf(item) == i && i)
      .filter((item) => arr[item])
      .map((item) => arr[item]);
    return unique;
    console.log(unique);
  }
  // console.log(id);
  // let chosenItem=products.find((item)=>item.id===id);
  //  console.log(chosenItem);//find بترجع العنصر نفسه مش ال array
  // cartsProductDom.innerHTML+=`<p>${chosenItem.title}</p>`
  //chosenItem دي جواها عناصر ال array
  //+= علشان كل مره يضيف علي القديم
  // let cartProductItem=document.querySelectorAll('.carts-products div p')
  // badgeDom.innerHTML=cartProductItem.length;
}

// function checklogeduser(){
//     if(localStorage.getItem('username')){
//         setTimeout(() => {
//             window.location="cartproduct.html"
//         }, 1500);
//     }else{
//         window.location="login.html"
//     }
// }
function openCartProduct() {
  // e.preventDefault();
  cartsProductMenu.style.display = "block";
}
// openCartProduct();

function saveItemData(id) {
  localStorage.setItem("productId", id);
  window.location = "cartDetails.html";
}

//search function
let input = document.getElementById("search");

input.addEventListener("keyup", function (e) {
  // if (e.keyCode === 13) {
  //معناها زر Enter
  search(e.target.value, JSON.parse(localStorage.getItem("products")));
  // }
  if (e.target.value.trim() === "") {
    drawproducts(JSON.parse(localStorage.getItem("products")));
  }
});
//رقم 13هو رقم ال Enter in keyboard
//معناها لما اجي ادوس علي ال enter in search يعمل حاجه معينه
//معناها لما تدوس enter هاتلي قيمة الحاجه الي انت كتبتها في ال search  هتهالي من localStorage
//معني تاني لما تعمل سيرش علي حاجه وتدوس انتر هاتلي قيمة الحاجه دي من ال (localStorage)

function search(title, MyArray) {
  // for(var i=0;i<MyArray.length;i++){
  //     if(MyArray[i].title===title){
  //         console.log(MyArray[i]);
  //     }
  // }
  //محتاج اعدي علي ال array كلها فا بعمل for loop
  //بشوف هل فيها العنصر الي اسمه () لو فيها رجع العنصر ده
  //السطر الي تحت ده بيساوي الجزء الي فوق كله
  var arr = MyArray.filter(
    (item) => item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1
  );
  //filter بيرجعها في array
  //find بيرجعها في object
  // why chose filter or find ?
  //علشان العنصر الي انا اخترته بس
  // console.log(arr);
  drawproducts(arr);
}
// search("laptop",JSON.parse(localStorage.getItem("products")))
//**addToFavorite ****/
let favItem = localStorage.getItem("productsFav") //معناها هل الاسم ده موجود في localStorage?
  ? JSON.parse(localStorage.getItem("productsFav")) //لو ايوه حولها لي object
  : []; //لو لا هاتها array فاضيه

function addToFav(id) {
  if (localStorage.getItem("username")) {
    let chosenItem = products.find((item) => item.id === id);
    chosenItem.liked = true;
    favItem = [...favItem, chosenItem];
    //معناها انك تضيف القديم و تضيف الجديد عليه علشان ميمسحش القديم
    // let uniqueProductDom = getUnIqueArr(favItem, "id");
    // localStorage.setItem("productsInCart", JSON.stringify(uniqueProductDom));
    localStorage.setItem("productsFav", JSON.stringify(favItem)); //واطبع الجديد في ال localStorage
    products.map((item) => {
      //انا هنا عايز افحص المنتجات كلها علشان لما اجي احط قلب علي منتج
      if (item.id === chosenItem.id) {
        //لو ID===id في المنتج الي اخترته
        item.liked = true; //حطلي كلمه liked = true في ال product
      }
    });
    localStorage.setItem("products", JSON.stringify(products)); //و ارجع حطهولي تاني في ال localStorage
    drawproducts(products); //وارجع ارسم المنتجات من تاني
  } else {
    window.location = "login.html";
  }
}
//****filter select *****/

let sizeFilter = document.getElementById("size-filter");
sizeFilter.addEventListener("change", getProductsFilteredBySize);
function getProductsFilteredBySize(e) {
  let value = e.target.value;
  let products = JSON.parse(localStorage.getItem("products")) || products;
  if (value == "all") {
    drawproducts(products);
  } else {
    products = products.filter((i) => i.size == value);
    drawproducts(products);
  }
}
//*edit product
function EditProduct(id) {
  localStorage.setItem("EditProduct", id);
  window.location = "EditProduct.html";
}
