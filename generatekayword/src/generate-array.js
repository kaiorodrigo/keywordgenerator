export default function generatedarray() {
  function define_kay_paragrafo() {
    let arrayLink =
      "https://gist.githubusercontent.com/kayooooooo/04019210fb51e78638e5ebdfdb059177/raw/db329b826d2a7ecb7780094499f509a756dec675/array";

    fetch(arrayLink)
      .then((response) => response.text())
      .then((data) => {
        const array = JSON.parse(data);

        var arrayLength = array.length;
        var randomIndex = Math.floor(Math.random() * arrayLength);
        var randomValue = array[randomIndex];

        var paragrafo = document.querySelector(".js-content");
        paragrafo.innerHTML = randomValue;
      })
      .catch((error) => {
        console.error("Erro ao obter o array:", error);
      });
  }
  document.querySelector(".btn-gerar").addEventListener("click", (event) => {
    define_kay_paragrafo();
  });
  document.addEventListener("DOMContentLoaded", define_kay_paragrafo());
}
