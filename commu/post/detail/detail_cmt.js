// 댓글을 저장할 배열
let comments = [];

// 댓글추가 함수
function addComment(event) {
    event.preventDefault();
    const commentInput = document.getElementById('commentInput');
    var commentText = commentInput.value;
    var date = new Date().toLocaleString();
    
    if(commentText){

        var commentDiv = document.createElement("div");
        commentDiv.className = "card";
        commentDiv.innerHTML = `
        <div class="card-body">
        <p class="card-text">${commentText}</p>
        <p class="card-text"><small class="text-muted">${date}</small></p>
        </div>
        `;
        console.log(commentDiv);
        
        var commentsDiv = event.target.parentNode.querySelector(".comments");
        commentsDiv.insertBefore(commentDiv, commentsDiv.firstChild);
        commentInput.value = "";
    }else{
        alert("입력값이 없습니다"); 
    }
}


