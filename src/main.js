import Router from './Router';
import  Accueil from './pages/Accueil';
import lequipe from './pages/lequipe';
import Favoris from './pages/Favoris'

	const accueil = new  Accueil([]);
	const favoris = new Favoris();
	const equipe = new lequipe();

Router.titleElement = document.querySelector('.pageTitle');
Router.contentElement = document.querySelector('.pageContent');
Router.menuElement = document.querySelector('.mainMenu');
Router.routes = [
	{ path: '/', page:  accueil, title: 'Les Jeux' },
	{ path: '/mes-favoris', page: favoris, title: 'Mes favoris' },
	{ path: '/lequipe', page: equipe, title: 'Notre équipe' }
];

document.querySelector(
	'.logo'
).innerHTML += `<small> pour l'amour du jeu vidéo</small>`;

window.onpopstate = () => Router.navigate(document.location.pathname, false);
window.onpopstate();