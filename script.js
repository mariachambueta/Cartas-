// Baraja de cartas
const baraja = [
  "images/carta1.png",
  "images/carta2.png",
  "images/carta3.png",
  "images/carta4.png",
  "images/carta5.png",
  "images/carta6.png",
  "images/carta7.png",
  "images/carta8.png",
  "images/carta9.png",
  "images/carta10.png",
  "images/carta11.png",
  "images/carta12.png",
  "images/carta13.png",
  "images/carta14.png",
  "images/carta15.png",
  "images/carta16.png",
  "images/carta17.png",
  "images/carta18.png",
  "images/carta19.png",
  "images/carta20.png",
  "images/carta21.png",
  "images/carta22.png",
  "images/carta23.png",
  "images/carta24.png",
  "images/carta25.png",
  "images/carta26.png",
  "images/carta27.png",
  "images/carta28.png",
  "images/carta29.png",
  "images/carta30.png",
  "images/carta31.png",
  "images/carta32.png",
  "images/carta33.png",
  "images/carta34.png",
  "images/carta35.png",
  "images/carta36.png",
  "images/carta37.png",
  "images/carta38.png",
  "images/carta39.png",
  "images/carta40.png",
  "images/carta41.png",
  "images/carta42.png",
  "images/carta43.png",
  "images/carta44.png",
  "images/carta45.png",
  "images/carta46.png",
  "images/carta47.png",
  "images/carta48.png",
  "images/carta49.png",
  "images/carta50.png",
  "images/carta51.png",
  "images/carta52.png",
  "images/carta53.png",
  "images/carta54.png",
  "images/carta55.png",
  "images/carta56.png",
  "images/carta57.png",
  "images/carta58.png",
  "images/carta59.png",
  "images/carta60.png",
  "images/carta61.png",
  "images/carta62.png",
  "images/carta63.png",
  "images/carta64.png",
  "images/carta65.png",
  "images/carta66.png",
  "images/carta67.png",
  "images/carta68.png",
  "images/carta69.png",
  "images/carta70.png",
  "images/carta71.png",
  "images/carta72.png",
  "images/carta73.png",
  "images/carta74.png",
  "images/carta75.png",
  "images/carta76.png",
  "images/carta77.png",
  "images/carta78.png",
  "images/carta79.png",
  "images/carta80.png",
  "images/carta81.png",
  "images/carta82.png",
  "images/carta83.png",
  "images/carta84.png"


];

