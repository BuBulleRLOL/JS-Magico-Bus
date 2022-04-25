		import Page from './Page';
		import GameThumbnail from '../components/GameThumbnail';

		export default class Favoris extends Page {
			/*#logoEstChange = false;*/
			
			render() {
				return `
				<link rel="stylesheet" href="css/favoris.css">
				<div id="LesFavoris"></div>`;
			}

			mount(element) {
					JSON.parse(localStorage.getItem("GameNote_favs")).forEach(jeuFav => {
						fetch("https://api.rawg.io/api/games/" + jeuFav)
						.then(response => response.json())
						.then(e => { document.querySelector("#LesFavoris").innerHTML += new GameThumbnail(e).render();
						ajouterAuxFavoris(/*this.#logoEstChange*/);
						})
					})
			}
		}

		function ajoutDansLocalStorage(boutonFav) {
			localStorage.clear();
			let nom = boutonFav.alt.split('|')[1];
			let favoris = JSON.parse(localStorage.getItem('GameNote_favs'));
			if (favoris != null) {
				if (favoris.includes(nom)) {  //le retire
					supprimerDesFavoris(favoris,nom);
				}
				else {
					alert(nom + " ajouté");
					favoris.push(nom); // l'ajoute
				}
			}
			else{
				favoris = [nom]; //l'ajoute
			}
			localStorage.setItem("GameNote_favs", JSON.stringify(favoris));
		}

		function ajouterAuxFavoris(/*logoEstChange*/){
			/*changerLogoFavoris(logoEstChange);*/
			document.querySelectorAll(".fav").forEach(boutonFav => {
				boutonFav.addEventListener('click', event => {
					ajoutDansLocalStorage(boutonFav);
					event.preventDefault(); event.stopImmediatePropagation();
				})
			})
		}

		function supprimerDesFavoris(favoris,nom){
			alert(nom + " supprimé");
				favoris.splice(favoris.indexOf(nom), 1);
				document.querySelector("#" + nom)?.remove()
		}

		/*function changerLogoFavoris(logoEstChange){
			if(!logoEstChange){
				logoEstChange = true;
				document.querySelectorAll(".fav").forEach(function(e){
					e.src = "../images/retirer-favoris.png";
				})
			}
			else{
				logoEstChange =false;
				document.querySelectorAll(".fav").forEach(function(e){
					e.src = "../images/favoris.png";
				})
			}

		}*/

		export {ajouterAuxFavoris}
