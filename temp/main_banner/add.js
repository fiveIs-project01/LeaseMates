import Load from "/temp/load.js";

fetch("/temp/main_banner/b.html")                                         // 받아올 html 파일 경로
.then((response) => response.text())
.then((html) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const content = doc.querySelector('.banner');                           // 베너만 선택

  document.getElementById('main-banner').appendChild(content);            // 원하는 곳에 베너 삽입

  new Load(doc);                                                          // css, js 파일 로드
})
.catch(error => console.error('Error fetching main banner :', error));    // 에러 메시지 설정