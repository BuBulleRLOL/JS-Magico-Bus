import jeuDetails from "../components/JeuDetails";
import Page from "./Page"

export default class PageDuJeu extends Page {

    #slug
    #game

    constructor(slug){
        super();
        this.slug = slug;
    }

    render() {
		return /*html*/ `
		<section id="PageDuJeu"></section>`;
	}
    
    mount(element){
        super.mount(element)

        fetch(`https://api.rawg.io/api/games/${this.slug}`)
            .then(response => response.json())
            .then(game => new jeuDetails(game))
            .then(thumbnail => document.querySelector("#PageDuJeu").innerHTML += thumbnail.render());
    }
}

