export class Router {
  routes = {};

  add(routeName, page) {
    this.routes[routeName] = page;
  }

  handle() {
    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes[404];

    fetch(route)
      .then(response => response.text())
      .then(html => {
        document.querySelector('#app').innerHTML = html;
        // Se a página carregada tiver botões de navegação interna, devemos adicionar event listeners novamente
        attachEventListeners();
      })
      .catch(() => {
        document.querySelector('#app').innerHTML = '<h1>Page not found</h1>';
      });
  }
}

function attachEventListeners() {
  // Adicione event listeners para navegação interna após carregar a nova página
  const navButton = document.getElementById('navigate-to-universo');
  if (navButton) {
    navButton.addEventListener('click', function(event) {
      event.preventDefault();
      route('/universo');
    });
  }
}
