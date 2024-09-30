const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');


const image = new Image();
image.src = './img/pngsom.png';
var Musica;


function drawCaixaSom(){

    ctx.fillStyle = 'lightblue';
    ctx.fillRect(960, 15, 50, 50);

    ctx.drawImage(image, 960, 15);
};

 
       class sound {

    constructor(src) {
        this.sound = document.createElement("audio");
        this.sound.src = src;
        this.sound.setAttribute("preload", "auto");
        this.sound.setAttribute("controls", "none");
        this.sound.style.display = "none";
        document.body.appendChild(this.sound);
        this.play = function () {
            this.sound.play();
        };
        this.stop = function () {
            this.sound.pause();
        };
    }
}       

function LoopMusica(){
    drawCaixaSom();
    window.requestAnimationFrame(LoopMusica);   
};

function playMusic(){
       Musica = new sound("./audio/Interlude-Dawn.mp3");
       Musica.play();

}

export {LoopMusica, sound, playMusic}



    