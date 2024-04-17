// 수정 완료 버튼 클릭 시 실행될 함수
function submitEdit(event) {
    // 폼의 기본 동작인 제출을 막음
    event.preventDefault();
  
    // 제목과 내용을 가져옴
    var title = document.getElementById('title').value;
    var content = document.getElementById('content').value;
  
    // 파일이 첨부되었는지 확인
    var fileInput = document.getElementById('edit-file');
    var file = fileInput.files[0];
  
    // 제목과 내용이 비어 있는지 확인
    if (title.trim() === '' || content.trim() === '') {
      alert('제목과 내용을 입력해주세요.');
      return;
    }
  
    // 파일이 첨부되었는지 확인
    if (!file) {
      alert('파일을 첨부해주세요.');
      return;
    }
  
    // 수정이 완료되었다는 알림창 표시
    alert("수정이 완료되었습니다.");
  
    // 게시글 상세 페이지로 이동
    window.location.href = "./detail.html";
}
