"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");
const Database = use("Database");

Route.get("/", async () => {
  return [
    {
      "id": "varzea-da-palma",
      "cityName": "Várzea da Palma"
    },
    {
      "id": "tres-pontas",
      "cityName": "Três Pontas"
    },
    {
      "id": "pirapora",
      "cityName": "Pirapora"
    },
    {
      "id": "eloi-mendes",
      "cityName": "Elói Mendes"
    },
    {
      "id": "manga",
      "cityName": "Manga"
    },
    {
      "id": "espinosa",
      "cityName": "Espinosa"
    },
    {
      "id": "jaiba",
      "cityName": "Jaíba"
    },
    {
      "id": "januaria",
      "cityName": "Januária"
    },
    {
      "id": "araguari",
      "cityName": "Araguari"
    },
    {
      "id": "reduto",
      "cityName": "Reduto"
    },
    {
      "id": "buritis",
      "cityName": "Buritis"
    },
    {
      "id": "monte-azul",
      "cityName": "Monte Azul"
    },
    {
      "id": "sao-joao-do-paraido",
      "cityName": "São João do Paraído"
    },
    {
      "id": "janauba",
      "cityName": "Janaúba"
    },
    {
      "id": "arinos",
      "cityName": "Aranãs"
    },
    {
      "id": "rio-pardo-de-minas",
      "cityName": "Rio Pardo de Minas"
    },
    {
      "id": "porteirinha",
      "cityName": "Porteirinha"
    },
    {
      "id": "sao-francisco",
      "cityName": "São Francisco"
    },
    {
      "id": "taiobeiras",
      "cityName": "Taiobeiras"
    },
    {
      "id": "sao-joao-da-ponte",
      "cityName": "São João da Ponte"
    },
    {
      "id": "pedra-azul",
      "cityName": "Pedra Azul"
    },
    {
      "id": "almenara",
      "cityName": "Almenara"
    },
    {
      "id": "unai",
      "cityName": "Unaí"
    },
    {
      "id": "salinas",
      "cityName": "Salinas"
    },
    {
      "id": "jacinto",
      "cityName": "Jacinto"
    },
    {
      "id": "brasilia-de-minas",
      "cityName": "Brasília de Minas"
    },
    {
      "id": "jequitinhonha",
      "cityName": "Jequitinhonha"
    },
    {
      "id": "medina",
      "cityName": "Medina"
    },
    {
      "id": "francisco-sa",
      "cityName": "Francisco Sá"
    },
    {
      "id": "montes-claros",
      "cityName": "Montes Claros"
    },
    {
      "id": "grao-mogol",
      "cityName": "Grão Mogol"
    },
    {
      "id": "bonfinopolis-de-minas",
      "cityName": "Bonfinópolis de Minas"
    },
    {
      "id": "coracao-de-jesus",
      "cityName": "Coração de Jesus"
    },
    {
      "id": "aracuai",
      "cityName": "Araçuaí"
    },
    {
      "id": "paracatu",
      "cityName": "Paracatu"
    },
    {
      "id": "bocaiuva",
      "cityName": "Bocaiúva"
    },
    {
      "id": "aguas-formosas",
      "cityName": "Águas Formosas"
    },
    {
      "id": "joao-pinheiro",
      "cityName": "João Pinheiro"
    },
    {
      "id": "turmalina",
      "cityName": "Turmalina"
    },
    {
      "id": "novo-cruzeiro",
      "cityName": "Novo Cruzeiro"
    },
    {
      "id": "minas-novas",
      "cityName": "Minas Novas"
    },
    {
      "id": "carlos-chagas",
      "cityName": "Carlos Chagas"
    },
    {
      "id": "teofilo-otoni",
      "cityName": "Teófilo Otoni"
    },
    {
      "id": "diamantina",
      "cityName": "Diamantina"
    },
    {
      "id": "nanuque",
      "cityName": "Nanuque"
    },
    {
      "id": "capelinha",
      "cityName": "Capelinha"
    },
    {
      "id": "vazante",
      "cityName": "Vazante"
    },
    {
      "id": "itamarandiba",
      "cityName": "Itamarandiba"
    },
    {
      "id": "buenopolis",
      "cityName": "Buenópolis"
    },
    {
      "id": "presidente-olegario",
      "cityName": "Presidente Olegário"
    },
    {
      "id": "itambacuri",
      "cityName": "Itambacuri"
    },
    {
      "id": "tres-marias",
      "cityName": "Três Marias"
    },
    {
      "id": "corinto",
      "cityName": "Corinto"
    },
    {
      "id": "coromandel",
      "cityName": "Coromandel"
    },
    {
      "id": "santa-maria-do-suacui",
      "cityName": "Santa Maria do Suaçuí"
    },
    {
      "id": "patos-de-minas",
      "cityName": "Patos de Minas"
    },
    {
      "id": "serro",
      "cityName": "Serro"
    },
    {
      "id": "tapaciguara",
      "cityName": "Tapaciguara"
    },
    {
      "id": "pecanha",
      "cityName": "Peçanha"
    },
    {
      "id": "sabinopolis",
      "cityName": "Sabinópolis"
    },
    {
      "id": "monte-carmelo",
      "cityName": "Monte Carmelo"
    },
    {
      "id": "mantena",
      "cityName": "Mantena"
    },
    {
      "id": "monte-alegre-de-minas",
      "cityName": "Monte Alegre de Minas"
    },
    {
      "id": "governador-valadares",
      "cityName": "Governador Valadares"
    },
    {
      "id": "campinopolis",
      "cityName": "Campinápolis"
    },
    {
      "id": "canapolis",
      "cityName": "Canápolis"
    },
    {
      "id": "uberlandia",
      "cityName": "Uberlândia"
    },
    {
      "id": "conceicao-do-mato-dentro",
      "cityName": "Conceição do Mato Dentro"
    },
    {
      "id": "guanhaes",
      "cityName": "Guanhães"
    },
    {
      "id": "ituiutaba",
      "cityName": "Ituiutaba"
    },
    {
      "id": "virginopolis",
      "cityName": "Virginópolis"
    },
    {
      "id": "carmo-do-paranaiba",
      "cityName": "Carmo do Paranaíba"
    },
    {
      "id": "santa-vitoria",
      "cityName": "Santa Vitória"
    },
    {
      "id": "patrocinio",
      "cityName": "Patrocínio"
    },
    {
      "id": "pompeu",
      "cityName": "Pompéu"
    },
    {
      "id": "conselheiro-pena",
      "cityName": "Conselheiro Pena"
    },
    {
      "id": "abaete",
      "cityName": "Abaeté"
    },
    {
      "id": "acucena",
      "cityName": "Açuçena"
    },
    {
      "id": "prata",
      "cityName": "Prata"
    },
    {
      "id": "nova-ponte",
      "cityName": "Nova Ponte"
    },
    {
      "id": "resplendor",
      "cityName": "Resplendor"
    },
    {
      "id": "uberaba",
      "cityName": "Uberaba"
    },
    {
      "id": "tarumirim",
      "cityName": "Tarumirim"
    },
    {
      "id": "paraopeba",
      "cityName": "Paraopeba"
    },
    {
      "id": "sao-gotardo",
      "cityName": "São Gotardo"
    },
    {
      "id": "campina-verde",
      "cityName": "Campina Verde"
    },
    {
      "id": "ibia",
      "cityName": "Ibiá"
    },
    {
      "id": "dores-do-indaia",
      "cityName": "Dores do Indaiá"
    },
    {
      "id": "sete-lagoas",
      "cityName": "Sete Lagoas"
    },
    {
      "id": "coronel-fabriciano",
      "cityName": "Coronel Fabriciano"
    },
    {
      "id": "inhapim",
      "cityName": "Inhapim"
    },
    {
      "id": "ipatinga",
      "cityName": "Ipatinga"
    },
    {
      "id": "aimores",
      "cityName": "Aimorés"
    },
    {
      "id": "matozinhos",
      "cityName": "Matozinhos"
    },
    {
      "id": "ipanema",
      "cityName": "Ipanema"
    },
    {
      "id": "campos-altos",
      "cityName": "Campos Altos"
    },
    {
      "id": "itabira",
      "cityName": "Itabira"
    },
    {
      "id": "sacramento",
      "cityName": "Sacramento"
    },
    {
      "id": "araxa",
      "cityName": "Araxá"
    },
    {
      "id": "pitangui",
      "cityName": "Pitangui"
    },
    {
      "id": "pedro-leopoldo",
      "cityName": "Pedro Leopoldo"
    },
    {
      "id": "timoteo",
      "cityName": "Timóteo"
    },
    {
      "id": "lagoa-santa",
      "cityName": "Lagoa Santa"
    },
    {
      "id": "itapagipe",
      "cityName": "Itapagipe"
    },
    {
      "id": "esmeralda",
      "cityName": "Esmeraldas"
    },
    {
      "id": "iturama",
      "cityName": "Iturama"
    },
    {
      "id": "caratinga",
      "cityName": "Caratinga"
    },
    {
      "id": "luz",
      "cityName": "Luz"
    },
    {
      "id": "vespasiano",
      "cityName": "Vespasiano"
    },
    {
      "id": "santa-luzia",
      "cityName": "Santa Luzia"
    },
    {
      "id": "caete",
      "cityName": "Caeté"
    },
    {
      "id": "sabara",
      "cityName": "Sabará"
    },
    {
      "id": "ribeirao-das-neves",
      "cityName": "Ribeirão das Neves"
    },
    {
      "id": "conceicao-das-alagoas",
      "cityName": "Conceição das Alagoas"
    },
    {
      "id": "cocais",
      "cityName": "Coração de Jesus"
    },
    {
      "id": "joao-monlevade",
      "cityName": "João Monlevade"
    },
    {
      "id": "belo-horizonte",
      "cityName": "Belo Horizonte"
    },
    {
      "id": "nova-serrana",
      "cityName": "Nova Serrana"
    },
    {
      "id": "frutal",
      "cityName": "Frutal"
    },
    {
      "id": "contagem",
      "cityName": "Contagem"
    },
    {
      "id": "betim",
      "cityName": "Betim"
    },
    {
      "id": "raul-soares",
      "cityName": "Raul Soares"
    },
    {
      "id": "santo-antonio-do-monte",
      "cityName": "Santo Antônio do Monte"
    },
    {
      "id": "lagoa-da-prata",
      "cityName": "Lagoa da Prata"
    },
    {
      "id": "santa-barbara",
      "cityName": "Santa Bárbara"
    },
    {
      "id": "manhuacu",
      "cityName": "Manhuaçu"
    },
    {
      "id": "bambui",
      "cityName": "Bambuí"
    },
    {
      "id": "nova-lima",
      "cityName": "Nova Lima"
    },
    {
      "id": "divinopolis",
      "cityName": "Divinópolis"
    },
    {
      "id": "mateus-leme",
      "cityName": "Mateus Leme"
    },
    {
      "id": "itauna",
      "cityName": "Itaúna"
    },
    {
      "id": "ibirite",
      "cityName": "Ibirité"
    },
    {
      "id": "sao-roque-de-minas",
      "cityName": "São Roque de Minas"
    },
    {
      "id": "rio-casca",
      "cityName": "Rio Casca"
    },
    {
      "id": "igarape",
      "cityName": "Igarapé"
    },
    {
      "id": "alvinopolis",
      "cityName": "Alvinópolis"
    },
    {
      "id": "lajinha",
      "cityName": "Lajinha"
    },
    {
      "id": "brumadinho",
      "cityName": "Brumadinho"
    },
    {
      "id": "carmo-do-cajuru",
      "cityName": "Carmo do Cajuru"
    },
    {
      "id": "arcos",
      "cityName": "Arcos"
    },
    {
      "id": "abre-campo",
      "cityName": "Abre Campo"
    },
    {
      "id": "mariana",
      "cityName": "Mariana"
    },
    {
      "id": "itabirito",
      "cityName": "Itabirito"
    },
    {
      "id": "ouro-preto",
      "cityName": "Ouro Preto"
    },
    {
      "id": "bonfim",
      "cityName": "Bonfim"
    },
    {
      "id": "ibiraci",
      "cityName": "Ibiraci"
    },
    {
      "id": "claudio",
      "cityName": "Cláudio"
    },
    {
      "id": "ponte-nova",
      "cityName": "Ponte Nova"
    },
    {
      "id": "itapecerica",
      "cityName": "Itapecerica"
    },
    {
      "id": "itaguara",
      "cityName": "Itaguara"
    },
    {
      "id": "manhumirim",
      "cityName": "Manhumirim"
    },
    {
      "id": "formiga",
      "cityName": "Formiga"
    },
    {
      "id": "piumhi",
      "cityName": "Piumhi"
    },
    {
      "id": "jequeri",
      "cityName": "Jequeri"
    },
    {
      "id": "cassia",
      "cityName": "Cássia"
    },
    {
      "id": "carmopolis-de-minas",
      "cityName": "Carmoópolis de Minas"
    },
    {
      "id": "congonhas",
      "cityName": "Congonhas"
    },
    {
      "id": "ouro-branco",
      "cityName": "Ouro Branco"
    },
    {
      "id": "passos",
      "cityName": "Passos"
    },
    {
      "id": "conselheiro-lafaiete",
      "cityName": "Conselheiro Lafaiete"
    },
    {
      "id": "oliveira",
      "cityName": "Oliveira"
    },
    {
      "id": "carangola",
      "cityName": "Carangola"
    },
    {
      "id": "candeias",
      "cityName": "Candeias"
    },
    {
      "id": "vicosa",
      "cityName": "Viçosa"
    },
    {
      "id": "alpinopolis",
      "cityName": "Alpinópolis"
    },
    {
      "id": "pratapolis",
      "cityName": "Pratápolis"
    },
    {
      "id": "sao-sebastiao-do-paraiso",
      "cityName": "São Sebastião do Paraíso"
    },
    {
      "id": "carmo-do-rio-claro",
      "cityName": "Carmo do Rio Claro"
    },
    {
      "id": "campo-belo",
      "cityName": "Campo Belo"
    },
    {
      "id": "bom-sucesso",
      "cityName": "Bom Sucesso"
    },
    {
      "id": "boa-esperanca",
      "cityName": "Boa Esperança"
    },
    {
      "id": "carandai",
      "cityName": "Carandaí"
    },
    {
      "id": "visconde-do-rio-branco",
      "cityName": "Visconde do Rio Branco"
    },
    {
      "id": "muriae",
      "cityName": "Muriaé"
    },
    {
      "id": "perdoes",
      "cityName": "Perdões"
    },
    {
      "id": "nova-resende",
      "cityName": "Nova Resende"
    },
    {
      "id": "monte-santo-de-minas",
      "cityName": "Monte Santo de Minas"
    },
    {
      "id": "nepomuceno",
      "cityName": "Nepomuceno"
    },
    {
      "id": "sao-joao-del-rei",
      "cityName": "São João del Rei"
    },
    {
      "id": "barbacena",
      "cityName": "Barbacena"
    },
    {
      "id": "rio-pomba",
      "cityName": "Rio Pomba"
    },
    {
      "id": "lavras",
      "cityName": "Lavras"
    },
    {
      "id": "campos-gerais",
      "cityName": "Campos Gerais"
    },
    {
      "id": "barroso",
      "cityName": "Barroso"
    },
    {
      "id": "guaranesia",
      "cityName": "Guaranésia"
    },
    {
      "id": "alfenas",
      "cityName": "Alfenas"
    },
    {
      "id": "guaxupe",
      "cityName": "Guaxupé"
    },
    {
      "id": "cataguases",
      "cityName": "Cataguases"
    },
    {
      "id": "muzambinho",
      "cityName": "Muzambinho"
    },
    {
      "id": "areado",
      "cityName": "Areado"
    },
    {
      "id": "santos-dumont",
      "cityName": "Santos Dumont"
    },
    {
      "id": "cabo-verde",
      "cityName": "Cabo Verde"
    },
    {
      "id": "rio-novo",
      "cityName": "Rio Novo"
    },
    {
      "id": "leopoldina",
      "cityName": "Leopoldina"
    },
    {
      "id": "paraguacu",
      "cityName": "Paraguaçu"
    },
    {
      "id": "varginha",
      "cityName": "Varginha"
    },
    {
      "id": "sao-joao-nepomuceno",
      "cityName": "São João Nepomuceno"
    },
    {
      "id": "juiz-de-fora",
      "cityName": "Juiz de Fora"
    },
    {
      "id": "tres-coracoes",
      "cityName": "Três Corações"
    },
    {
      "id": "machado",
      "cityName": "Machado"
    },
    {
      "id": "andrelandia",
      "cityName": "Andrelândia"
    },
    {
      "id": "campestre",
      "cityName": "Campestre"
    },
    {
      "id": "botelhos",
      "cityName": "Botelhos"
    },
    {
      "id": "pirapetinga",
      "cityName": "Pirapetinga"
    },
    {
      "id": "cruzilia",
      "cityName": "Cruzília"
    },
    {
      "id": "lima-duarte",
      "cityName": "Lima Duarte"
    },
    {
      "id": "pocos-de-caldas",
      "cityName": "Poços de Caldas"
    },
    {
      "id": "bicas",
      "cityName": "Bicas"
    },
    {
      "id": "alem-paraiba",
      "cityName": "Além Paraíba"
    },
    {
      "id": "campanha",
      "cityName": "Campanha"
    },
    {
      "id": "poco-fundo",
      "cityName": "Poço Fundo"
    },
    {
      "id": "pirauba",
      "cityName": "Pirajuba"
    },
    {
      "id": "aiuruoca",
      "cityName": "Aiuruoca"
    },
    {
      "id": "mar-de-espanha",
      "cityName": "Mar de Espanha"
    },
    {
      "id": "caldas",
      "cityName": "Caldas"
    },
    {
      "id": "conceicao-do-rio-verde",
      "cityName": "Conceição do Rio Verde"
    },
    {
      "id": "sao-goncalo-do-sapucai",
      "cityName": "São Gonçalo do Sapucaí"
    },
    {
      "id": "cambuquira",
      "cityName": "Cambuquira"
    },
    {
      "id": "baependi",
      "cityName": "Baependi"
    },
    {
      "id": "santa-rita-de-caldas",
      "cityName": "Santa Rita de Caldas"
    },
    {
      "id": "caxambu",
      "cityName": "Caxambu"
    },
    {
      "id": "lambari",
      "cityName": "Lambari"
    },
    {
      "id": "andradas",
      "cityName": "Andradas"
    },
    {
      "id": "silvianopolis",
      "cityName": "Silvianópolis"
    },
    {
      "id": "latercia",
      "cityName": "Lavras"
    },
    {
      "id": "sao-lourenco",
      "cityName": "São Lourenço"
    },
    {
      "id": "pouso-alegre",
      "cityName": "Pouso Alegre"
    },
    {
      "id": "ouro-fino",
      "cityName": "Ouro Fino"
    },
    {
      "id": "borda-da-mata",
      "cityName": "Borda da Mata"
    },
    {
      "id": "santa-rita-do-sapucai",
      "cityName": "Santa Rita do Sapucaí"
    },
    {
      "id": "itamonte",
      "cityName": "Itamonte"
    },
    {
      "id": "jacutinga",
      "cityName": "Jacutinga"
    },
    {
      "id": "itanhandu",
      "cityName": "Itanhandu"
    },
    {
      "id": "cachoeira-de-minas",
      "cityName": "Cachoeira de Minas"
    },
    {
      "id": "passa-quatro",
      "cityName": "Passa Quatro"
    },
    {
      "id": "monte-siao",
      "cityName": "Monte Sião"
    },
    {
      "id": "itajuba",
      "cityName": "Itajubá"
    },
    {
      "id": "brasopolis",
      "cityName": "Brazópolis"
    },
    {
      "id": "bueno-brandao",
      "cityName": "Bueno Brandão"
    },
    {
      "id": "paraisopolis",
      "cityName": "Paraíso"
    },
    {
      "id": "cambui",
      "cityName": "Cambuí"
    },
    {
      "id": "camanducaia",
      "cityName": "Camanducaia"
    },
    {
      "id": "extrema",
      "cityName": "Extrema"
    },
    {
      "id": "bom-despacho",
      "cityName": "Bom Despacho"
    },
    {
      "id": "curvelo",
      "cityName": "Curvelo"
    },
    {
      "id": "uba",
      "cityName": "Ubá"
    }
  ];
});

Route.get("/exercise", () => {
  return "Sorry guys"
});

Route.get("/aboutme", () => {
  return {
    greeting: "Hi! I guess it's better talk about me in a json, sup? :p",
    aboutMe: "I call myself an digital highlander, i past last years walking alone here and doing nasty tech stuff on my house",
    email: "leonardociberxon@gmail.com",
    linkedin: "https://www.linkedin.com/in/leonardo-araujo-pimentel-26619972/",
    mobileNumber: "+5571988889706",
    reminder: "If you seeing this on your web browser, ya you doing right"
  };
});

Route.get("/posts", async () => {
  return await Database.table("blog_posts").select("*");
});

Route.get("/users", async () => {
  return await Database.table("users").select("*");
});

Route.post("/register/submit", "UserController.create");

Route.post("/login", async () => {
  return await console.log(body);
});
