const pageNumberTen = 10; // 한 페이지 당 최대 10개의 요소를 보여줌

const getTotalPageCount = () =>{
    return Math.ceil(data.length / pageNumber);
}

const number = document.querySelector(".number-button-wrapper");

const setPageButtons = () =>{
    number.innerHTML = ''; // 페이지 번호 wrapper 내부를 비워줌
    for(let i = 1; i <=getTotalPageCount(); i++){
        number.innerHTML += `<span class="number-button">${i}</span>`
    }
}


const ul = document.querySelector('ul');
let currentPage = 1;

const setPageOf = (pageNumber) => {
    to.innerHTML = ''; // to 리스트 내부를 비워줌

    for(
        let i = pageNumberTen * (pageNumber - 1) + 1;
        i <= pageNumberTen * (pageNumber -1) + 11 && i <=data.length;
        i++
    ) {
        const li = document.createElement('li');
    
        // 컨테이너
        const titleDate = document.createElement('.div');
        titleDate.className = 'title-date';
    
        // 글 제목
        const postTitle = document.createElement('p');
        postTitle.className = 'title';
    
        // 날짜
        const postDate = document.createElement('p');
        postDate.className = 'date';
    
        postNumber.textContent = data[i - 1].postNumber;
        postTitle.textContent = data[i - 1].title; // 페이지 번호는 1부터 시작하지만 배열 인덱스는 0부터 시작하므로 -1 해 준다.
    
        titleDate.append(postTitle, postDate); // 컨테이너 구성
        li.append(titleDate); // li 구성
        ul.append(li); // ul에 li 자식 요소로 넣어주기
    }
}

// click 이벤트
const pageNumberButton = document.querySelectorAll('.number-button');

pageNumberButton.forEach((numberButton) =>{
    numberButton.addEventListener('click', (e)=>{
        setPageOf( +e.target.innerHTML);
    })
})

// 이전 이후 
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

prevButton.addEventListener('click', () => {
  if (currentPage > 1) {
		currentPage -= 1;
    setPageOf(currentPage);
  }
});

nextButton.addEventListener('click', () => {
  if (currentPage < getTotalPageCount()) {
		currentPage += 1;
    setPageOf(currentPage);
  }
});
















