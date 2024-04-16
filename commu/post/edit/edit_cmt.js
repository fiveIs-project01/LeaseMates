// 댓글을 저장할 배열
let comments = [];

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
                    <button class="card-update-btn">수정하기</button>
                    <button class="card-delete-btn">삭제하기</button>
                    <button class="card-complete_update-btn">수정완료</button>
                </div>
        </div>
        `;


        // 댓글 수정 이벤트 추가
        let updateBtn = commentDiv.querySelector(".card-update-btn");
        updateBtn.addEventListener("click", function() {
            let textarea = this.parentNode.parentNode.parentNode.querySelector("textarea");
            textarea.removeAttribute("disabled");
            textarea.focus();                           // textarea 활성화

            // 수정 삭제 버튼 안보이게
            this.setAttribute("style", "display:none;");
            this.parentNode.querySelector(".card-delete-btn").setAttribute("style", "display:none;");

            //수정 완료 버튼 보이도록
            this.parentNode.querySelector(".card-complete_update-btn").setAttribute("style", "display:block;");
        });


        // 수정 완료 버튼 이벤트 추가
        let completeUpdateBtn = commentDiv.querySelector(".card-complete_update-btn");
        completeUpdateBtn.addEventListener("click", function() {
            let textarea = this.parentNode.parentNode.parentNode.querySelector("textarea");
            textarea.setAttribute("disabled", true);

            // 수정, 삭제 버튼 보이기
            this.parentNode.querySelector(".card-update-btn").setAttribute("style", "display: inline-block;");
            this.parentNode.querySelector(".card-delete-btn").setAttribute("style", "display: inline-block;");

            // 수정 완료 버튼 숨기기
            this.setAttribute("style", "display:none;");
        });


        // 댓글 삭제 버튼 이벤트 추가
        let deleteBtn = commentDiv.querySelector(".card-delete-btn");
        deleteBtn.addEventListener("click", function() {
            commentDiv.remove();
        });


        console.log(commentDiv);
        
        let commentsDiv = event.target.parentNode.querySelector(".comments");
        commentsDiv.insertBefore(commentDiv, commentsDiv.firstChild);
        commentInput.value = "";
    }
    else {
        alert("입력값이 없습니다"); 
    }
}
