let elPassword = document.querySelector('#pwd');
let elPasswordcheck = document.querySelector('#pwdck');
let elStrongPassword  = document.querySelector('.strongPassword');
let elMismatchMessage = document.querySelector('.missmatch-message');

// 객체에 스타일을 주고 스타일부여
elMismatchMessage.style.color = "red";
elMismatchMessage.style.fontSize = "16px";

elStrongPassword.style.color = "red";
elStrongPassword.style.fontSize = "16px";

// 숫자 다양하게 넣어야하는 js
function strongPassword (str) {  
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(str);
}

// isMatch함수는 password1와 passwordcheck2비교해주는 함수
function isMatch(password1, passwordcheck2){
    return password1 === passwordcheck2;
}

elPassword.onkeyup = function (){
    if(elPassword.value.length !== 0){
        if(strongPassword(elPassword.value)){
            elStrongPassword.classList.add('hide');
        }else{
            elStrongPassword.classList.remove('hide');
        }
    }else{
        elStrongPassword.classList.add('hide');
    }
}

// 비밀번호 확인 유효성 js
elPasswordcheck.onkeyup = function(){
    if(elPasswordcheck.value.length !==0){
        if(isMatch(elPassword.value, elPasswordcheck.value)){
            elMismatchMessage.classList.add('hide');
        }else{
            elMismatchMessage.classList.remove('hide');
        }
    }else{
        elMismatchMessage.classList.add('hide');
    }
}

// 오류 메세지
function pwdcheck(){
    if(elPasswordcheck.value.length !== 0){
        if(elPassword.value !== elPasswordcheck.value){
            alert("비밀번호 확인");
        }else{
            alert("수정되었습니다!");
            // 주소로 이동...
            window.location.href = "http://127.0.0.1:5500/user/profile/edit/pw_success/pw_success.html";
        }
    }
}