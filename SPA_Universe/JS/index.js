import { Router } from './router.js';

const router = new Router();
window.router = router;  // Torna o roteador acessível globalmente

router.add('/', '/pages/home.html');
router.add('/universo', '/pages/universo.html');
router.add('/exploracao', '/pages/exploracao.html');
router.add(404, '/pages/404.html');  // Adiciona uma página 404 como fallback

router.handle();  // Lida com a rota inicial

window.onpopstate = () => router.handle();  // Lida com navegação pelo histórico
