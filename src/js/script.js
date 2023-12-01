//======================================================================
// Главная страница
function redirectToPage() {
  // Получаем значение из input
  let pageNumber = document.getElementById("pageInput").value;
  pageNumber = pageNumber.toLowerCase();

  // Переключаемся на нужную страницу в зависимости от введенного значения
  switch (pageNumber) {
    case "летняя сирень":
      window.location.href = "card-reference.html";
      break;
    case "мужество джентельмена":
      window.location.href = "card-reference-2.html";
      break;
    case "магия востока":
      window.location.href = "card-reference-3.html";
      break;
    case "весеннее вдохновение":
      window.location.href = "card-reference-4.html";
      break;
    case "фруктовая гармония":
      window.location.href = "card-reference-5.html";
      break;
    case "древесная энергия":
      window.location.href = "card-reference-6.html";
      break;
    default:
      alert("Аромат с таким названием не найден. Попробуйте поискать ещё ☺");
  }
}

function toSignUpForm() {
  window.location.href = "sign-up.html";
}

//======================================================================
// Карточка товара

$(".spoiler_title").click(function () {
  $(this).find(".plus-minus-toggle").toggleClass("collapsed");
  $(this).parent().toggleClass("active");
});

$(document).ready(function () {
  $(".icons").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    swipeToSlide: true,
    touchMove: true,
    ltr: true,
    infinite: true,
    variableWidth: true,
    dots: false,
    pauseOnHover: false,
  });
});

//======================================================================
// Форма регистрации

function checkPassword() {
  let name = document.getElementById("name").value;
  let surname = document.getElementById("surname").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let password_2 = document.getElementById("password_2").value;
  if (
    name != "" &&
    surname != "" &&
    email != "" &&
    password != "" &&
    password_2 != ""
  ) {
    if (password === password_2) {
      alert("Вы успешно зарегистрированы! ☺");
      window.location.href = "index.html";
    } else {
      alert("Пароли не совпадают, попробуйте снова ☺");
    }
  } else {
    alert("Заполните все поля ☺");
  }
}

function logIn() {
  let login = prompt("Введите email");
  prompt(`Введите пароль для ${login}`);
  alert("Вы успешно вошли!");
  window.location.href = "index.html";
}

//======================================================================
// Каталог

// Получаем ссылку на кнопку и параграф по их идентификаторам
const showAll = document.getElementById("showAll");
const showLight = document.getElementById("showLight");
const showPersistent = document.getElementById("showPersistent");
const showMasculine = document.getElementById("showMasculine");
const selectedCategory = document.getElementById("selectedCategory");

// Добавляем обработчик события на кнопку
showAll.addEventListener("click", function () {
  // Устанавливаем новый текст в параграф
  selectedCategory.textContent = "Не выбрана";
});

showLight.addEventListener("click", function () {
  // Устанавливаем новый текст в параграф
  selectedCategory.textContent = "Лёгкие ароматы";
});

showPersistent.addEventListener("click", function () {
  // Устанавливаем новый текст в параграф
  selectedCategory.textContent = "Стойкие ароматы";
});

showMasculine.addEventListener("click", function () {
  // Устанавливаем новый текст в параграф
  selectedCategory.textContent = "Мужские ароматы";
});
