const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

export function drawCapitulo2(){
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}