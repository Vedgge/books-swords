const booksData = [
  {
    titulo: "Peter Camenzind",
    autor: "Herman Hesse",
    genero: "Novela",
    precio: 8900,
    texto:
      "Publicada en 1904, Peter Camenzind fue la primera novela de Hermann Hesse y conoció de inmediato un gran éxito. En ella encontramos ya en germen las principales señas de identidad del autor y de su obra posterior: el descontento o turbación interiores, el ansia de trascendencia y de plenitud",
    imagen: "/public/images/book-images/1.jpg",
    tags: ["tendencia"],
  },
  {
    titulo: "Rosshalde",
    autor: "Herman Hesse",
    genero: "Novela",
    precio: 9200,
    texto:
      "Johann Veraguth, un pintor de renombre mundial cuyas fama y fortuna parecían destinadas a procurarle una vida idílica en Rosshalde, su magnífica y misteriosa residencia. Sin embargo, deberá luchar denodadamente para no quedar atrapado en las tribulaciones de su vida doméstica",
    imagen: "/public/images/book-images/2.jpg",
    tags: ["tendencia"],
  },
  {
    titulo: "Siddhartha",
    autor: "Herman Hesse",
    genero: "Novela",
    precio: 10500,
    texto:
      "Siddhartha es una novela alegórica de Hermann Hesse, premio Nobel 1946, que, publicada en 1922, relata la vida del joven Siddhartha, un hombre para quien el camino de la verdad pasa por la renuncia y la comprensión de la unidad que subyace en todo lo existente y que, finalmente, se convertirá en Buda.",
    imagen: "/public/images/book-images/3.jpg",
    tags: ["tendencia"],
  },
  {
    titulo: "El lobo estepario",
    autor: "Herman Hesse",
    genero: "Novela",
    precio: 15000,
    texto:
      "El lobo estepario es una de las lectura más impactantes y que más suelen recordar quienes la emprenden. Por un lado, la historia que narra es un alucinante viaje a los temores, angustias y miedos a los que se ve abocado el hombre contemporáneo. Pero por otro, la pericia narrativa de Hesse llega en esta novela a su punto culminante",
    imagen: "/public/images/book-images/4.jpg",
    tags: ["tendencia", "top100"],
  },
  {
    titulo: "El juego de abalorios",
    autor: "Herman Hesse",
    genero: "Novela",
    precio: 25000,
    texto:
      "El juego de los abalorios es una novela escrita por Herman Hesse en 1943, tres años antes de recibir el Premio Nobel de Literatura, escrita a modo de crónica de un narrador anónimo de la mítica Castalia, hacia el año 2400. Gira en torno al extraño juego del que toma título, abarcador de todos los contenidos y valores de la cultura.",
    imagen: "/public/images/book-images/5.jpg",
    tags: ["tendencia", "top100"],
  },
  {
    titulo: "Adiós a las armas",
    autor: "Ernest Hemingway",
    genero: "Novela",
    precio: 17000,
    texto:
      "Fredrerick Henry es voluntario en el ejército italiano durante la guerra que llenó Europa de trincheras entre 1914 y 1918. Está encargado de conducir una ambulancia cuando se enamora de la enfermera inglesa Catherine Barkley, encaminándose a un trágico destino..",
    imagen: "/public/images/book-images/6.jpg",
    tags: ["tendencia"],
  },
  {
    titulo: "Por quién doblan las campanas",
    autor: "Ernest Hemingway",
    genero: "Novela",
    precio: 25600,
    texto:
      "En los tupidos bosques de pinos de una región montañosa española un grupo de milicianos se dispone a volar un puente esencial para la ofensiva republicana. La acción cortará las comunicaciones por carretera y evitará el contraataque de los sublevados",
    imagen: "/public/images/book-images/7.jpg",
    tags: ["tendencia"],
  },
  {
    titulo: "Fiesta",
    autor: "Ernest Hemingway",
    genero: "Novela",
    precio: 16000,
    texto:
      "Escrita en 1926, Fiesta está considerada la primera obra de importancia de Hemingway. En ella describe la historia de una serie de personajes pertenecientes a la llamada «generación perdida» del período de entreguerras, de viaje por Francia y España.",
    imagen: "/public/images/book-images/8.jpg",
    tags: ["tendencia", "top100"],
  },
  {
    titulo: "El viejo y el mar",
    autor: "Ernest Hemingway",
    genero: "Novela",
    precio: 8000,
    texto:
      "El viejo y el mar (The Old Man and the Sea) es una novela escrita por Ernest Hemingway en 1951 en Cuba y publicada en 1952. Fue su último trabajo de ficción importante publicado en vida y posiblemente su obra más famosa.",
    imagen: "/public/images/book-images/9.jpg",
    tags: ["tendencia", "top100"],
  },
  {
    titulo: "Los tres mosqueteros",
    autor: "Alexandre Dumas",
    genero: "Novela",
    precio: 28000,
    texto:
      "La acción se sitúa durante el reinado de Luis XIII, en Francia. D’Artagnan es un joven de 18 años, hijo de un noble gascón, antiguo mosquetero, de escasos recursos económicos. Se dirige a París con una carta de su padre para el señor de Treville, jefe de los Mosqueteros del Rey.",
    imagen: "/public/images/book-images/10.jpg",
    tags: ["tendencia"],
  },
  {
    titulo: "El conde de Montecristo",
    autor: "Alexandre Dumas",
    genero: "Novela",
    precio: 25000,
    texto:
      "El conde de Montecristo (Le comte de Montecristo) es una novela de aventuras clásica de Alexandre Dumas (padre) y Auguste Maquet. Éste último no figuró en los títulos de la obra ya que Alexandre Dumas pagó una elevada suma de dinero para que así fuera. ",
    imagen: "/public/images/book-images/11.jpg",
    tags: ["tendencia", "top100"],
  },
  {
    titulo: "Guerra y paz",
    autor: "Lev Nikoláievich Tolstói",
    genero: "Novela Historica",
    precio: 35000,
    texto:
      "Mientras la aristocracia de Moscú y San Petersburgo mantiene una vida opulenta, pero ajena a todo aquello que acontece fuera de su reducido ámbito, las tropas napoléonicas, que con su triunfo en Austerlitz dominan Europa, se disponen a conquistar Rusia. Guerra y paz es un clásico de la literatura universal.",
    imagen: "/public/images/book-images/12.jpg",
    tags: ["tendencia"],
  },
  {
    titulo: "Anna Karénina",
    autor: "Lev Nikoláievich Tolstói",
    genero: "Novela",
    precio: 27000,
    texto:
      "La sola mención del nombre de Anna Karénina sugiere inmediatamente dos grandes temas de la novela decimonónica: pasión y adulterio. Pero, si bien es cierto que la novela, como decía Nabokov, «es una de las más grandes historias de amor de la literatura universal»",
    imagen: "/public/images/book-images/13.jpg",
    tags: ["tendencia"],
  },
  {
    titulo: "Los pilares de la Tierra",
    autor: "Ken Follett",
    genero: "Novela Historica",
    precio: 26500,
    texto:
      "Hace treinta años, Ken Follett publicó en español su novela más popular, Los pilares de la Tierra, que ha vendido más de veintisiete millones de ejemplares en todo el mundo. Ahora, por primera vez en una edición ilustrada, el gran maestro de la narrativa de acción y suspense nos transporta de nuevo a la Edad Media",
    imagen: "/public/images/book-images/14.jpg",
    tags: ["tendencia", "top100"],
  },
  {
    titulo: "Un mundo sin fin",
    autor: "Ken Follett",
    genero: "Novela Historica",
    precio: 24500,
    texto:
      "Dieciséis años después de la publicación de Los pilares de la Tierra, Ken Follet vuelve al fascinante mundo de Kingsbridge para presentar a sus lectores una magnífica saga épica marcada por el amor, la guerra y la peste en Un mundo sin fin.",
    imagen: "/public/images/book-images/15.jpg",
    tags: ["tendencia", "top100"],
  },
  {
    titulo: "El invierno del mundo",
    autor: "Ken Follett",
    genero: "Novela Historica",
    precio: 25900,
    texto:
      "En el año 1933, Berlín es un foco de agitación política y social. Lady Maud, ahora la esposa de Walter von Ulrich y madre de dos hijos, publica en una revista semanal artículos que ridiculizan al Partido Nazi, mientras que Walter manifiesta su oposición en el Parlamento.",
    imagen: "/public/images/book-images/17.jpg",
    tags: ["tendencia"],
  },
  {
    titulo: "Roma soy yo",
    autor: "Santiago Posteguillo",
    genero: "Novela Historica",
    precio: 24700,
    texto:
      "Roma, año 77 a.C. El cruel senador Dolabela va a ser juzgado por corrupción, pero ha contratado a los mejores abogados, ha comprado al jurado y, además, es conocido por usar la violencia contra todos los que se enfrentan a él. Nadie se atreve a ser el fiscal",
    imagen: "/public/images/book-images/18.jpg",
    tags: ["tendencia"],
  },
  {
    titulo: "La traición de Roma",
    autor: "Santiago Posteguillo",
    genero: "Novela Historica",
    precio: 25700,
    texto:
      "He sido el hombre más poderoso del mundo, pero también el más traicionado». Así comienza Publio Cornelio Escipión sus memorias en La traición de Roma, donde Santiago Posteguillo nos narra el épico final de la vida de dos de los personajes más legendarios de la historia, Escipión y Aníbal",
    imagen: "/public/images/book-images/19.jpg",
    tags: ["tendencia"],
  },
  {
    titulo: "El péndulo de Foucault",
    autor: "Umberto Eco",
    genero: "Novela Historica",
    precio: 29500,
    texto:
      "El resultado es una ilusión impregnada de realidad acerca de un misterioso Plan, consistente en la estrategia para una venganza histórica y una fuente de futuro poder de una secta mítica: los Templarios. Este plan representa la ambición suprema perseguida por los genios paranoicos de todos los tiempos: el dominio del mundo",
    imagen: "/public/images/book-images/20.jpg",
    tags: ["tendencia"],
  },
  {
    titulo: "El nombre de la rosa",
    autor: "Umberto Eco",
    genero: "Novela Historica",
    precio: 29500,
    texto:
      "El nombre de la rosa ofrece distintos puntos de interés: primero una trama apasionante y constelada de golpes de efecto, que narra las actividades detectivescas de Guillermo de Baskerville para esclarecer los crímenes de una abadía benedictina; segundo, la reconstrucción portentosa de una época especialmente conflictiva",
    imagen: "/public/images/book-images/21.jpg",
    tags: ["tendencia"],
  },
  {
    titulo: "La gesta del marrano",
    autor: "Marcos Aguinis",
    genero: "Novela Historica",
    precio: 23000,
    texto:
      "Francisco Maldonado da Silva, cuya heroica aventura existencial novelan estas páginas, nace en Tucumán en 1592, estudia en Córdoba, se gradúa en Lima y es el primer médico diplomado de Chile.",
    imagen: "/public/images/book-images/22.jpg",
    tags: ["tendencia"],
  },
  {
    titulo: "La verdad de Agamenón",
    autor: "Javier Cercas",
    genero: "Novela Historica",
    precio: 23000,
    texto:
      "Un libro híbrido de relatos, pasiones y recuerdos autobiográficos A la escritura de Javier Cercas se la reconoce por un estilo y una voz inconfundibles, pero también por la mezcla inextricable de géneros que conviven en ella y por la naturalidad con que transita de la ficción a la no ficción.",
    imagen: "/public/images/book-images/23.jpg",
    tags: ["tendencia"],
  },
  {
    titulo: "No callar",
    autor: "Javier Cercas",
    genero: "Novela Historica",
    precio: 23000,
    texto:
      "No callar» aborda desde los asuntos candentes y definitorios del momento histórico en que nos encontramos (populismos, posverdad y falsas noticias, construcción del relato, capitalismo de la vigilancia, amenazas a la democracia, nuevos autoritarismos…) hasta su repercusión en el ámbito español (relectura de la Transición y la Guerra Civil).",
    imagen: "/public/images/book-images/24.jpg",
    tags: ["tendencia"],
  },
  {
    titulo: "Cuentos de amor de locura y de muerte",
    autor: "Horacio Quiroga",
    genero: "Cuento",
    precio: 12000,
    texto:
      "Aunque dandi y modernista en su juventud —su primer libro, Los arrecifes de coral (1901), es muestra de ello—, poco a poco, y gracias a su contacto con la selva del noreste argentino, su obra se fue alejando del ornato vacío para ganar en expresividad.",
    imagen: "/public/images/book-images/25.jpg",
    tags: ["tendencia", "jovenes"],
  },
  {
    titulo: "Cuentos de la selva",
    autor: "Horacio Quiroga",
    genero: "Cuento",
    precio: 9000,
    texto:
      "La selva es el escenario y personaje omnipresente de estos cuentos. La selva tropical, con su violencia natural incontenible, frente al hombre, aliado a veces, destructor las más, de esa naturaleza salvaje. Y en medio, la fauna: desde la gigantesca serpiente que declara la guerra al hombre.",
    imagen: "/public/images/book-images/26.jpg",
    tags: ["tendencia", "jovenes"],
  },
  {
    titulo: "Evaristo Carriego",
    autor: "Jorge Luis Borges",
    genero: "Cuento",
    precio: 7400,
    texto:
      "El estudio de Borges sobre Evaristo Carriego no es un simple ejercicio crítico-biográfico ni un conjunto de estampas costumbristas, sino que late en él el propósito de recrear el desconocido medio que rodeó la niñez aislada y protegida de su autor. Obra «menos documental que imaginativa», en ella Borges —criado «en un jardín, detrás de una verja con lanzas, y en una biblioteca de ilimitados libros ingleses»",
    imagen: "/public/images/book-images/27.jpg",
    tags: ["tendencia", "top100", "jovenes"],
  },
  {
    titulo: "Crónicas de Bustos Domecq",
    autor: "Jorge Luis Borges",
    genero: "Cuento",
    precio: 10500,
    texto:
      "Jorge Luis Borges procedía de una familia de próceres que contribuyeron a la independencia del país. Su antepasado, el coronel Isidro Suárez, había guiado a sus tropas a la victoria en la mítica batalla de Junín; su abuelo Francisco Borges también había alcanzado el rango de coronel. Pero fue su padre, Jorge Guillermo Borges Haslam, quien rompiendo con la tradición familiar se empleó como profesor de psicología e inglés.",
    imagen: "/public/images/book-images/28.jpg",
    tags: ["tendencia"],
  },
  {
    titulo: "Pulgarcita",
    autor: "Hans Christian Andersen",
    genero: "Cuento",
    precio: 6000,
    texto:
      "El más célebre de los escritores románticos daneses fue hombre de origen humilde y formación esencialmente autodidacta, en quien influyeron poderosamente las lecturas de Goethe, Schiller y E.T.A. Hoffmann. Hijo de un zapatero de Odense, su padre murió cuando él contaba sólo once años, por lo que no pudo completar sus estudios.",
    imagen: "/public/images/book-images/29.jpg",
    tags: ["tendencia"],
  },
  {
    titulo: "El patito feo",
    autor: "Hans Christian Andersen",
    genero: "Cuento",
    precio: 7600,
    texto:
      "Con su aspecto desvalido y enfrentado a repetidas penalidades, el patito feo es ejemplo de valor y dignidad, y busca su lugar en el mundo sin llegar a comprender del todo qué es lo que le pasa. Sólo después del duro invierno y con la llegada de la primavera se produce el cambio, y el escuálido patito se transforma en un cisne joven y hermoso",
    imagen: "/public/images/book-images/30.jpg",
    tags: ["tendencia", "jovenes"],
  },
  {
    titulo: "El soldadito de plomo",
    autor: "Hans Christian Andersen",
    genero: "Cuento",
    precio: 7600,
    texto:
      "Maravillosa historia en la que se enfrentan el poder, la inocencia y el amor. Utilizando simbolismos deliciosamente originales, Hans Christian Andersen logra exponer en su relato la verdadera naturaleza del mal. Y es el amor, un amor firme y constante quien, en el desarrollo del relato, de una forma enternecedora y no exenta de humor, sale vencedor en un hermoso final.",
    imagen: "/public/images/book-images/31.jpg",
    tags: ["tendencia", "top100"],
  },
  {
    titulo: "El gato Negro",
    autor: "Edgar Allan Poe",
    genero: "Cuento",
    precio: 7600,
    texto:
      "Uno de los rasgos característicos de Edgar Allan Poe en su tratamiento del terror consiste en la mezcla de elementos terroríficos en sí mismos con otros que producen el mismo efecto por vía indirecta. En los once relatos que componen este volumen —entre los que se encuentran algunos de sus cuentos más memorables—",
    imagen: "/public/images/book-images/32.jpg",
    tags: ["tendencia"],
  },
  {
    titulo: "El cuervo",
    autor: "Edgar Allan Poe",
    genero: "Cuento",
    precio: 8400,
    texto:
      "En una fría noche de invierno, solo en su casa, un hombre sufre el dolor inmenso de la pérdida de su amada. A punto de dormirse, le parece oír a alguien golpear a la puerta y descubre que se trata de un cuervo. Tras invadirle la casa, el ave acaba llevándolo a la desesperación debido a su insistente repetición de una palabra que le hace comprender que nada le devolverá a Leonora…",
    imagen: "/public/images/book-images/33.jpg",
    tags: ["tendencia", "top100"],
  },
  {
    titulo: "Cuentos de imaginación y misterio",
    autor: "Edgar Allan Poe",
    genero: "Cuento",
    precio: 10600,
    texto:
      "Hacia 1917, el eximio artista irlandés Harry Clarke emprendió uno de los trabajos que determinaría su fama: la ilustración de Tales of mistery and imagination, una antología de los más altos relatos de Poe preparada por la editorial Harrap. La edición, publicada en Londres en 1919, fue reconocida inmediatamente como una de las joyas bibliográficas de la época. ",
    imagen: "/public/images/book-images/34.jpg",
    tags: ["tendencia"],
  },
  {
    titulo: "Crónicas marcianas",
    autor: "Ray Bradbury",
    genero: "Ciencia Ficcion",
    precio: 10900,
    texto:
      "Esta colección de relatos recoge la crónica de la colonización de Marte por parte de una humanidad que huye de un mundo al borde de la destrucción. Los colonos llevan consigo sus deseos más íntimos y el sueño de reproducir en el Planeta Rojo una civilización de perritos calientes, cómodos sofás y limonada en el porche al atardecer.",
    imagen: "/public/images/book-images/35.jpg",
    tags: ["tendencia", "top100"],
  },
  {
    titulo: "El hombre ilustrado",
    autor: "Ray Bradbury",
    genero: "Ciencia Ficcion",
    precio: 12300,
    texto:
      "En esta colección de historias entrelazadas, el narrador anónimo conoce a El Hombre Ilustrado, un curioso personaje con el cuerpo completamente cubierto de tatuajes. Sin embargo, lo más remarcable e inquietante es que las ilustraciones están mágicamente vivas y cada una de ellas empieza a desarrollar su propia historia.",
    imagen: "/public/images/book-images/36.jpg",
    tags: ["tendencia"],
  },
  {
    titulo: "Fahrenheit 451",
    autor: "Ray Bradbury",
    genero: "Ciencia Ficcion",
    precio: 15100,
    texto:
      "Guy Montag es un bombero y el trabajo de un bombero es quemar libros, que están prohibidos porque son causa de discordia y sufrimiento. El Sabueso Mecánico del Departamento de Incendios, armado con una letal inyección hipodérmica, escoltado por helicópteros, está preparado para rastrear a los disidentes que aún conservan y leen libros.",
    imagen: "/public/images/book-images/37.jpg",
    tags: ["tendencia", "top100"],
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    genero: "Ciencia Ficcion",
    precio: 18300,
    texto:
      "En el año 1984 Londres es una ciudad lúgubre en la que la Policía del Pensamiento controla de forma asfixiante la vida de los ciudadanos. Winston Smith es un peón de este engranaje perverso y su cometido es reescribir la historia para adaptarla a lo que el Partido considera la versión oficial de los hechos. Hasta que decide replantearse la verdad del sistema que los gobierna y somete.",
    imagen: "/public/images/book-images/38.jpg",
    tags: ["tendencia"],
  },
  {
    titulo: "Yo, robot",
    autor: "Isaac Asimov",
    genero: "Ciencia Ficcion",
    precio: 14500,
    texto:
      "Una investigación llevada a cabo por un periodista acerca de la trayectoria de la robopsicóloga Susan Calvin da pie a los nueve relatos que componen esta novela.       Las tres leyes de la robótica, a las que en obras posteriores Asimov añadiría alguna más, constituyen las normas que rigen el comportamiento en los diferentes conflictos que se presentan entre humanos y robots.",
    imagen: "/public/images/book-images/39.jpg",
    tags: ["tendencia", "top100"],
  },
  {
    titulo: "Bóvedas de acero",
    autor: "Isaac Asimov",
    genero: "Ciencia Ficcion",
    precio: 12500,
    texto:
      "En el Enclave Espacial, a las afueras de la Ciudad de Nueva York, un científico de los Mundos Exteriores ha aparecido asesinado. El detective Elijah Baley tiene que ocuparse de este caso en la para él inquietante y odiosa compañía de un robot humanoide: R. Daneel Olivaw.",
    imagen: "/public/images/book-images/40.jpg",
    tags: ["tendencia", "top100"],
  },
  {
    titulo: "Fundación",
    autor: "Isaac Asimov",
    genero: "Ciencia Ficcion",
    precio: 17400,
    texto:
      "Desde hace doce mil años el hombre se ha dispersado por los planetas de la galaxia, unificada alrededor de un Imperio pacífico cuya capital es la majestuosa ciudad de Trántor. El sistema funcionó y prosperó durante incontables generaciones, pero ahora se ha convertido en el centro de todas las intrigas y en símbolo de la corrupción imperial.",
    imagen: "/public/images/book-images/41.jpg",
    tags: ["tendencia", "top100"],
  },
  {
    titulo: "Cita con Rama",
    autor: "Arthur C. Clarke",
    genero: "Ciencia Ficcion",
    precio: 15300,
    texto:
      "Cita con Rama es una de las obras de ciencia ficción más galardonadas de todos los tiempos y sin duda una de las mejores novelas escritas por Clarke. El punto de partida de esta espléndida novela resulta ya inquietante: Después del impacto de un enorme asteroide que destruye completamente Padua y Verona, se crea en la Tierra un sofisticado sistema para detectar la trayectoria de cualquier objeto que aparezca cerca de nuestro planeta, y gracias a esta previsión se descubre un extraño asteroide que gira a una increíble velocidad.",
    imagen: "/public/images/book-images/42.jpg",
    tags: ["tendencia"],
  },
  {
    titulo: "2001: Una odisea espacial",
    autor: "Arthur C. Clarke",
    genero: "Ciencia Ficcion",
    precio: 13500,
    texto:
      "Un sobrecogedor viaje interestelar en busca de la evidencia de que el ser humano no está solo en el cosmos. Una expedición a los confines del universo y a los del alma, en la que pasado, presente y futuro se amalgaman en un continuo enigmático. ¿Qué esencia última nos rige? ¿Qué lugar ocupa el hombre en el complejo entramado del infinito? ¿Qué es el tiempo, la vida, la muerte…?",
    imagen: "/public/images/book-images/43.jpg",
    tags: ["tendencia", "top100"],
  },
  {
    titulo: "El martillo de Dios",
    autor: "Arthur C. Clarke",
    genero: "Ciencia Ficcion",
    precio: 15500,
    texto:
      "En el siglo XXII, los humanos habitan la Luna y Marte; una veterana de guerra ha fundado Crislam, doctrina religiosa impartida a través de módulos de realidad virtual; no queda comida natural, pero reciclando desechos se consigue cualquier plato; los pisos son pequeños, pero es fácil reconvertir su espacio y reunir a los seres queridos gracias a los hologramas. La ingeniería genética es capaz de todo, pero el Papa se opone a cada nuevo avance…",
    imagen: "/public/images/book-images/44.jpg",
    tags: ["tendencia", "top100"],
  },
  {
    titulo: "El sueño eterno",
    autor: "Raymond Chandler",
    genero: "Policial",
    precio: 15500,
    texto:
      "Un chantaje a una mujer por deudas de juego, el marido de la hermana de esa mujer que se fuga con la esposa de un gánster, un asesinato en el que todo parece estar claro pero, en realidad nada lo está… Chandler en estado puro en la novela en la que presentó a su personaje emblemático: El detective Philip Marlowe.",
    imagen: "/public/images/book-images/45.jpg",
    tags: ["tendencia"],
  },
  {
    titulo: "El largo adiós",
    autor: "Raymond Chandler",
    genero: "Policial",
    precio: 14500,
    texto:
      "Philip Marlowe establece amistad con un peculiar personaje, Terry Lennox, al que una madrugada ayuda a salir del país hacia México para descubrir a la mañana siguiente que es sospechoso de asesinar a su esposa y que el propio Marlowe puede ser acusado de complicidad.",
    imagen: "/public/images/book-images/46.jpg",
    tags: ["tendencia"],
  },
  {
    titulo: "El psicoanalista",
    autor: "John Katzenbach",
    genero: "Policial",
    precio: 24600,
    texto:
      "Feliz aniversario, doctor. Bienvenido al primer día de su muerte». Así comienza el anónimo que recibe el psicoanalista Frederick Starks, y que le obliga a emplear toda su astucia y rapidez para, en quince días, averiguar quién es el autor de esa amenazadora misiva que promete hacerle la vida imposible. De no conseguir su objetivo, deberá elegir entre suicidarse o ser testigo de cómo, uno tras otro, sus familiares y conocidos mueren por obra de un psicópata decidido a llevar hasta el final su sed de venganza.",
    imagen: "/public/images/book-images/48.jpg",
    tags: ["tendencia"],
  },
  {
    titulo: "Un final perfecto",
    autor: "John Katzenbach",
    genero: "Policial",
    precio: 24600,
    texto:
      "Apenas unos kilómetros de distancia separan a tres mujeres que no se conocen entre sí. La Pelirroja Uno es una doctora soltera de cerca de cincuenta años; la Pelirroja Dos una profesora de escuela en la treintena y la Pelirroja Tres una estudiante de diecisiete años. Las tres son vulnerables. Las tres son el objetivo de un psicópata obsesionado por demostrar al mundo quién es él en realidad",
    imagen: "/public/images/book-images/49.jpg",
    tags: ["tendencia"],
  },
  {
    titulo: "Confianza ciega",
    autor: "John Katzenbach",
    genero: "Policial",
    precio: 23700,
    texto:
      "Maeve, la madre de Sloane, ha desaparecido. No es una novedad. Sin embargo, esta vez es distinta: al cabo de unos días, Sloane recibe un paquete que su madre le ha enviado, con varios miles de dólares, la escritura de su casa y un arma. También hay una nota con las siguientes palabras: Véndelo todo. Quédate la pistola. Practica. Huye. Ahora.",
    imagen: "/public/images/book-images/50.jpg",
    tags: ["tendencia", "jovenes"],
  },
  {
    titulo: "El signo de los cuatro",
    autor: "Arthur Conan Doyle",
    genero: "Policial",
    precio: 15700,
    texto:
      "El 30 de agosto de 1889 el editor de la revista estadounidense Lippincott’s Magazine, Joseph Marshall Stoddart, invitó a cenar a Conan Doyle en el lujoso hotel londinense Langham en compañía de Oscar Wilde. Durante la velada, Stoddart propuso a Doyle escribir un relato para su revista que no excediera las cuarenta mil palabras y por el que le pagarían cien libras. Ambos autores se comprometieron a escribir sendas novelas para la revista americana.",
    imagen: "/public/images/book-images/51.jpg",
    tags: ["tendencia"],
  },
  {
    titulo: "Todo Sherlock Holmes",
    autor: "Arthur Conan Doyle",
    genero: "Policial",
    precio: 85000,
    texto:
      "No salió de una madre ni supo de mayores. Idéntico es el caso de Adán y de Quijano. Está hecho de azar. Inmediato o cercano lo rigen los vaivenes de variables lectores.Pensar de tarde en tarde en Sherlock Holmes es una de las buenas costumbres que nos quedan. La muerte y la siesta son otras. También es nuestra suerte convalecer en un jardín o mirar la luna",
    imagen: "/public/images/book-images/53.jpg",
    tags: ["tendencia"],
  },
  {
    titulo: "Asesinos sin rostro",
    autor: "Henning Mankell",
    genero: "Policial",
    precio: 18000,
    texto:
      "En este histórico primer encuentro con sus lectores, el inspector Wallander debe resolver un caso casi tan complicado como su vida personal. Mientras procura desenmascarar a los despiadados asesinos de una anciana que ha muerto con la palabra «extranjero» en la boca antes de que los prejuicios raciales latentes en la comunidad desaten una ola de violencia vengadora",
    imagen: "/public/images/book-images/54.jpg",
    tags: ["tendencia"],
  },
  {
    titulo: "Las sombras crecen al atardecer",
    autor: "Henning Mankell",
    genero: "Policial",
    precio: 15900,
    texto:
      "Esta vez Joel, que también fue protagonista de El perro que corría hacia una estrella, es atropellado. Como sale ileso, considera que ha sucedido un «milagro» y que debe realizar una buena acción. Pero ¿qué hacer y cómo llevarla a la práctica?  muchos serán los divertidos y curiosos personajes que se vean involucrados en esta nueva aventura",
    imagen: "/public/images/book-images/55.jpg",
    tags: ["tendencia"],
  },
  {
    titulo: "Los perros de Riga",
    autor: "Henning Mankell",
    genero: "Policial",
    precio: 15500,
    texto:
      "Una fría mañana de febrero, un bote salvavidas queda varado frente a la costa sueca. Dentro y yacen los cadáveres de dos hombres que, como confirma el inspector Kurt Wallander, han sido asesinados días atrás. Aquejado de estrés, con problemas de salud, lleno de remordimientos por desatender a su anciano padre y sin haber encajado bien la separación de su mujer, Wallander, una vez abierta la investigación, debe hacer de tripas corazón y posponer sus buenos propósitos de cuidarse más",
    imagen: "/public/images/book-images/56.jpg",
    tags: ["tendencia"],
  },
  {
    titulo: "Los hombres que no amaban a las mujeres",
    autor: "Stieg Larsson",
    genero: "Policial",
    precio: 23500,
    texto:
      "Harriet Vanger desapareció hace treinta y seis años en una isla sueca propiedad de su poderosa familia. A pesar del despliegue policial, no se encontró ni rastro de la muchacha. ¿Se escapó? ¿Fue secuestrada? ¿Asesinada? El caso está cerrado y los detalles olvidados. Pero su tío Henrik Vanger, un empresario retirado, vive obsesionado con resolver el misterio antes de morir. En las paredes de su estudio cuelgan cuarenta y tres flores secas y enmarcadas",
    imagen: "/public/images/book-images/57.jpg",
    tags: ["tendencia"],
  },
  {
    titulo: "La chica que soñaba con una cerilla y un bidón de gasolina",
    autor: "Stieg Larsson",
    genero: "Policial",
    precio: 28500,
    texto:
      "Lisbeth Salander se ha tomado un tiempo: necesita apartarse del foco de atención y salir de Estocolmo. Trata de seguir una férrea disciplina y no contestar a las llamadas ni a los mensajes de Mikael, que no entiende por qué ha desaparecido de su vida sin dar ningún tipo de explicación. Lisbeth se cura las heridas de amor en soledad, aunque intente distraer el desencanto mediante el estudio de las matemáticas y con ciertos placeres en una playa del Caribe",
    imagen: "/public/images/book-images/58.jpg",
    tags: ["tendencia"],
  },
];
