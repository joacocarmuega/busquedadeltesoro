var readline = require("readline");

var terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

console.log("hola jugador!!");
console.log("para donde queres ir? al (B) bosque o al (D) desierto?");
console.log("que opcion elegis?");

var recursos = {
  fosforos: 10,
  llave_misteriosa: 0,
  latas_de_sopa: 0,
  agua: 10,
  pez: 0,
  patines_de_hielo: 0,
  bate: 0,
  llave_misteriosa: 0,
  pocion_magica: 0,
};

terminal.on('line', function (opcion) {

  console.log("elegiste la opcion "+opcion);

  if (opcion == "r") {
    console.log(recursos);
  }

  if (opcion == "d") {

    console.log("elegiste el desierto, te moriste de sed");

  }

  if (opcion == "b") {

    console.log("elegiste el bosque, se escucha un sonido extraño, queres (i) investigar? o (m) correr de miedo?");

  }

  if (opcion == "i") {
    console.log("elegiste investigar entraste en el bosque y encontraste una mochila con recursos");
    recursos.latas_de_sopa += 10;
    recursos.agua += 10;
    recursos.llave_misteriosa += 1;
    console.log("puedes ir (v) valle o a la (l) lago");
  }

  if (opcion == "m") {
    console.log("elegiste correr de miedo eres una gallina perdiste");
  }

  if (opcion == "l") {
    console.log("elegiste ir al lago o te ahogaste");
  }

  if (opcion == "v") {
    console.log("elegiste ir al valle encontraste un bate");
    recursos.bate += 1;
    console.log("de repente te aparecio un oso, que haces? (sopa) los distraes con una lata de sopa (bate) te defendes con un bate");
  }

  if (opcion == "bate") {
    console.log("el oso te agarra el bate y te pega en la cabeza, te moriste");
  }

  if (opcion == "sopa") {
    console.log("el oso se distrajo con la lata de sopa y tu te escapas");
    recursos.latas_de_sopa -= 1;
    console.log("ho encontraste una cueva que queres hacer (c) entrar a la cueva o (ex) seguir explorando");
  }
  if (opcion == "ex") {
    console.log("un conejo te asusto  y te dio un infarto");
  }
  if (opcion == "i") {
  console.log("encontraste una pocion magica");
  recursos.pocion_magica += 1;
  console.log("saliste de la cueva y vino un tigre (p) tirarle la pocion o (f) asustarlo con el fuego de los fosforos");
  }
  if (opcion == "f"){
    console.log("el tigre se asusto");
    recursos.fosforos -= 1;
    console.log("ho te encontraste dos lugares una (casa) o podes ir al (hielo)");
  }
  if (opcion == "p") {
    console.log("se te derramo la pocion perdiste");
  }
  if (opcion == "hielo") {
    console.log("se te rompio el hielo perdiste");
  }
  if (opcion == "casa") {
     console.log("encontraste un par de patines de hielo y pezes");
    recursos.patines_de_hielo += 2;
    recursos.pez += 10;
    recursos.llave_misteriosa -= 1;
    console.log("podes ir al hielo (s) ir sin nada o (patines) ir con los patines");
  }
  if (opcion == "s") {
    console.log("se te rompio el hielo perdiste");
  }
  if (opcion == "patines") {
    console.log("encontraste tres pez");
    recursos.pez += 3;
    console.log("podes (volver)volver a la casa o opcion (explorar) seguir explorando");
  }
  if (opcion == "volver") {
    ("llegas a la casa sano y salvo");
    console.log("empezo a nevar que haces (fuego)encendes un fosforo o (esperar)esperar a que pase la nevada");
  }
  if (opcion == "explorar") {
    console.log("te cayo un rayo perdiste");
  }
  if (opcion == "esperar") {
    console.log("te congelas y te moris");
  }
  if (opcion == "fuego") {
    recursos.fosforos -= 1;
    console.log("escuchaste halgo en el bosque (e) ir a investigar(c)correr de miedo");
  }
  if (opcion == "c") {
    ("te moris y perdes");
  }
  if (opcion == "e") {
   console.log("encotraste un tesoro ganaste");
  }
});
