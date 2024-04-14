function deleteSuccess(){
    window.location.href = "http://127.0.0.1:5500/user/profile/delete/delete_account/delete_account.html";
}

let change_value = document.getElementsByClassName("user-profiled");
let changes = change_value.value

function changeButton(){
    if(changes === ""){
        throw("정보를 입력해주세요");
        
    }else{
        alert("수정 완료");
        window.location.href = "";
    }
}