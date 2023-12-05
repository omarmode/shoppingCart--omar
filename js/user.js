let userinfo=document.querySelector('#userinfo');
let userdom=document.querySelector('#user1');
let lienks=document.querySelector('#lienks');
let logout=document.querySelector('#log-out');
// let username=localStorage.getItem("username");
if(localStorage.getItem("username")){
    userinfo.style.display="flex";
    lienks.remove()
       userdom.innerHTML=localStorage.getItem("username");
}
logout.addEventListener('click', function(){
    localStorage.clear();
    setTimeout(() => {
        window.location="regester.html"
    },1500)
})