export default function rodando() {
  var area = document.createElement("textarea");
  document.body.appendChild(area);
  area.style.display = "none";

  //elemntos do conteudo e do botão para copiar
  var content = document.querySelectorAll(".js-content");
  var copy = document.querySelectorAll(".js-copy");

  for (var i = 0; i < copy.length; i++) {
    copyOnClick(i);
  }

  // função que adiciona o conteúdo a ser copiado no event Clipboard
  function copyOnClick(i) {
    copy[i].addEventListener("click", function () {
      area.readOnly = "true";
      area.style.display = "block";
      area.value = content[i].innerText;
      area.select();
      navigator.clipboard.writeText(area.value);
      area.style.display = "none";

      // selecionar o elemento botton para mudar de "Copy" para "Copiado"
      var t = this;
      t.innerHTML = "<span style='color: black;'>Copiado</span>";
      setTimeout(function () {
        t.innerHTML = "Copy";
      }, 2000);

      // código para selecionar o texto para indicar ao usuário o que foi copiado
      setTimeout(function () {
        var range = document.createRange();
        range.selectNodeContents(content[i]);
        var selectedText = window.getSelection();
        selectedText.removeAllRanges();
        selectedText.addRange(range);
        setTimeout(function () {
          selectedText.removeAllRanges();
        }, 2000);
      }, 0);
    });
  }
}
