	import Component from './Component.js';
	import Img from './Img.js';

	export default class GameThumbnail extends Component {
		constructor({name, background_image, metacritic, slug}) {
			const favBouton = "../images/favoris.png";
			super('article', [{ name: 'class', value: 'gameThumbnail' }, { name: 'id', value: `${slug}` }], [
				new Component('a', { name: 'href', value: `/detail-${slug}` }, [	
					new Img(background_image,250),
					new Component('section', null, [
						new Component('h4', null, name),
						new Component('h4', null, [
							new Component('p',null,`Metascore : ${metacritic}`
							),
						]),
						new Component('img',[{name:'src',value:favBouton},{name:'id',value:'imgTourne'},{name:'class',value:'fav'},{name:'title',value:'Ajout fav'},{name:'alt',value:name+"|"+slug}],null)
					]),
				]),
			]);

			
		}
	}