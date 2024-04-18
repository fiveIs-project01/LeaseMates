// 로그아웃 함수
function logout() {
    // 로그아웃 확인 메시지 표시
    if (confirm("로그아웃 되었습니다.")) {
        // 로그인 페이지로 이동
        window.location.href = "/login/index/index.html"; // 로그인 페이지의 URL로 변경해야 합니다.
    }
}