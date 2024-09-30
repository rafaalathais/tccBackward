
const dialogo1 =[
    {  texto: "Peixonauta e Rosa percebem um arco-íris na superfície do lago, e ele está se espalhando rapidamente pelas águas! Eles descobrem que o arco-íris é, na verdade, uma mancha de óleo. Com a ajuda das pistas da POP, da Marina e do Zico, eles começam uma investigação para descobrir de onde este óleo está vindo."}, 
    {texto: "olá"},
    {  texto: "BTS, também conhecido como Bangtan Boys é um grupo masculino sul-coreano formado pela empresa Big Hit Music, uma subsidiária da HYBE Corporation, em 2013. Ele é composto por sete membros: RM, Jin, SUGA, J-Hope, Jimin, V e Jungkook."},
    {  texto: "Yo sé quién soy -dijo Don Quijote-, y sé que puedo ser, no sólo los que he dicho, sino todos los Doce Pares de Francia."}, 
    {  texto: "Loremisusoaos absjasjas"},
    {  texto: "fim"}
];

const dialogo2 =[
    {  texto: "Peixonauta e Rosa percebem um"}, 
    {texto: "olá"},
    {  texto: "BTS, também conhecido como Bangtan Boys é um grupo masculino sul-coreano formado pela empresa Big Hit Music, uma subsidiária da HYBE Corporation, em 2013. Ele é composto por sete membros: RM, Jin, SUGA, J-Hope, Jimin, V e Jungkook."},
    {  texto: "Yo sé quién soy -dijo Don Quijote-, y sé que puedo ser, no sólo los que he dicho, sino todos los Doce Pares de Francia."}, 
    {  texto: "Loremisusoaos absjasjas"},
    {  texto: "fim"}
];





// quebrando linhas do dialogo
function quebraTexto(ctx, texto, maxWidth){
    const words = texto.split(' ');
    let line = '';
    let lines = [];

    words.forEach((word) => {
        let testLine = line + word + ' ';

        let metrics = ctx.measureText(testLine);
        let testWidht = metrics.width;

        if (testWidht > maxWidth && line !== ''){
            lines.push(line);
            line = word + ' ';
        } else {
            line = testLine;
        }
    });
    lines.push(line.trim());
   
    return lines;
}

export {dialogo1, quebraTexto};