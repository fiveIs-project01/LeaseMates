// 페이지당 표시할 게시물 수
const itemsPerPage = 20;
// 전체 게시물 수
const totalItems = 101;
// 전체 페이지 수
const totalPages = Math.ceil(totalItems / itemsPerPage);

// 페이지별 게시물 목록을 가져오는 함수
function getPosts(page) {
  // 게시물 목록을 비우고 새로운 게시물을 추가하는 코드
  const postListContainer = document.getElementById('post-list');
  postListContainer.innerHTML = '';

  // 해당 페이지의 시작과 끝 인덱스 계산
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  // 해당 페이지의 게시물을 추가(실제 데이터가 들어갈 부분)
  for (let i = startIndex; i < endIndex; i++) {
    postListContainer.innerHTML += `<li>
                                      <div class="posting-container">
                                        <div class="title-date">
                                          <p class="title" id="title-page" href="../../commu/post/detail/detail.html">집 가는 길에 ${i + 1}</p>
                                          <p class="date">24.04.17</p>
                                        </div>
                                      </div>
                                    </li>`;
  }
}

// 페이지 버튼을 생성하고 이벤트 핸들러를 할당하는 함수
function setupPagination() {
  const paginationContainer = document.getElementById('pagination-buttons');
  // 이전 버튼 추가
  paginationContainer.innerHTML += `<a href="#" class="prev-button">&lt;</a>`;
  // 페이지 버튼 추가
  for (let i = 1; i <= totalPages; i++) {
    paginationContainer.innerHTML += `<a href="#" class="number-button-wrapper"><span class="number-button">${i}</span></a>`;
  }
  // 다음 버튼 추가
  paginationContainer.innerHTML += `<a href="#" class="next-button">&gt;</a>`;

  // 페이지 버튼에 클릭 이벤트 리스너 추가
  const pageButtons = document.querySelectorAll('.number-button-wrapper');
  pageButtons.forEach(button => {
    button.addEventListener('click', () => {
      const pageNumber = parseInt(button.querySelector('.number-button').textContent);
      getPosts(pageNumber);
    });
  });
}

// 페이지 로드 시 페이징 설정
window.onload = function() {
  setupPagination();
  // 첫 번째 페이지의 게시물 로드
  getPosts(1);
};

