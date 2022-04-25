    import Component from './Component.js';

    export default class JeuDetails extends Component {

        constructor(jeu) {
            const name = jeu.name;
            const slug = jeu.slug;
            const description = jeu.description;
            const released = jeu.released;
            const rating = jeu.rating;
            const ratings = jeu.ratings;
            const parent_platforms = jeu.parent_platforms;
            const genres = jeu.genres;
            const tags = jeu.tags;
            const image = jeu.background_image;
           const favBouton = "../images/favoris.png";

            super('div', [{ name: 'class', value: 'details' }, { name: 'id', value: `${name}` }], [
               /*new Component('img', null, {new Img(image,250)}),*/
                new Component('h1', null, `${name}`),

                new Component('h1', null, 'Ajouter Aux Favoris'),
                new Component('img',[{name:'src',value:favBouton},{name:'id',value:'imgTourne'},{name:'class',value:'fav'},{name:'title',value:'Ajout fav'},{name:'alt',value:name+"|"+slug}],null),

                new Component('h1', null, 'Rating'),
                new Component('p', null, `${rating}`),

                new Component('h1', null, 'Ratings'),
                new Component('ul', null, ratings.map(rate => new Component('li', null, `${rate.title} : ${rate.count}`))),

                new Component('h1', null, 'Date de sortie'),
                new Component('p', null, `${released}`),   

                new Component('h1', null, `Genres`),
                new Component('ul', null, genres.map(genre => new Component('li', null, `${genre.name}`))),

                new Component('h1', null, 'Description'),
                new Component('p', null, `${description}`),

                new Component('h1', null, `Tags`),
                new Component('ul', null, tags.map(tag => new Component('li', null, `${tag.name}`))),
                
                new Component('h1', null, 'Plateforms'),
                new Component('ul', null, parent_platforms.map(plateform => new Component('li', null, `${plateform.platform.name}`)
                )),
            ]);
        }
    }