//get data from localStorage
let getUser = localStorage.getItem("username");
let getEmail = localStorage.getItem("email");
// let productImage = document.getElementById("UserImage");
// inputFile = localStorage.getItem("userImageUrl");
//variable
let userNameInput = document.getElementById("changeName");
let emailInput = document.getElementById("changeEmail");
let editProfileForm = document.getElementById("editProfileForm");
let inputFile = document.getElementById("upLoad-image-file");
userNameInput.value = getUser;
emailInput.value = getEmail;
// inputFile.value = productImage;
//event
editProfileForm.addEventListener("submit", editProfileData);
// inputFile.addEventListener("change", uploadImage);

function editProfileData(e) {
  e.preventDefault();
  localStorage.setItem("username", userNameInput.value);
  localStorage.setItem("email", emailInput.value);
  localStorage.setItem("userImageUrl", inputFile.value);

  setTimeout(() => {
    window.location = "profile.html";
  }, 500);
}

//upLoadImage*****//
// let preview;
// function uploadImage() {
//   let file = this.files[0];
//   console.log(file);
//   let types = ["image/gif", "image/jpeg", "image/png"];
//   if (types.indexOf(file.type) == -1) {
//     alert("type not supported");
//     return;
//   }
//   if (file.size > 2 * 1024 * 1024) {
//     alert("image not Exceed 2MG");
//     return;
//   }
//   getImageBase64(file);
//   // productImage = URL.createObjectURL(file);
// }

// function getImageBase64(file) {
//   let reader = new FileReader();
//   //علشان يقدر يقرا ال file بتاعك
//   reader.readAsDataURL(file);
//   //بيحول ال file لي base 64

//   reader.onload = function () {
//     productImage = reader.result;
//   };
//   reader.onerror = function () {
//     alert("Error");
//   };
// }
