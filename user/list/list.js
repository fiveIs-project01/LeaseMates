
const content = document.getElementById('post_list--content');
const pagination = document.getElementById('post_list--pagination');


const BTN_NUM = 5;                    // 페이지당 보여질 페이지네이션 버튼 수
const ITEM_NUM = 10;                  // 페이지당 항목 수

const items = [];                     // 페이지네이션될 항목 배열
let currentPage = 1;                  // 현재 페이지 번호


// 게시물 생성
for (let i = 1; i <= 98; i++) {
  let post = `
    <div>
      <div class="posting-container">
        <div class="title-date">
        <a href="../../commu/post/detail/detail.html"><p class="title" id="title-page">집 가는 길에 ${i}</p></a>
          <p class="date">24.04.17</p>
        </div>
      </div>
    </div>
  `;

  items.push(post);
}


function displayItems() {
const startIndex = (currentPage - 1) * ITEM_NUM;
const endIndex = startIndex + ITEM_NUM;
const displayedItems = items.slice(startIndex, endIndex);

content.innerHTML = displayedItems.join('');
}

function createPaginationButtons() {
let nextBtn = null;
let prevBtn = null;

const numPages = Math.ceil(items.length / ITEM_NUM);
let currentBtnGroup = Math.ceil(currentPage / BTN_NUM);
let startGroupIdx = (currentBtnGroup - 1) * BTN_NUM + 1;
let endGroupIdx = currentBtnGroup * BTN_NUM;

if(endGroupIdx >= numPages) {
  endGroupIdx = numPages;
}
else {
  // 다음 버튼 생성(페이지 그룹이 하나밖에 없을 때, 마지막 페이지 그룹일 때 다음 버튼 X)
  nextBtn = document.createElement("button");
  nextBtn.className = "next-btn";
  nextBtn.textContent = "다음";

  // 다음 버튼에 이벤트 추가
  nextBtn.addEventListener("click", function() {
    currentPage = startGroupIdx + BTN_NUM;
    displayItems();
    createPaginationButtons();
    document.querySelectorAll('.page-btn')[0].setAttribute("style", "background-color: #8976FD; color:white;");
  });
}

// 이전 버튼 생성(페이지그룹이 1이 아니라면 이전 버튼 필요)
if(currentBtnGroup > 1) {
  prevBtn = document.createElement("button");
  prevBtn.textContent = "이전";
  prevBtn.className = "prev-btn";

  // 이전 버튼에 이벤트 추가
  prevBtn.addEventListener("click", function() {
    currentPage = startGroupIdx - BTN_NUM;
    displayItems();
    createPaginationButtons();
    document.querySelectorAll('.page-btn')[0].setAttribute("style", "background-color: #8976FD; color:white;");
  });
}

let buttonsHtml = '';
for (let i = startGroupIdx; i <= endGroupIdx; i++) buttonsHtml += `<div class="page-btn">${i}</div>`;
pagination.innerHTML = buttonsHtml;

if(prevBtn) {
  pagination.insertBefore(prevBtn, pagination.firstChild);
}
if(nextBtn) {
  pagination.appendChild(nextBtn);
}

// 버튼 활성화시키고 아이템 다시 뿌려야.
let pageBtns = document.querySelectorAll('.page-btn');
pageBtns.forEach((btn) => {
  btn.addEventListener("click", function() {
    currentPage = btn.textContent;
    displayItems();

    // 나머지 버튼 비활성화
    pageBtns.forEach((btn) => btn.setAttribute("style", "background-color: white; color: #332C5C;") );

    // 버튼 활성화(색상변경)
    btn.setAttribute("style", "background-color: #8976FD; color:white;");
    
  });
});
}

displayItems();
createPaginationButtons();
document.querySelectorAll('.page-btn')[0].setAttribute("style", "background-color: #8976FD; color:white;");