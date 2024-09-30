const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

export function drawMenu(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height);

const image = new Image();
image.src = './img/fundopixilgih.png';
image.onload = () => {

    ctx.drawImage(image, 0,0)
}
   
}

export function Mostrabotoes(mostra){
    if (mostra){
        menu.style.display= 'inline-block';
    }else{
        menu.style.display= 'none';
    }
    }

    

