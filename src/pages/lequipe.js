    import Page from './Page.js';

    export default class lequipe extends Page {

        render() {
            return /*html*/ `
                <link rel="stylesheet" type="text/css" href="css/equipe.css" />
                <link rel="stylesheet" type="text/css" href="css/main.css" />
                <table>
                    <tr>
                    <img id="img" src="" style="display: none";>
                <td>
                <img id="img" src="../images/portrait.png">
                <p>Carrette Tanguy</p>
                <p>alias : Pitchoka</p>
                <p>jeu vidéo préféré : Portal 2 </p>
                <p>Pourcentage de note : 100/3%</p>
                </td>
                </br>

                <td>
                <img id="img" src="../images/portrait.png">
                <p>Senicourt Mathis</p>
                <p>alias : Xtreme Neox</p>
                <p>jeu vidéo préféré : Subnautica</p>
                <p>Pourcentage de note : 100/3%</p>
                </td>
                </br>

                <td><img id="img" src="../images/portrait.png">
                <p>De Buyst Harold</p><p>alias : Bubulle</p>
                <p>jeu vidéo préféré : Rocket League</p>
                <p>Pourcentage de note : 100/3%</p>
                </td>
                </br>

                </tr>
                </table>
                `
            }

        mount(element) {
            super.mount(element);
            
            var img=document.getElementById('img');
            var angle=0;
           setInterval(function(){
                img.style.transform="rotateZ("+ angle++ +"deg)";
            }, 30);
        }
     }
