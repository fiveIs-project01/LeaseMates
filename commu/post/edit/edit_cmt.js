import Pagination from "./pagination.js";

const content = document.getElementById("comment-content");
const pagination_ = document.getElementById('pagination');
const addBtn = document.getElementById('submit');

const items = [];
let itemNum = 1;                    // 아이템(댓글) 번호

const pagination = new Pagination(
  items,
  content,
  pagination_,
  ".card-delete-btn"                //삭제 버튼 클래스명
);

addBtn.addEventListener("click", ()=> {
    const commentInput = document.getElementById('input_cmt');
    // commentInput.value = `${itemNum}`;           //(테스트용.)

    if(commentInput.value) {
        const commentDiv = createCmt(commentInput);
        items.unshift([itemNum, commentDiv]);
        itemNum++;
    
        pagination.currentPage = 1;
        pagination.displayItems();
        pagination.createPaginationButtons();
        document.querySelectorAll('.page-btn')[0].setAttribute("style", "background-color: #8976FD; color:white;");
        commentInput.value ="";
    }
    else {
        alert("댓글을 입력해주세요");
    }
});


function createCmt(commentInput) {
    let date = new Date().toLocaleString();
    let commentDiv = document.createElement("div");

    commentDiv.className = "card";
    commentDiv.innerHTML = `
    <div class="card-body">
        <span class="card-username">김이박님</span>
        <textarea disabled>${commentInput.value}</textarea>

        <div class="card-edit-box">
            <span class="card-date">${date}</span>
            <div class="edit-btn" data-no_cmt="${itemNum}">
                <button class="card-update-btn">수정하기</button>
                <button class="card-delete-btn">삭제하기</button>
                <button class="card-complete_update-btn">수정완료</button>
            </div>
    </div>
    `;

    return commentDiv;
}