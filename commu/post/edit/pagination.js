
export default class Pagination {
  constructor(items, content, pagination, delete_btn_classname) {
    this.items = items;
    this.content = content;
    this.pagination = pagination;
    this.delete_btn_classname = delete_btn_classname;

    this.BTN_NUM = 5;                     // 페이지당 보여질 페이지네이션 버튼 수
    this.ITEM_NUM = 10;                   // 페이지당 항목 수

    this.currentPage = 1;                 // 현재 페이지 번호
  }

  displayItems() {
    // **(댓글 작성란 div 박스로 한번 감싼 후 그쪽으로 스크롤 되도록 바꾸기 + 헤더 고려해서 스크롤 위치 조정)
    document.querySelector(".comment-form").scrollIntoView(true);

    const startIndex = (this.currentPage - 1) * this.ITEM_NUM;
    const endIndex = startIndex + this.ITEM_NUM;
    const displayedItems = this.items.slice(startIndex, endIndex);

    this.content.innerHTML = displayedItems.map((item) => item[1].outerHTML).join('');    //outerHTML : 태그 -> 텍스트 변환

    // 댓글 수정 이벤트 추가
    document.querySelectorAll(".card-update-btn").forEach((updateBtn) => {
      updateBtn.addEventListener("click", function() {
          let textarea = this.parentNode.parentNode.parentNode.querySelector("textarea");
          textarea.removeAttribute("disabled");
          textarea.focus();                           // textarea 활성화
          let len = textarea.textContent.length;
          textarea.setSelectionRange(len, len);       // 커서 맨 뒤
  
          // 수정 삭제 버튼 안보이게
          this.setAttribute("style", "display:none;");
          this.parentNode.querySelector(".card-delete-btn").setAttribute("style", "display:none;");
  
          //수정 완료 버튼 보이도록
          this.parentNode.querySelector(".card-complete_update-btn").setAttribute("style", "display:block;");
      });

    });


    // 수정 완료 버튼 이벤트 추가
    document.querySelectorAll(".card-complete_update-btn").forEach((completeUpdateBtn) => {
      completeUpdateBtn.addEventListener("click", function() {
          let textarea = this.parentNode.parentNode.parentNode.querySelector("textarea");
          textarea.setAttribute("disabled", true);
  
          // 수정, 삭제 버튼 보이기
          this.parentNode.querySelector(".card-update-btn").setAttribute("style", "display: inline-block;");
          this.parentNode.querySelector(".card-delete-btn").setAttribute("style", "display: inline-block;");
  
          // 수정 완료 버튼 숨기기
          this.setAttribute("style", "display:none;");
      });
    });
    


    // 댓글 삭제 버튼에 이벤트 등록
    const deleteBtns = document.querySelectorAll(this.delete_btn_classname);
    deleteBtns.forEach((btn)=> {
      btn.addEventListener("click", () => {

        // arr에서 아이템 제거 후 다시 아이템과 페이지네이션 버튼들 뿌린다.
        let n = Number(btn.parentNode.parentNode.querySelector(".edit-btn").getAttribute('data-no_cmt'));   // (data-no_cmt 값 가져오기

        for(let i = 0; i < this.items.length; i++) {
          if(n == this.items[i][0]) {
            this.items.splice(i, 1);    // 아이템 삭제
            break;
          }
        }

        // 삭제한 아이템이 마지막 페이지의 하나남은 아이템이라면 현재 페이지에서 -1(페이지가 줄어들기 때문).
        if(this.items.slice(startIndex, endIndex).length == 0) this.currentPage--;

        // currentPage == 0 이면 아이템이 하나도 없다는 것. 버튼이 없으니 버튼 활성화 X.
        if(this.currentPage == 0) {
          this.currentPage = 1;
          this.displayItems();
          this.createPaginationButtons();
        }
        else {
          // 가장 마지막 페이지에서 아이템 하나 남은 것을 삭제하면 현재 페이지의 앞쪽 페이지의 버튼을 활성화.
          this.displayItems();
          this.createPaginationButtons();

          // 현재 화면에 보이는 페이지네이션 버튼의 인덱스 구하기(화면에 5개까지 밖에 안보임)
          // 예를 들어, 7번이면 7 % 5 - 1 = 1 -> 7번 버튼의 인덱스 : 1이 되는 것.
          let idx = this.currentPage % this.BTN_NUM - 1;

          //idx == -1 이 되는 조건 : 페이지네이션 그룹에서 첫번째 페이지네이션 버튼인데, 하나 남은 아이템이 지워지면 idx가 -1이 됨.
          //페이지네이션 버튼 생성할 때 5개의 버튼이 새로 생성되므로 인덱스 4번의 페이지네이션 버튼이 활성화되어야 하는 것.
          if(idx == -1) document.querySelectorAll('.page-btn')[BTN_NUM-1].setAttribute("style", "background-color: #8976FD; color:white;");
          else document.querySelectorAll('.page-btn')[idx].setAttribute("style", "background-color: #8976FD; color:white;");
        }
        
      });
    });
  }


