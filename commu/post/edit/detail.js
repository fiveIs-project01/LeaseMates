function count(type)  {
  // 결과를 표시할 element
  const resultElement = document.getElementById('result');
  
  
  // 현재 화면에 표시된 값
  let number = resultElement.innerText;
  
  // 더하기/빼기
  if(type === 'plus') {
    number = parseInt(number) + 1;
  }
  
  // 결과 출력
  resultElement.innerText = number;
}


// 게시글 수정 페이지로 들어가게 하는 함수
// 페이지 로드 후 실행될 함수
window.onload = function() {
  // 게시글 내용 가져오기
  loadPostContent();
}

// 게시글 내용을 가져오는 함수
function loadPostContent() {
  // 임시로 내용 작성함
  var postTitle = "뉴욕증시, '중동 위험+ 올해 인하 없을 우려'에 급락";
  var postContent = "중동 관련 지정학적 위험이 주가지수에 영향을 미쳤다. 이란이 시리아의 이란 영사관 폭격의 배후로 이스라엘을 지목한 데 이어 강한 보복을 예고하면서다. 이스라엘은 이날 모든 전투부대원의 휴가를 중단했다. 또 각 부대에 서한을 보내 “이스라엘군은 전쟁 중이며 병력 전개 문제는 필요할 때마다 지속해서 검토할 것”이라고 강조했다. 전일 이스라엘은 방공시스템 운용 경험이 있는 예비군을 추가로 동원하기로 했다.";

  // 가져온 내용을 해당 요소에 넣음
  document.getElementById('title').value = postTitle;
  document.getElementById('content').value = postContent;
}

