let option=document.getElementById("option"),
    workg=document.getElementById("work-g"),
    texto=document.getElementById("texto");



var letters = new Array(
    {img:'<img src="./../../../assets/letters/a.png" width="150" height="150">',id:"a"},
    {img:'<img src="./../../../assets/letters/v.png" width="150" height="150">',id:"v"},
    {img:'<img src="./../../../assets/letters/e.png" width="150" height="150">',id:"e"},
    {img:'<img src="./../../../assets/letters/p.png" width="150" height="150">',id:"p"},
    {img:'<img src="./../../../assets/letters/n.png" width="150" height="150">',id:"n"}
);
//cargar las letras
var game = new Array();

var works = new Array (
    {w:"pan", img:'<img src="./../../../assets/pan.png" width="150" height="150">'},
    {w:"ave", img:'<img src="./../../../assets/ave.png" width="200" height="150">'}
);

cargaletters()

function cargaletters() {
    let abc = [];
    for(i=0;i<5;i++){
        abc.push(`<button type="button" class="btn btn-outline-success" onclick="selec(${letters[i].id})">`+letters[i].img+`</button>`);
    }
    abc.sort(function() {return Math.random() - 0.5});
    option.innerHTML = abc;
}

separar()
cargaimagen()
function cargaimagen() {
/*    var i = Math.round(Math.random()*1);    
    var imagen = document.getElementById("imagen");
    imagen.innerHTML=works[i].img;
*/
    var imagen = document.getElementById("imagen");
    imagen.innerHTML=works[0].img;
}


function separar() {
    letra = works[1].w;
    workg.innerHTML=letra;
    var separado = workg.textContent.split("");
    game = [separado.join(",")];
    texto.textContent = game+` `+game[0];
    //workg.innerHTML=(separado);
}

function selec(r) {
    if(r==1){
        
    }
}