import {quartoIMg} from './resources.js';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

class Sprite {
    constructor({position, velocity, image}){
        this.position = position
        this.image = image
    }

    desenhaCoisas(){
        ctx.drawImage(this.image, this.position.x, this.position.y)
    }

}

const offset = {
    x: 150,
    y: -5
}

const QuartoFundo = new Sprite({
    position: {
        x: offset.x,
        y: offset.y,
    }, 
    image: quartoIMg
})

export {Sprite, QuartoFundo}

/*class Player {
    constructor(){
        this.position = {
            x: 100,
            y: 100
        }

        this.width = 100
        this.height = 100
    }

    desenhaPlayer(){
        ctx.fillStyle ='red';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}
const player = new Player();*/