// Glosario de significados
const glosario = {
  1: "Una propuesta que genera conexión emocional inmediata, que atrapa al usuario no solo por la funcionalidad sino por el sentimiento que despierta.",
  2: "Idea innovadora que rompe expectativas, que ofrece un giro inesperado que causa asombro y curiosidad.",
  3: "Proyecto que evoca nostalgia o inocencia, inspirado en juegos, colores o experiencias que transmiten alegría pura.",
  4: "Concepto que rescata lo clásico y lo reinterpreta en clave moderna, apelando a la memoria cultural y estética de épocas pasadas.",
  5: "Proyecto que explora lo que viene, usando estética avanzada, tecnología emergente o propuestas visionarias.",
  6: "Una solución que simplifica procesos y libera al usuario de tareas repetitivas, transmitiendo eficiencia y comodidad.",
  7: "Experiencia donde el hacer con las manos, el trabajo artesanal o la interacción física son parte del valor del proyecto.",
  8: "Idea adaptable y flexible, que acompaña al usuario en movimiento y se integra fácilmente en distintos contextos.",
  9: "Proyecto que transmite estabilidad, permanencia y solidez, pensado para durar en el tiempo.",
  10: "Inspiración en lo sostenible y autosuficiente, con proyectos que aprovechan recursos naturales de manera innovadora.",
  11: "Proyecto que empodera al usuario para crear, armar o personalizar, dándole protagonismo en el proceso creativo.",
  12: "Idea que no representa algo literal, sino que juega con formas, colores o conceptos abiertos a múltiples interpretaciones.",
  13: "nspiración en hacer invisible lo tangible: reducir lo físico al mínimo, transformar objetos en experiencias digitales o intangibles.",
  14: "Proyecto que busca armonía con el entorno, inspirado en formas orgánicas, materiales ecológicos o procesos biológicos.",
  15: "Idea que crece y se adapta según las necesidades, un proyecto escalable que no tiene límites fijos.",
  16: "Inspiración en geometrías puras (círculos, cuadrados, triángulos) como base estética y conceptual.",
  17: "Proyecto que se multiplica en patrones repetitivos, creando complejidad a partir de la simplicidad.",
  18: "Inspiración en movimiento fluido y rítmico, una idea que transmite dinamismo y continuidad.",
  19: "Proyecto que se organiza en módulos o superficies, adaptable para componer estructuras más grandes.",
  20: "Inspiración en la naturaleza viva: curvas suaves, crecimiento natural, materiales biológicos, fluidez no lineal.",
  21: "Proyecto que transmite confianza y protección, pensado para minimizar riesgos y brindar tranquilidad al usuario.",
  22: "Inspiración en la solidez geométrica del cubo: estructuras estables, diseño modular y ordenado.",
  23: "Idea que fluye en un solo sentido, clara, directa, sin distracciones, transmitiendo simplicidad.",
  24: "Proyecto que ofrece un valor extra, un detalle diferenciador que eleva la experiencia más allá de lo esperado.",
  25: "Inspiración en la economía de recursos, en simplificar, en hacer más con menos.",
  26: "Proyecto de gran escala, imponente, que busca impactar por su tamaño o alcance.",
  27: "Todo lo contrario: una idea compacta, minimalista y práctica, donde lo pequeño es lo valioso.",
  28: "Inspiración en el equilibrio de opuestos: dualidad, complementariedad, armonía entre contrastes.",
  29: "Proyecto que juega con la tensión, lo inesperado, lo asimétrico, rompiendo la perfección para generar interés.",
  30: "Inspiración en lo efímero, proyectos que brillan en un instante, dejando huella en la memoria aunque duren poco.",
  31: "Proyecto con fuerza y energía, pensado para transmitir impacto, intensidad y capacidad transformadora.",
  32: "Inspiración en la superposición: un diseño o idea que se construye por niveles, revelando más profundidad con cada exploración.",
  33: "Proyecto que mira hacia el cosmos: grandeza, exploración, tecnología avanzada e inspiración en lo infinito.",
  34: "Inspiración en el movimiento continuo y expansivo, una idea que nunca se cierra, siempre en evolución.",
  35: "Proyecto que evoca dulzura, cuidado y sensibilidad, con un toque humano y cálido.",
  36: "Inspiración en lo atractivo y seductor, un diseño que provoca deseo y genera fascinación.",
  37: "Proyecto sostenible, pensado para resistir el tiempo, con materiales o ideas que no se desgastan fácilmente.",
  38: "Inspiración en lo delicado y sutil, una idea que llama la atención por su vulnerabilidad y sensibilidad.",
  39: "Lo contrario: un proyecto que transmite fuerza, seguridad y capacidad de soportar condiciones extremas.",
  40: "Inspiración en la claridad, la iluminación como metáfora de conocimiento, guía o revelación creativa.",
  41: "Proyecto que atrae con una fuerza irresistible, envolvente y misteriosa, como si todo girara en torno a él.",
  42: "Inspiración en la atracción: una idea que conecta y acerca a las personas, productos o experiencias.",
  43: "Proyecto que transmite solidez, modernidad y tecnología, con acabados que evocan resistencia e innovación.",
  44: "Inspiración en la inteligencia y en las conexiones invisibles: proyectos que simulan procesos cognitivos o redes interactivas.",
  45: "Proyecto que se inspira en tejidos, texturas y flexibilidad, evocando lo táctil y lo cercano.",
  46: "Forma asociada a fluidez y almacenamiento, idea que aprovecha volúmenes simples y funcionales.",
  47: "Proyecto que capta completamente la atención del usuario o que integra elementos externos y los hace propios.",
  48: "Inspiración en camuflaje: un diseño que se integra al entorno hasta volverse casi invisible.",
  49: "Proyecto luminoso, optimista, enérgico, pensado para inspirar claridad y vitalidad.",
  50: "Inspiración en el misterio, la calma y la intimidad; un proyecto que invita a explorar lo oculto.",
  51: "Proyecto adaptable, que cambia de forma o función según las necesidades del usuario.",
  52: "Inspiración en lo firme e inmutable, un diseño que transmite estabilidad y disciplina.",
  53: "Proyecto que genera sentido de pertenencia limitada, algo único y reservado para pocos.",
  54: "Inspiración en el respeto por la naturaleza, proyectos sostenibles con bajo impacto ambiental.",
  55: "Idea que transmite dinamismo, rapidez y eficiencia, pensada para ahorrar tiempo o generar adrenalina.",
  56: "Proyecto que une personas, ideas o mundos, fomentando vínculos y comunicación.",
  57: "Inspiración en la resiliencia y la capacidad de estirarse sin romperse, proyectos adaptables y resistentes.",
  58: "Idea basada en la claridad, la honestidad y la confianza, donde nada se oculta.",
  59: "Proyecto ligero, que desafía la gravedad y da sensación de libertad y movimiento.",
  60: "Inspiración en lo oculto, alternativo o marginal; proyectos que nacen “debajo de la superficie” y sorprenden desde lo inesperado.",
  61: "Proyecto que atrae de forma natural, generando interés constante sin necesidad de imposición.",
  62: "Inspiración en lo impactante y enérgico, una idea que irrumpe con fuerza y genera sorpresa inmediata.",
  63: "Proyecto que reduce todo a lo esencial, transmitiendo elegancia y claridad a través de la simplicidad.",
  64: "Inspiración en los sentidos: proyectos que se disfrutan no solo visualmente, sino también a través del tacto, oído, gusto u olfato.",
  65: "Idea que cumple su función sin hacerse notar, sutil, discreta pero indispensable.",
  66: "Proyecto que conecta culturas y contextos, pensado para trascender fronteras y ser comprendido en cualquier parte del mundo.",
  67: "Inspiración en lo cercano, lo propio de una comunidad o territorio, con identidad única y arraigo cultural.",
  68: "Proyecto que invita a la participación activa, donde el usuario no solo observa sino que interviene y transforma.",
  69: "Idea en constante movimiento y cambio, que nunca permanece igual, siempre evolucionando.",
  70: "Inspiración en la quietud y la estabilidad; un proyecto sólido que transmite calma y permanencia.",
  71: "Proyecto que transmite facilidad, movilidad y frescura; algo que no pesa ni en lo físico ni en lo emocional.",
  72: "Inspiración en la solidez y la fuerza, un diseño que impacta por su robustez y presencia.",
  73: "Proyecto eficiente y funcional en poco espacio, donde cada elemento tiene un propósito.",
  74: "Idea que crece y se extiende, pensada para abarcar más terreno o más usuarios.",
  75: "Inspiración en el desorden creativo, proyectos que parecen incontrolables pero generan nuevas posibilidades.",
  76: "Proyecto estructurado y claro, con lógica visible que facilita su comprensión y uso.",
  77: "Idea que evoluciona constantemente, que se transforma y adapta a nuevas condiciones o públicos.",
  78: "Proyecto pensado para perdurar, sin fecha de caducidad, con vigencia más allá de las modas.",
  79: "Inspiración en lo pasajero y experimental, proyectos que viven en el aquí y ahora.",
  80: "Proyecto que atrapa la atención y genera fascinación, como un movimiento o patrón del que no puedes apartar la mirada.",
  81: "Proyecto que transmite luz, energía positiva y vitalidad, capaz de iluminar e inspirar a quienes lo experimentan.",
  82: "Inspiración en el misterio, lo profundo y lo enigmático; un proyecto que invita a descubrir lo oculto.",
  83: "Idea que genera vértigo y emoción, una experiencia intensa que transmite riesgo y adrenalina.",
  84: "Proyecto que simboliza crecimiento, superación y progreso, inspirando a alcanzar nuevas alturas.",

};

