document.addEventListener("DOMContentLoaded", function() {
    // 비밀번호 찾기 버튼 불러오기
    const findPwButton = document.querySelector('.find-pw-button');

    // 비밀번호 찾기 버튼 클릭 시 알림창 출력 및 로그인 페이지로 이동
    findPwButton.addEventListener('click', function(event) {
        // 기본 동작 취소 (페이지 새로고침 방지)
        event.preventDefault();

        // 아이디와 이름이 입력되었는지 확인
        const idInput = document.getElementById('id').value;
        const nameInput = document.getElementById('name').value;

        if (idInput && nameInput) {
            // 입력이 있을 경우 알림창 출력
            alert("입력된 이메일로 임시 비밀번호을 보냈습니다");
            // 로그인 페이지로 이동
            window.location.href = "../index/index.html";
        } else {
            // 입력이 없을 경우 알림창 표시
            alert("아이디, 이름과 이메일을 입력하세요");
        }
    });
});
