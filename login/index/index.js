document.querySelector(".signup--button").onclick = function() {
    // 회원가입 페이지로 이동
    window.location.href = "../terms/terms.html";
};

document.querySelector(".find-pw--button").onclick = function() {
    // 비밀번호 찾기 페이지로 이동
    window.location.href = "../find_pw/find_pw.html";
};

document.querySelector(".login--button").addEventListener("click", login);

function login(){
    var id = document.querySelector('#id');
    var pw = document.querySelector('#password');
    var idResult = document.querySelector('#idResult');
    var pwResult = document.querySelector('#pwResult');

    if(id.value == "" || pw.value == ""){
        idResult.innerText = "아이디를 입력하세요";
        pwResult.innerText = "비밀번호를 입력하세요";
        idResult.style.color = "#8976FD";
        pwResult.style.color = "#8976FD";
        console.error("아이디 또는 비밀번호가 입력되지 않았습니다.");
    }
    else{
        console.log("아이디:", id.value);
        console.log("비밀번호:", pw.value);
        console.log("다음 버튼 클릭됨");
        window.location.href = '/commu/index/after/after.html';
    }
}