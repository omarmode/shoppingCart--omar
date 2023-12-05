let username =document.querySelector("#username");
let password =document.querySelector("#password");
let email =document.querySelector("#email");
let register_btn =document.querySelector("#sign-up");
register_btn.addEventListener("click",function(e){
   e.preventDefault();//منع افتراضي للتحديث الصفحه 
 if(username.value===""||password.value===""||email.value===""){
    alert("please full all date")
 }else{
    localStorage.setItem("username",username.value)
    localStorage.setItem("email",email.value)
    localStorage.setItem("password",password.value)

    setTimeout( () => {//مهم تعمل منع افتراضي لتحديث الصفحه علشان الكود ده يشتغل 
       window.location="login.html"; 
    }, 1500);
 }
});