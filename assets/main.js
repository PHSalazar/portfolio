const links = document.querySelectorAll('#menu-container a');
const divs = document.querySelectorAll('.aside_right-frame');

function linkClick() {
  links.forEach((item) => {
    item.addEventListener('click', (event) => {
      // Removendo classe ACTIVE dos links
      removeClassActive();

      //Removendo as divs que foram exibidas anteriormente
      removeDiv();

      //Adicionando classe ACTIVE ao item clicado
      event.target.classList.add('active');

      //Obtendo informacoes da div a ser exibida
      let id_link = event.target.getAttribute('data-link');
      let div = document.getElementById(id_link);

      //Mostrando div escolhida
      div.classList.add('show');
    });
  });
}

linkClick();

function removeClassActive() {
  links.forEach((link) => link.classList.remove('active'));
}

function removeDiv() {
  divs.forEach((element) => {
    element.classList.remove('show');
  });
}

function copyDivToClipboard() {
  var range = document.createRange();
  range.selectNode(document.getElementById('email-copy'));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();

  alert('E-mail de contato copiado para área de transferência');
}