// --- FUNCIONES ---

function sacar(cantidad) {
  let cartas = [...baraja];
  let seleccion = [];

  for (let i = 0; i < cantidad; i++) {
    let indice = Math.floor(Math.random() * cartas.length);
    seleccion.push(cartas[indice]);
    cartas.splice(indice, 1);
  }

  document.getElementById("resultado").innerHTML =
    seleccion.map(src => `<img src="${src}" class="carta">`).join("");
}

function mostrarJuego() {
  mostrarPantalla("pantalla-juego");
}

function mostrarGlosario() {
  mostrarPantalla("pantalla-glosario");
}

function volverInicio() {
  mostrarPantalla("pantalla-inicio");
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("significado").innerHTML = "";
  document.getElementById("numeroCarta").value = "";
}

// Cambia entre pantallas
function mostrarPantalla(id) {
  document.querySelectorAll(".pantalla").forEach(sec => sec.classList.remove("activa"));
  document.getElementById(id).classList.add("activa");
}

// Buscar significado en el glosario
function buscarSignificado() {
  const numero = parseInt(document.getElementById("numeroCarta").value);
  const contenedor = document.getElementById("significado");

  if (isNaN(numero) || numero < 1 || numero > baraja.length) {
  contenedor.innerHTML = `<p>❌ Ingresa un número válido (1 - ${baraja.length}).</p>`;
  return;
  }

  const imagen = baraja[numero - 1]; // índice base 0
  const significado = glosario[numero] || "ℹ️ Significado pendiente de agregar.";

  contenedor.innerHTML = `
    <div class="glosario-card">
      <img src="${imagen}" class="carta">
      <p>${significado}</p>
    </div>
  `;
}
