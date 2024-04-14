document.addEventListener('DOMContentLoaded', function() {
    const editForm = document.getElementById('postForm');
    const fileInput = document.getElementById('edit-file');
    let uploadedImage = null;

    // 파일 입력이 변경될 때 실행되는 함수
    fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];

        // 파일 미리보기를 위한 FileReader 객체 생성
        const reader = new FileReader();

        // 파일을 읽어들이고 이미지를 미리보기로 설정
        reader.onload = function(event) {
            uploadedImage = event.target.result;
        };

        if (file) {
            reader.readAsDataURL(file); // 파일을 읽어들임
        }
    });

    editForm.addEventListener('submit', function(event) {
        event.preventDefault(); // 기본 동작인 폼 제출을 막습니다.

        // 제목과 내용을 입력하는 부분을 선택합니다.
        const titleInput = document.getElementById('title');
        const contentInput = document.getElementById('content');

        // 제목이나 내용이 빈 경우 또는 파일이 선택되지 않았을 경우 메시지를 출력합니다.
        if (titleInput.value.trim() === '' || contentInput.value.trim() === '' || !uploadedImage) {
            const errorMessage = document.createElement('div');
            errorMessage.textContent = '제목, 내용, 사진을 모두 입력해주세요.';
            errorMessage.style.color = 'red';
            errorMessage.style.marginTop = '5px';
            errorMessage.style.fontSize = '16px';

            // 폼 아래에 있는 첫 번째 요소를 선택합니다.
            const firstFormElement = editForm.querySelector('.form-group');

            // 오류 메시지를 폼 앞에 추가합니다.
            editForm.insertBefore(errorMessage, firstFormElement);

            // 몇 초 후에 오류 메시지를 숨깁니다.
            setTimeout(function() {
                errorMessage.remove();
            }, 3000);

            return;
        }

        // 폼을 제출합니다.
        this.submit();
    });
});
