
/*
'<img src="./../../../assets/Monkey.png" width="200" height="200">',
'<img src="./../../../assets/Penguin.png" width="200" height="200">',
'<img src="./../../../assets/Pig.png" width="200" height="200">',
'<img src="./../../../assets/Sheep.png" width="200" height="200">',
'<img src="./../../../assets/Spider.png" width="200" height="200">',
'<img src="./../../../assets/Turtle.png" width="200" height="200">',*/



var cartas = new Array( 
    {nombre: '<img src="./../../../assets/Bear.png" width="100" height="100">', seleccion: false},
    {nombre: '<img src="./../../../assets/Bear.png" width="100" height="100">', seleccion: false},

    {nombre: '<img src="./../../../assets/Bee.png" width="100" height="100">', seleccion: false},
    {nombre: '<img src="./../../../assets/Bee.png" width="100" height="100">', seleccion: false},

    {nombre: '<img src="./../../../assets/Chameleon.png" width="100" height="100">', seleccion: false},
    {nombre: '<img src="./../../../assets/Chameleon.png" width="100" height="100">', seleccion: false},

    {nombre: '<img src="./../../../assets/Cow.png" width="100" height="100">', seleccion: false},
    {nombre: '<img src="./../../../assets/Cow.png" width="100" height="100">', seleccion: false},

    {nombre: '<img src="./../../../assets/Deer.png" width="100" height="100">', seleccion: false},
    {nombre: '<img src="./../../../assets/Deer.png" width="100" height="100">', seleccion: false},

    {nombre: '<img src="./../../../assets/Duck.png" width="100" height="100">', seleccion: false},
    {nombre: '<img src="./../../../assets/Duck.png" width="100" height="100">', seleccion: false}, 

    {nombre: '<img src="./../../../assets/Elephant.png" width="100" height="100">', seleccion: false},
    {nombre: '<img src="./../../../assets/Elephant.png" width="100" height="100">', seleccion: false},

    {nombre: '<img src="./../../../assets/Hippopotamus.png" width="100" height="100">', seleccion: false},
    {nombre: '<img src="./../../../assets/Hippopotamus.png" width="100" height="100">', seleccion: false}

    );
      
  var intentos = 0;
  var jugada1 = "";
  var jugada2 = "";
  var identificadorJ1 = "";
  var identificadorJ2 = "";
  
  function iniciarJuego() {  
    var dato = document.getElementById("juego");
  
    cartas.sort(function() {return Math.random() - 0.5});
    for ( var i = 0 ; i < 16 ; i++ ) {
      var carta = cartas[i].nombre;
      var dato = document.getElementById( i );
      dato.dataset.valor = carta;
    }
  }

  
  function girarCarta(){
    var evento = window.event;
  
    jugada2 = evento.target.dataset.valor;
    identificadorJ2 = evento.target.id;
  
    if (jugada1 !== ""){
      if (jugada1 === jugada2 && identificadorJ1 !== identificadorJ2 && cartas[parseInt(identificadorJ2)].seleccion != true 
      && cartas[parseInt(identificadorJ1)].seleccion != true) {
        
        cartas[parseInt(identificadorJ1)].seleccion = true;
        cartas[parseInt(identificadorJ2)].seleccion = true;
  
        colorCambio(identificadorJ2, "lightgreen", jugada2);
        colorCambio(identificadorJ1, "lightgreen", jugada2);
        vaciar();
        comprobar();
      }else if(identificadorJ1 !== identificadorJ2){
        var self = this;
        setTimeout(function(){
          colorCambio(self.identificadorJ1, "aquamarine", " ")
          colorCambio(self.identificadorJ2, "aquamarine", " ")
          vaciar()
        },200);
  
        colorCambio(identificadorJ2, "white", jugada2);
      }
    }else if(jugada2 !== "valor"){
  
      colorCambio(identificadorJ2, "white", jugada2);
      jugada1 = jugada2;
      identificadorJ1 = identificadorJ2;
    }
  };
  
  function vaciar(){
    jugada1 = "";
    jugada2 = "";
    identificadorJ1 = "";
    identificadorJ2 = "";
  }
  
  function colorCambio(posicion, color, contenido){
    document.getElementById(posicion.toString()).style.backgroundColor = color;
    document.getElementById(posicion.toString()).innerHTML = contenido;
  } 
  
  function comprobar(){
    var aciertos = 0;
    for(var i = 0 ; i < 16 ; i++){
      if (cartas[i].seleccion == true){
        aciertos ++;
      }
    }
  
    if(aciertos == 16){
      document.getElementById("mensaje").innerHTML = "GANASTE";
    }
  }
  
  function resetearJuego(){
        cartas.sort(function() {return Math.random() - 0.5});
        for (var i = 0; i < 16 ; i++){
          var carta = cartas[i].nombre;
          var dato = document.getElementById(i);
          dato.dataset.valor = carta;
          colorCambio(i, 'aquamarine', ' ');
        }
    };