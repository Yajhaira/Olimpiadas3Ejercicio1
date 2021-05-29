function preload() {
  /*img1 = loadImage('assets/Hombre_con_saco.png');
  img2 = loadImage('assets/Hombre_pelo_negro.png');
  img3 = loadImage('assets/Mujer_pelo_azul.png');
  img4 = loadImage('assets/Mujer_pelo_castaño.png');
  img5 = loadImage('assets/Mujer_pelo_rizado.png');*/
}

let juli;
let nicoll;
let andrea;
let luis;

function setup() {
  createCanvas(809, 400); //tamaño para que quede con una margen bonita
  juli = new cuerpo(100,100,"azul", true, true); //constructor de personas y elección de parámetros
  nicoll = new cuerpo(300,100, "rojo", true, true);
  andrea = new cuerpo(500,100, "verde", false, true);
  luis = new cuerpo(700,100, "amarillo", true, false);

  //image(img1, 200, 200, 150, 150);
  //image(img2, 200, 200, 150, 150);
  //image(img3, 200, 200, 150, 150);
  //image(img4, 200, 200, 150, 150);
  //image(img5, 200, 200, 150, 150);
}

function draw() {
  background(220);

  juli.show(); //mostrar cada usuario
  nicoll.show();
  andrea.show();
  luis.show();
  
}

