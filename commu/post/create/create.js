document.addEventListener('DOMContentLoaded', function () {
    const createForm = document.getElementById('createFrm');
    const titleInput = document.getElementById('create-textarea-title');
    const contentInput = document.getElementById('create-textarea-content');
    const submitButton = document.getElementById('create-submit-button');

    // 등록하기 버튼 클릭 시 동작
    submitButton.addEventListener('click', function () {
       
        if (titleInput.value.trim() === '' || contentInput.value.trim() === '') {
            alert('제목과 내용을 입력해주세요.');
            return; 
        }


        window.location.href = '/commu/post/detail/detail.html'; 
    });
});

