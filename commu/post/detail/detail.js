const commentBtn = document.getElementsByClassName("comment-frm");
const list = [];

console.log(commentBtn);

function commentBtnHandler(e){
  e.preventDefault();
  console.dir(e.target);
  console.log(e.target[0].value);
  console.log(e.target.elements[0]);
  console.log(e.target.elements[0].value);
  console.log(e.target.elements.content);
  console.log(e.target.elements.content.value);
  console.log(e.target.content);
  console.log(e.target.content.value);
}

commentBtn.addEventListener("submit", commentBtnHandler);