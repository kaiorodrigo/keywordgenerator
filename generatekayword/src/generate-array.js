export default function generatedarray() {
  function define_kay_paragrafo() {
    let arrayLink =
      "https://gistcdn.githack.com/kayooooooo/04019210fb51e78638e5ebdfdb059177/raw/9ffc5dd17e0527d548e508a0bdfb954b3fe3ebe4/array";

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
