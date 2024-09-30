/*import { resources } from '../js/resources';
import ''*/
import { drawMenu, Mostrabotoes} from "./menu.js";
import { drawCapitulo1} from "./capitulo1.js";
import { drawCapitulos } from "./capitulos.js";


const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;


ctx.fillStyle = 'lightpink';
ctx.fillRect(0, 0, canvas.width, canvas.height);  //(x, y, widht, haigh)

let telaAtual = 'menu';


//desenhando cada tela
function draw(){
    ctx.clearRect(0,0, canvas.width, canvas.height);

    switch (telaAtual){
        case 'menu':
        drawMenu();
        Mostrabotoes(true);
        break;
        case 'capitulos':
            drawCapitulos();
            Mostrabotoes(false);
            break;
            case 'capitulo1':
            drawCapitulo1();
            Mostrabotoes(false);
            break;
            default:
                denhaMenu();
    }
}



//botoes menu
const comecarbotao = document.getElementById("comecar")
const capitulosbotao = document.getElementById("capitulos")

comecarbotao.addEventListener('click', function(){
    telaAtual = 'capitulo1';
    draw();
});

capitulosbotao.addEventListener('click', function(){
    telaAtual = 'capitulos';
    draw();
});

// dialogos cap 1

draw();



   export {canvas, ctx};
