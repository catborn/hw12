const button = document.querySelector("#button");
const userName = document.querySelector("#name");
let resultName = document.querySelector("#resultName");
const picture = document.querySelector("#picture");
let resultPicture = document.querySelector("#resultPicture");
const comment = document.querySelector("#comment");
let resultComment = document.querySelector("#resultComment");
//дата комментариция
let commentDate = document.querySelector("#commentdate");
//показывать или нет имя
let showName = document.querySelector("#showname");

//рандомные картинки
let Images = [
  "https://img.freepik.com/free-photo/colorful-roses-bouquet-against-the-sky_23-2150866731.jpg",
  "https://i.pinimg.com/236x/5b/6e/ca/5b6eca63605bea0eeb48db43f77fa0ce.jpg",
  "https://i.pinimg.com/236x/dd/f8/78/ddf87827dd19e5a841f1994688f84ce8.jpg",
  "https://img.freepik.com/free-photo/colorful-roses-bouquet-against-the-sky_23-2150866731.jpg",
  "https://img.freepik.com/free-photo/3d-fox-cartoon-illustration_23-2151395203.jpg?size=626&ext=jpg&ga=GA1.1.1276428528.1708190156&semt=ais_user",
];
// console.log(Images.length);
// console.log(Images[1]);
// console.log(Math.floor(Math.random() * Images.length));
let randomNum = Math.floor(Math.random() * Images.length);
// console.log(randomNum);

const checkSpam = () => {
  // Проверка имени
  let lowerName = userName.value.toLowerCase();
  let trimName = lowerName.trim();
  // console.log(trimName);
  //скрываем имя если есть галочка
  if (showName.checked == true) {
    resultName.textContent = "username";
  } else {
    resultName.textContent = trimName[0].toUpperCase() + trimName.slice(1);
  }
  //ссылка на аватар, пример ссылки на аватар = "https://cs13.pikabu.ru/post_img/big/2023/09/11/5/1694416670162565263.jpg"

  if (picture.value == "") {
    resultPicture.src = Images[randomNum];
    // resultPicture.src =
    //   "https://img.freepik.com/free-photo/colorful-roses-bouquet-against-the-sky_23-2150866731.jpg";
  } else {
    resultPicture.src = picture.value;
  }
  // сообщение пользователя с проверкой 'buy ViAgRA now' и 'free xxx'
  const commentSpam = comment.value.toLowerCase();
  reComment = commentSpam.replace(/xxx|viagra/g, "***");
  resultComment.textContent = reComment;
  commentDate.textContent = new Date();
  userName.value = "";
  picture.value = "";
  comment.value = "";
};

button.addEventListener("click", checkSpam);
