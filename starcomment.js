const button = document.querySelector("#button");
const userName = document.querySelector("#name");
let resultName = document.querySelector("#resultName");
const picture = document.querySelector("#picture");
let resultPicture = document.querySelector("#resultPicture");
const comment = document.querySelector("#comment");
let resultComment = document.querySelector("#resultComment");

const checkSpam = () => {
  // Проверка имени
  let lowerName = userName.value.toLowerCase();
  resultName.textContent = lowerName[0].toUpperCase() + lowerName.slice(1);
  //ссылка на аватар, пример ссылки на аватар = "https://cs13.pikabu.ru/post_img/big/2023/09/11/5/1694416670162565263.jpg"
  resultPicture.src = picture.value;
  // сообщение пользователя с проверкой 'buy ViAgRA now' и 'free xxx'
  const commentSpam = comment.value.toLowerCase();
  reComment = commentSpam.replace("xxx", "***").replace("viagra", "***");
  resultComment.textContent = reComment;
};

button.addEventListener("click", checkSpam);
