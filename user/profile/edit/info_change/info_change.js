function deleteSuccess(){
    window.location.href = "http://127.0.0.1:5500/user/profile/delete/delete_account/delete_account.html";
}

let nameStyle = document.querySelector(".profile-name");
let idStyle = document.querySelector(".profile-id");
let emailStyle = document.querySelector(".profile-email");
let phoneStyle = document.querySelector(".profile-phone");
// let addressStyle = document.querySelector(".profile-address");
nameStyle.style.color = "red";
idStyle.style.color = "red";
emailStyle.style.color = "red";
phoneStyle.style.color = "red";
// addressStyle.style.color = "red";

let pName = document.querySelector(".user-profiled-name");
let id = document.querySelector(".user-profiled-id");
let email = document.querySelector(".user-profile-email");
let phone = document.querySelector(".user-profiled-phone");
// let address =  document.querySelector(".user-profiled-address");

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
email.addEventListener("keyup", ()=>{
    if(id.value.length !== 0){
        emailStyle.classList.add('hide');
    }else{
        emailStyle.classList.remove('hide');
    }
})
phone.addEventListener("keyup", ()=>{
    if(phone.value.length !== 0){
        phoneStyle.classList.add('hide');
    }else{
        phoneStyle.classList.remove('hide');
    }
}) 
// address.addEventListener("keyup", ()=>{
//     if(address.value.length !== 0){
//         addressStyle.classList.add('hide');
//     }else{
//         addressStyle.classList.remove('hide');
//     }
// })

let arr = [pName, id, email, phone]; //, address
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

// 헤더
// 헤더 파일을 가져와서 헤더 자리에 삽입하는 함수
function includeHeader() {
    fetch('/temp/header/header_login.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('header-login-placeholder').innerHTML = data;
      })
      .catch(error => console.error('헤더 파일을 불러오는 중 오류 발생:', error));
  }

  // 페이지 로드 후 헤더 삽입 함수 호출
  document.addEventListener('DOMContentLoaded', includeHeader);

  //푸터
  function incluedFooter(){
    fetch('/temp/footer/footer.html')
     .then(response => response.text())
     .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
     })
     .catch(error => console.error('푸터 파일을 불러오는 중 오류 발생:', error));
  }

  //페이지 로드 후 푸터 삽입 함수 호출
  document.addEventListener('DOMContentLoaded', incluedFooter);
