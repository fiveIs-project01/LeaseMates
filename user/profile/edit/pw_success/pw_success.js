function back(){
    window.location.href = "http://127.0.0.1:5500/user/profile/index/index.html";
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
