		import Page from './Page';
		import Component from '../components/Component';
		import Router from '../Router';
		import GameThumbnail from '../components/GameThumbnail';
		import {ajouterAuxFavoris} from "./Favoris";

		export default class Accueil extends Page {
			#jeux;
			#numeroDeLaPage = 1;
			#nomDuJeu = ""; #nomDuJeuGenre = ""; #nomDuJeuOrdre = ""; //noms pour le formulaire
			#besoinDeViderLaPage = true; #besoinDeNettoyerPageDaccueil = false;
			#listeVide = "";

			constructor(jeux) {
				super('PizzaList');
				this.jeux = jeux;
			}

			set jeux(value) {
				this.#jeux = value;
				this.children = this.#jeux.map(jeux => new GameThumbnail(jeux));
			}

			mount(element) {
				super.mount(element);
				if (this.#besoinDeViderLaPage) {
					this.#besoinDeViderLaPage = false;
					this.#nomDuJeu = ""; this.#nomDuJeuGenre = ""; this.#nomDuJeuOrdre = "";
					this.#numeroDeLaPage = 1;
					this.faireEvenement();
				} 

				if(this.#besoinDeNettoyerPageDaccueil){
					document.querySelector("#listGames").innerHTML = this.#listeVide;
					this.#besoinDeNettoyerPageDaccueil = false;
				}

				//on charge les jeux
				fetch(`https://api.rawg.io/api/games?key=6d64d94371584642b5b60f3425eaa8d3&dates=2020-01-01,2100-01-01&metacritic=50,100&search="${this.#nomDuJeu}"${this.#nomDuJeuGenre}${this.#nomDuJeuOrdre}&page=${this.#numeroDeLaPage}`)
					.then(response => response.json())
					.then(e => e.results)
					.then(responseJson => {
						this.games = responseJson;
					return responseJson;
				})
					.then(e => e.forEach(element => {
						document.querySelector("#listGames").innerHTML += new GameThumbnail(element).render();
					}))
					.then(e => {
						ajouterAuxFavoris();
					})
					.then(e => {
						document.querySelectorAll(".gameThumbnail a").forEach(e => {
							e.addEventListener('click', event => {
								event.preventDefault();
								Router.navigate('/detail-' + e.parentElement.id);
							})
						})
					})
			}	



			render() {
				this.#besoinDeViderLaPage = true;
				return `
				<form class="formulaire">
				<p>Retrouver un jeu
						<input name="recherche" type="text"/>
						<select name="genre">
							<option value="selected">les genres</option>
						</select>
						
						<select name="order">
							<option value="&ordering=-pertinence">pertinence</option>
							<option value="&ordering=-metacritic">Note Metacritic</option>
							<option value="&ordering=-released">Date de sortie</option>
						</select>
						<button type="submit">Rechercher</button></p>
				</form>
				<div id="listGames">

				</div><br>` +
					new Component("div",
						[{ name: 'style', value: 'text-align:center; color:black;' }], 
					new Component("button", 
						[{ name: 'id', value: 'boutonJeuxSuivants' }, 
					{ name: 'style', value: 'background-color: grey ; border-radius: 10px ; border: 4px double #cccccc; font-size:30px ; width: 20% ;' }], "jeux suivants").render()).render();
			}


			faireEvenement(){
				this.element.querySelector('#boutonJeuxSuivants').addEventListener('click', e => {
					e.preventDefault();
					this.#numeroDeLaPage ++;
					this.mount(this.element);
				})

				let e = this.element.querySelector('select[name="genre"]');
				fetch("https://api.rawg.io/api/genres?key=6d64d94371584642b5b60f3425eaa8d3")
					.then(reponse => reponse.json())
					.then(e => e.results)
					.then(responseJson => responseJson.forEach(element => {
						e.innerHTML += `<option value="&genres=${element.slug}">${element.name}</option>`
					}));
					
				const form = this.element.querySelector('.formulaire');
				form.addEventListener('submit', event => {
					event.preventDefault();
					this.#nomDuJeu = this.element.querySelector('input[name="recherche"]').value + " ";
					this.#nomDuJeuOrdre = this.element.querySelector('select[name="order"]').value;
					this.#nomDuJeuGenre = this.element.querySelector('select[name="genre"]').value;
					this.#numeroDeLaPage = 1;
					this.#besoinDeNettoyerPageDaccueil = true;
					this.mount(this.element);
				});
			}
		}

