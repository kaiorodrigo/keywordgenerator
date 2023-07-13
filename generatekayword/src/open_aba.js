export default function openMultiAbas() {
  document
    .querySelector("#meu_elemento")
    .addEventListener("click", function exe_openTab(e) {
      e.preventDefault();

      var paragrafo = document.querySelector(".js-content");
      var valor_atual = paragrafo.innerHTML;
      console.log(valor_atual);

      openNewBackgroundTab(`https://www.google.com/search?q=${valor_atual}`);
      openNewBackgroundTab("");
    });
}

function openNewBackgroundTab(url) {
  var a = document.createElement("a");
  a.href = url;
  var evt = document.createEvent("MouseEvents");

  // O décimo segundo parâmetro de initMouseEvent define a tecla ctrl
  evt.initMouseEvent(
    "click",
    true,
    true,
    window,
    0,
    0,
    0,
    0,
    0,
    true,
    false,
    false,
    false,
    0,
    null
  );
  a.dispatchEvent(evt);
}
