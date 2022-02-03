
let operacion  = document.getElementById("operacion"),
    resul  = document.getElementById("resul"),
    selec  = document.getElementById("selec"),
    boton = document.getElementById("boton");
var imgX= "",
    imgY= "",
    imgZ= "";
var x=Math.floor(Math.random()*6),
    y= Math.floor(Math.random()*6),
    z="";
var aciertos = 0,
    errores=0;

var misImagenes = new Array(
    '<img src="./../../../assets/Numbers/zero.jpg" width="150" height="150">',
    '<img src="./../../../assets/Numbers/one.jpg" width="150" height="150">',
    '<img src="./../../../assets/Numbers/two.jpg" width="150" height="150">',
    '<img src="./../../../assets/Numbers/three.jpg" width="150" height="150">',
    '<img src="./../../../assets/Numbers/four.jpg" width="150" height="150">',
    '<img src="./../../../assets/Numbers/five.jpg" width="150" height="150">',
    '<img src="./../../../assets/Numbers/six.jpg" width="150" height="150">',
    '<img src="./../../../assets/Numbers/seven.jpg" width="150" height="150">',
    '<img src="./../../../assets/Numbers/eight.jpg" width="150" height="150">',
    '<img src="./../../../assets/Numbers/nine.jpg" width="150" height="150">',
    '<img src="./../../../assets/Numbers/ten.jpg" width="150" height="150">'
    );

cargaimagen()
function cargaimagen() {
    let botones = [];
    for(i=0;i<=10;i++){
        botones.push(`<button type="button" class="btn btn-outline-success" onclick="number(${i})">`+misImagenes[i]+`</button>`);
    }
    botones.sort(function() {return Math.random() - 0.5});
    boton.innerHTML = botones;
}
function generarsum(){
    z = x + y;
    imgX= misImagenes[x];
    imgY= misImagenes[y];
    imgZ= misImagenes[z];
    
    operacion.innerHTML =( `<h1>Cuanto es <br> `
    +imgX
    +` <img src="./assets/symbol/sum.png" width="100" height="100"> `
    +imgY
    +` <img src="./assets/symbol/same.png" width="100" height="100"> `
    +`</h1>`);
    resul.innerHTML=`<button type="button" class="btn btn-info" onclick="sum()">Enviar</button>`;
}

function sum() {
    generarsum()
    
    if(seleccionado!==""){

        if(seleccionado==z){
            resul.innerHTML = `<h1>Es correcto  <br>`
            +imgX +` <img src="./assets/symbol/sum.png" width="100" height="100"> `
            +imgY +` es `+imgZ + `</h1><button type="button" class="btn btn-success" onclick="generarsum()">Sigiente</button>`;
            operacion.innerHTML = "";
            selec.innerHTML = [];
            x=Math.floor(Math.random()*6);
            y= Math.floor(Math.random()*6);
            seleccionado="";
            cargaimagen();
            aciertos++;
            fin();

        }else if(seleccionado !==z || seleccionado==""){
            resul.innerHTML = `<h4>Incorrecto</h4><br>
            <h6>Intenta de nuevo</h6> <div id="resul">
            <button type="button" class="btn btn-danger"o onclick="generarsum()">Intentar</button>`;
            selec.innerHTML = [];
            errores++;
            fin();
        }
    }
}

seleccionado="";
function number(r){
    if(r==1){
        seleccionado=1;
        selec.innerHTML = misImagenes[seleccionado];
    }else if(r==2){
        seleccionado=2;
        selec.innerHTML = misImagenes[seleccionado];
    }else if(r==3){
        seleccionado=3;
        selec.innerHTML = misImagenes[seleccionado];
    }else if(r==4){
        seleccionado=4;
        selec.innerHTML = misImagenes[seleccionado];
    }else if(r==5){
        seleccionado=5;
        selec.innerHTML = misImagenes[seleccionado];
    }else if(r==6){
        seleccionado=6;
        selec.innerHTML = misImagenes[seleccionado];
    }else if(r==7){
        seleccionado=7;
        selec.innerHTML = misImagenes[seleccionado];
    }else if(r==8){
        seleccionado=8;
        selec.innerHTML = misImagenes[seleccionado];
    }else if(r==9){
        seleccionado=9;
        selec.innerHTML = misImagenes[seleccionado];
    }else if(r==0){
        seleccionado=0;
        selec.innerHTML = misImagenes[seleccionado];
    }else if(r==10){
        seleccionado=10;
        selec.innerHTML = misImagenes[seleccionado];
    }   
}

fin()
function fin(){
   var mensaje = document.getElementById("mensaje"); 
       mensaje.innerHTML= `<h1>Acietos: `+aciertos+
       `<br>Errores `+errores+`/3</h1>`;
    if(aciertos==5){
        document.getElementById("mensaje").innerHTML = "GANASTE "+`<button type="button" class="btn btn-success" onclick="generarsum()">Jugar de Nuevo</button>`;
        resul.innerHTML ="";
        operacion.innerHTML = "";
        selec.innerHTML = [];
        aciertos=0;
        errores=0;

        
    }else if(errores==3){
        document.getElementById("mensaje").innerHTML = "PERDISTE "+
        `<button type="button" class="btn btn-danger" onclick="generarsum()">Intentar Nuevamente</button>`;
        resul.innerHTML ="";
        operacion.innerHTML = "";
        selec.innerHTML = [];
        aciertos=0;
        errores=0;
    }
}