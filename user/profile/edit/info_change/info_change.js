function deleteSuccess(){
    window.location.href = "http://127.0.0.1:5500/user/profile/delete/delete_account/delete_account.html";
}

let nameStyle = document.querySelector(".profile-name");
let idStyle = document.querySelector(".profile-id");
let phoneStyle = document.querySelector(".profile-phone");
let addressStyle = document.querySelector(".profile-address");
nameStyle.style.color = "red";
idStyle.style.color = "red";
phoneStyle.style.color = "red";
addressStyle.style.color = "red";

let pName = document.querySelector(".user-profiled-name");
let id = document.querySelector(".user-profiled-id");
let phone = document.querySelector(".user-profiled-phone");
let address =  document.querySelector(".user-profiled-address");

// let nameValue = pName.value;
// let idValue = id.value;
// let phoneValue = phone.value;
// let addressValue = address.value;

// input옆에 경고문
pName.addEventListener("keyup", ()=>{
    if(pName.value.length !== 0){
        nameStyle.classList.add('hide');
    }else{
        nameStyle.classList.remove('hide');
    }
})
id.addEventListener("keyup", ()=>{
    if(id.value.length !== 0){
        idStyle.classList.add('hide');
    }else{
        idStyle.classList.remove('hide');
    }
})
phone.addEventListener("keyup", ()=>{
    if(phone.value.length !== 0){
        phoneStyle.classList.add('hide');
    }else{
        phoneStyle.classList.remove('hide');
    }
}) 
address.addEventListener("keyup", ()=>{
    if(address.value.length !== 0){
        addressStyle.classList.add('hide');
    }else{
        addressStyle.classList.remove('hide');
    }
})

let arr = [pName, id, phone, address];
var off = 0;

function correctButton(){
    for(var i=0; i < arr.length; i++){
        if(!arr[i].value){
            off = 1;
        }
    }
    if(off ===1 ){
        alert("정보를 입력해주세요");
        off=0;
    }else{
        alert("수정되었습니다");
        window.location.href = "http://127.0.0.1:5500/user/profile/index/index.html";
    }
}
