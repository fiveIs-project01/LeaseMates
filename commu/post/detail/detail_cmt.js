
// 댓글추가 함수
function addComment(event) {
    event.preventDefault();
    const commentInput = document.getElementById('commentInput');
    let commentText = commentInput.value;
    let date = new Date().toLocaleString();
    
    if(commentText) {

        let commentDiv = document.createElement("div");
        commentDiv.className = "card";
        commentDiv.innerHTML = `
        <div class="card-body">
            <span class="card-username">김이박님</span>
            <textarea disabled>${commentText}</textarea>

            <div class="card-edit-box">
                <span class="card-date">${date}</span>
                <div>
                    <!-- 수정, 삭제 버튼이 들어감 -->
                </div>
        </div>
        `;

        // console.log(commentDiv);
        
        let commentsDiv = event.target.parentNode.querySelector(".comments");
        commentsDiv.insertBefore(commentDiv, commentsDiv.firstChild);
        commentInput.value = "";
    }
    else {
        alert("입력값이 없습니다"); 
    }
}
