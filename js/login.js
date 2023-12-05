let username = document.querySelector("#username");
let password = document.querySelector("#password");
let login = document.querySelector("#sign-in");

var getuser = localStorage.getItem("username");
var password1 = localStorage.getItem("password");
login.addEventListener("click", function (e) {
  e.preventDefault(); //منع افتراضي للتحديث الصفحه
  if (username.value === "" || password.value === "") {
    alert("please full all date");
  } else {
    if (
      localStorage.getItem("username") &&
      localStorage.getItem("username") === username.value &&
      password1 &&
      password1 === password.value
    ) {
      window.location = "index1.html";
    } else {
      console.log("error");
    }
  }
});
