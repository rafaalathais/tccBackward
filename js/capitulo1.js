import { collisions } from './colisoes.js';
import { dialogo1, quebraTexto} from './dialogos.js';
import { FundoQuarto, juliImg, quartoIMg, playerImg } from './resources.js';
import { Sprite, QuartoFundo} from './sprites.js';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');


dialogo1.forEach(dialogo => {dialogo.lines = quebraTexto(ctx, dialogo.texto, 380)});

let dialogoAtual = 0;
let dialogoAtivo = true;

// avançar dialogo1
function avancardialogo1(){
if(dialogoAtual < dialogo1.length - 1){
    dialogoAtual++;
} else {
    dialogoAtivo = false;
    animate();
}
}

//desenha capítulo no canvas
export function drawCapitulo1(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    
   Loop(); 

    canvas.addEventListener("click", function() {
        if(dialogoAtivo){
            avancardialogo1();
        }});
      
       // animate();

};

//desenha o dialogo1 inicio do jogo -> quarto
function dialogo1Cena1quarto(ctx){    

    if (dialogoAtivo){
        const dialogo = dialogo1[dialogoAtual];
    
        ctx.drawImage(FundoQuarto, 0, 0)
        
        //quadrado preto
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(50, 400, 920, 140);
    
        ctx.beginPath();
        ctx.strokeStyle = 'gold';
        ctx.strokeRect(50,400,920,140);

        // desenha texto falas
        ctx.font='12px dogicapixel';
        ctx.fillStyle=' white ';
        const altura = 26;

        dialogo.lines.forEach((line, index) => {
            ctx.fillText(line, 170, 435 + (index * altura))})   
    }   

      };
    
function Loop(){
    dialogo1Cena1quarto(ctx);
    window.requestAnimationFrame(Loop);   
};

//CENA 2  -> andando pela casa ---------------------------------------------------------------

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    }
}

function animate(){
    dialogoCena2AndarCasa();
    window.requestAnimationFrame(animate)
}
function dialogoCena2AndarCasa(){
    ctx.clearRect(0,0, canvas.width, canvas.height);

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

   QuartoFundo.desenhaCoisas();

   //boundaries.forEach(boundary => { boundary.draw();})
   testBoundary.draw();
   
    //quadrado preto
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(50, 400, 920, 140);

    ctx.beginPath();
    ctx.strokeStyle = 'gold';
    ctx.strokeRect(50,400,920,140);

    ctx.drawImage(juliImg, 60, 405, 130, 130);

    //player Juliane
    ctx.drawImage(playerImg, 0, 0, playerImg.width / 4, playerImg.height, canvas.width /2 - playerImg.width, canvas.height / 2 - playerImg.height / 2, playerImg.width / 4, playerImg.height)

    
    // desenha texto falas
    ctx.font='12px dogicapixel';
    ctx.fillStyle='white'; 
    
   // if(player.position.x + player.width)

    if (keys.w.pressed && lastKey === 'w') 
        movables.forEach(movable => {movable.position.y += 3})
    else if(keys.a.pressed && lastKey === 'a') 
        movables.forEach(movable => {movable.position.x += 3})
    else if(keys.s.pressed && lastKey === 's') 
        movables.forEach(movable => {movable.position.y -= 3})
    else if(keys.d.pressed && lastKey === 'd')
        movables.forEach(movable => {movable.position.x -= 3})
    
    
};

//colisões do quarto
const collisionsMapQuarto = [];
for (let i = 0; i < collisions.length; i+= 15){
    collisionsMapQuarto.push(collisions.slice(i, 15 + i))
}

class Boundary{
    static width = 45
    static height = 45
    constructor({position}){
        this.position = position;
        this.width = 45
        this.height = 45
    }

    draw(){
        ctx.fillStyle= 'red'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}
const boundaries = []
const offset = {
    x: 150,
    y: -5
}
collisionsMapQuarto.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 4716)
        boundaries.push(
            new Boundary({
                position:{    
                    x: j *  Boundary.width + offset.x,
                    y: i * Boundary.height + offset.y
              }
            })
        )
    } )
})

const testBoundary = new Boundary({
    position:{
        x: 400,
        y: 400,
    }
})
const movables = [QuartoFundo, testBoundary];

// movimento boneco
let lastKey = ''
window.addEventListener('keydown', (e) => {
    switch (e.key){
        case 'w':
            keys.w.pressed = true
            lastKey = 'w'
        break;
        case 'a':
            keys.a.pressed = true
            lastKey = 'a'
        break;
        case 's':
            keys.s.pressed = true
            lastKey = 's'
        break;
        case 'd':
            keys.d.pressed = true
            lastKey = 'd'
        break
    }
})

window.addEventListener('keyup', (e) => {
    switch (e.key){
        case 'w':
            keys.w.pressed = false
        break;
        case 'a':
            keys.a.pressed = false
        break;
        case 's':
            keys.s.pressed = false
        break;
        case 'd':
            keys.d.pressed = false
        break
    }
})


export {animate}


   


