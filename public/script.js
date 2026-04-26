const catalogo = [
  {
    id: 1,
    titulo: "Malcom X",
    ano: 1992,
    generos: ["biopic", "drama", "histórico"],
    nota: 7.7,
    tipo: "filme",
    assistido: false,
  },
  {
    id: 2,
    titulo: "Avatar",
    ano: 2009,
    generos: ["ficção", "ação", "aventura"],
    nota: 7.9,
    tipo: "filme",
    assistido: true,
  },
  {
    id: 3,
    titulo: "Estômago",
    ano: 2007,
    generos: ["comédia", "crime", "drama"],
    nota: 7.8,
    tipo: "filme",
    assistido: true,
  },
  {
    id: 4,
    titulo: "Breaking Bad",
    ano: 2008,
    generos: ["humor", "tragedia", "drama", "suspense"],
    nota: 9.5,
    tipo: "serie",
    assistido: false,
  },
  {
    id: 5,
    titulo: "Attack on Titan",
    ano: 2013,
    generos: ["anime", "ação", "fantasia", "horror", "drama"],
    nota: 9.1,
    tipo: "serie",
    assistido: true,
  },
  {
    id: 6,
    titulo: "Cidade de Deus",
    ano: 2002,
    generos: ["drama", "crime", "suspense"],
    nota: 8.6,
    tipo: "filme",
    assistido: true,
  },
];

// B.2
console.log(catalogo);
console.log(catalogo[0].titulo);
console.log(catalogo[catalogo.length - 1].ano);
if (catalogo[2].generos.length >= 2) {
  console.log(catalogo[2].generos[1]);
} else {
  console.log("Não existe");
}

//B.3

catalogo.forEach((item) => {
  console.log(`- [${item.tipo}] ${item.titulo} (${item.ano}) `);
});

//B.3.b

const titulosemcaixaalta = catalogo.map((item) => {
  const titulomaiusculo = item.titulo.toUpperCase();
  return titulomaiusculo;
});

console.log(titulosemcaixaalta);

//B.3-c

const naoassistidos = catalogo.filter((item) => {
  return item.assistido === false;
});

console.log(`Não assistidos: ${naoassistidos.length}`);

//B.3-d

const itemdestaque = catalogo.find((item) => {
  return item.nota >= 9;
});

if (itemdestaque) {
  console.log(
    `Itens destaques: ${itemdestaque.titulo} - nota: ${itemdestaque.nota}`,
  );
} else {
  console.log("Não foi encontrado");
}

// B.3-e

const somadasnotas = catalogo.reduce((i, item) => {
  return i + item.nota;
}, 0);

const mediageral = somadasnotas / catalogo.length;

console.log(mediageral.toFixed(2));

const assistidos = catalogo.filter((item) => {
  return item.assistido === true;
});

const somaassistidos = assistidos.reduce((i, item) => {
  return i + item.nota;
}, 0);

const mediaassistidos = somaassistidos / assistidos.length;

console.log(`Média assistidos: ${mediaassistidos.toFixed(2)}`);

const temitemantigo = catalogo.some((item) => {
  return item.ano < 2000;
});
console.log(`Items antigos(< 2000): ${temitemantigo}`);

const todostemgenero = catalogo.every((item) => {
  return item.generos.length >= 1;
});
console.log(`Todos têm pelo menos um gênero? ${todostemgenero}`);

const rank = [...catalogo].sort((a, b) => b.nota - a.nota);
const top3 = rank.slice(0, 3);

const output = document.getElementById("output");
output.innerHTML = `
<p> Total de itens : ${catalogo.length}</p>
<p> Média geral : ${mediageral.toFixed(2)}</p>
<p> Não assistidos: ${naoassistidos.length}</p>
<p> Filmes: ${catalogo.filter((item) => item.tipo === "filme").length}</p>
<p> Series: ${catalogo.filter((item) => item.tipo === "serie").length}</p>
<p> Top 3 Melhores Filmes</p>
<p>1º ${top3[0].titulo} - ${top3[0].nota}</p> 
<p>2º ${top3[1].titulo} - ${top3[1].nota}</p> 
<p>3º ${top3[2].titulo} - ${top3[2].nota}</p> 
`;
