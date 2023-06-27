const phrase = document.querySelector("#quote");
const author = document.querySelector("#author");
const input = document.querySelector("#input");

// Цитаты на английском
fetch(`https://type.fit/api/quotes`)
  .then((response) => response.json())
  .then((data) => randomQuote(data));

//Получение случайной цитаты
function randomQuote(quotes) {
  console.log(quotes);

  this.addEventListener("keyup", (e) => {
    if (e.which === 13) {
      //старт при нажатии `Enter`
      const quote = _.sample(quotes); // получаем случайную цитату из массива

      phrase.innerHTML = quote.text;
      if (quote.author !== null) {
        author.innerHTML = quote.author; //проверка наличия автора
      } else {
        author.innerHTML = `Unknown author`;
      }
      input.textContent = ""; //очистка `div` при рестарте

      textOutput();
    }
  });
}

//Вывод текста #1
function textOutput() {
  let stringArr = phrase.textContent.split(""); //разбиваем фразу на массив из символов
  console.log(stringArr);

  stringArr.map((letter) => {
    let inputLetters = [];
    let wrongLetters = 0;

    document.addEventListener("keyup", (e) => {
      const key = e.key; //какая кнопка была нажата на клавиатуре
      const overlap = _.includes(stringArr, key, letter); //проверка совпадения нажатой кнопки и символа в массиве

      if (overlap === true) {
        inputLetters.push(key);
        input.textContent = inputLetters.join(""); //Вывод текста в `div`
      } else {
        console.log(wrongLetters++); // Подсчет неправильных нажатий
      }
    });
  });
}

// Вывод текста #2
/* function textOutput() {
  const stringArr = phrase.textContent;

  for (const l of stringArr) {
    const letter = l;//разбиваем фразу на символы

    document.addEventListener("keyup", (e) => {
      const key = e.key; //какая кнопка была нажата на клавиатуре

      // const index = _.indexOf(stringArr, letter); // индекс буквы
      // const letterIndex = stringArr.charAt(index); //буква по индексу  //возможно понадобится для проверки соответствия с написанным

      if (letter === key) {
        input.textContent = key;
      }
    });
  }
} */