  createPaginationButtons() {
    let nextBtn = null;
    let prevBtn = null;

    const numPages = Math.ceil(this.items.length / this.ITEM_NUM);

    // 현재 페이지의 버튼 그룹 구하기
    // (현재 페이지 / 페이지당 보여질 페이지네이션 버튼 수)
    let currentBtnGroup = Math.ceil(this.currentPage / this.BTN_NUM);

    //페이지 그룹의 첫번째 번호 : (현재 페이지 그룹 - 1) * 한 화면에 보여질 버튼 개수 + 1
    let startGroupIdx = (currentBtnGroup - 1) * this.BTN_NUM + 1;

    //페이지 그룹의 마지막 번호 : 현재 페이지 그룹* 한 화면에 보여질 버튼 개수
    let endGroupIdx = currentBtnGroup * this.BTN_NUM;
    
    // 단, 마지막 페이지네이션 번호보다 크면 마지막 번호가 페이지 그룹의 마지막 번호가 됨. 다음 버튼도 필요X.
    if(endGroupIdx >= numPages) {
      endGroupIdx = numPages;
    }
    else {
      // 다음 버튼 생성(페이지 그룹이 하나밖에 없을 때, 마지막 페이지 그룹일 때 다음 버튼 X)
      nextBtn = document.createElement("div");
      nextBtn.className = "next-btn";
      nextBtn.textContent = "다음";

      // 다음 버튼에 이벤트 추가
      nextBtn.addEventListener("click", ()=> {
        this.currentPage = startGroupIdx + this.BTN_NUM;
        this.displayItems();
        this.createPaginationButtons();
        document.querySelectorAll('.page-btn')[0].setAttribute("style", "background-color: #8976FD; color:white;");
      });
    }

    // 이전 버튼 생성(페이지 그룹이 1이 아니라면 이전 버튼 필요)
    if(currentBtnGroup > 1) {
      prevBtn = document.createElement("div");
      prevBtn.textContent = "이전";
      prevBtn.className = "prev-btn";

     // 이전 버튼에 이벤트 추가
     prevBtn.addEventListener("click", ()=> {
      this.currentPage = startGroupIdx - this.BTN_NUM;
      this.displayItems();
      this.createPaginationButtons();
      document.querySelectorAll('.page-btn')[0].setAttribute("style", "background-color: #8976FD; color:white;");
     });
   }
    
    let buttonsHtml = '';
    for (let i = startGroupIdx; i <= endGroupIdx; i++) buttonsHtml += `<div class="page-btn">${i}</div>`;
    this.pagination.innerHTML = buttonsHtml;

    if(prevBtn) {
      this.pagination.insertBefore(prevBtn, this.pagination.firstChild);
    }
    if(nextBtn) {
      this.pagination.appendChild(nextBtn);
    }


    // 버튼 누를 때마다 페이지가 이동되면서 아이템 다시 뿌리고 해당 버튼 활성화.
    let pageBtns = document.querySelectorAll('.page-btn');
    pageBtns.forEach((btn) => {
      btn.addEventListener("click", ()=> {
        this.currentPage = btn.textContent;
        this.displayItems();

        // 나머지 버튼 비활성화
        pageBtns.forEach((btn) => btn.setAttribute("style", "background-color: white; color:#8976FD;") );

        // 버튼 활성화(색상변경)
        btn.setAttribute("style", "background-color: #8976FD; color:white;");
      });
    });
  }
}
  