const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

export function drawCapitulos(){
    ctx.clearRect(0,0, canvas.width, canvas.height)

    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font="50px dogicapixel"
    ctx.fillStyle = "white";
ctx.fillText("Capítulos",180,100);

ctx.font="27px dogicapixel"
ctx.fillStyle = "white";
ctx.fillText("capítulo 1",300,200);

ctx.font="27px dogicapixel"
ctx.fillStyle = "white";
ctx.fillText("capítulo 2",300,265);



};