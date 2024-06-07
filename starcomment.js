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
  let trimName = lowerName.trim();
  // console.log(trimName);
  resultName.textContent = trimName[0].toUpperCase() + trimName.slice(1);
  //ссылка на аватар, пример ссылки на аватар = "https://cs13.pikabu.ru/post_img/big/2023/09/11/5/1694416670162565263.jpg"
  resultPicture.src = picture.value;
  // сообщение пользователя с проверкой 'buy ViAgRA now' и 'free xxx'
  const commentSpam = comment.value.toLowerCase();
  reComment = commentSpam.replace(/xxx|viagra/g, "***");
  resultComment.textContent = reComment;
};

// + нужно было убрать лишние пробелы в начале и в конце, если они есть, можно просто метод trim() использовать
// - checkSpam(str) должно было быть отдельной функцией именно для проверки комментария,
// + проверку можно было сделать в одном методе commentSpam.replace(/xxx|viagra/g, "***")
// - по-хорошему было бы отчистить все поля в форме
// - нет возможности добавить новый комментарий: по сути у тебя функция должна была бы создавать новый <div> с комментарием и добавлять его в твой <fieldset>

button.addEventListener("click", checkSpam);
