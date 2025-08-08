function executarPush() {
  const array = ['🍎', '🍌'];
  array.push('🍇'); // Adiciona um elemento na lista
  const resultado = array;
  document.getElementById('resultado-push').textContent = resultado;
}

function executarPop() {
  const array = ['🍎', '🍌', '🍇'];
  array.pop();  // Remove o último elemento da lista
  const resultado = array;
  document.getElementById('resultado-pop').textContent = resultado;
}

function executarShift() {
  const array = ['🍎', '🍌', '🍇'];
  array.shift() // Remove o primeiro elemento de uma lista
  const resultado = array;
  document.getElementById('resultado-shift').textContent = resultado;
}

function executarUnshift() {
  const array = ['🍌', '🍇'];
  array.unshift('🍓'); // Adiciona um elemento no começo da lista. Funciona para posts.
  const resultado = array;
  document.getElementById('resultado-unshift').textContent = resultado;
}

function executarIncludes() {
  const array =  ['🍎', '🍌', '🍇'];
  const resultado = array.includes("🥝"); // Verifica se algo está incluso em outro algo.
  document.getElementById('resultado-includes').textContent = resultado;
}

function executarReverse() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.reverse(); // Inverte a ordem.
  document.getElementById('resultado-reverse').textContent = resultado;
}

function executarSort() {
  const array = [3, 1, 4, 2, 11];
  const array2 = ["Brasil", "Argentina", "Noruega", "Italia"];
  
  // Este vai ordenar. Normalmente de ordem alfabética/crescente.
  
  const resultado = array.sort((a, b) =>  b-a);  // Essa função deixa o léxico de números ordenado certinho.  
  document.getElementById('resultado-sort').textContent = resultado;
  const resultado2 = array2.sort().reverse();
  document.getElementById('resultado-sort2').textContent = resultado2;
}

function executarSlice() {
  const array = ['🍎', '🍌', '🍇', '🍓'];
  const resultado = array;
  document.getElementById('resultado-slice').textContent = resultado;
}

function executarSplice() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array;
  document.getElementById('resultado-splice').textContent = resultado;
}


function executarIndexOf() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array;
  document.getElementById('resultado-indexof').textContent = resultado;
}

function executarJoin() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array;
  document.getElementById('resultado-join').textContent = resultado;
}

/* Loops de array */

function executarForEach() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.forEach(function(getItem) {
    console.log(getItem)
  });
  document.getElementById('resultado-foreach').textContent = resultado;
}

function executarMap() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.map((pegaItem, index) => ` O item ${index} é ${pegaItem} ✅`);
  document.getElementById('resultado-map').textContent = resultado;
}

 function executarMapHTML() {
    const dispositivos = ['🎮', '🕹️', '💻'];
    const resultado = array.map(pegaItem => `
      <h1> Produto em promoção! </h1>
      <p>${pegaItem}</p>
      `);
    document.getElementById('resultado-map-html').innerHTML = resultado.join('<br>');
  }

function executarFilter() {
  const array = ['🍎', '🍌', '🍇', "🍎"];
  const resultado = array.filter(pegaItem => pegaItem === "🍎"); // Encontra todos os elementos definidos no código
  document.getElementById('resultado-filter').textContent = resultado;
}

function executarFind() {
  const array =  ['🍎', '🍌', '🍇', "🍌"];
  const resultado = array.find(pegaItem => pegaItem === "🍌"); // Vê se tem o item definido no código. Não vê quantos, vê somente se tem.
  document.getElementById('resultado-find').textContent = resultado;
}

function executarFindIndex() {
  const array =  ['🍎', '🍌', '🍇', "🍇"];
  const resultado = array.findIndex(pegaItem => pegaItem === "🍇"); // Pega o index do primeiro item encontrado de acordo com o código.
  document.getElementById('resultado-findIndex').textContent = resultado;
}

function executarReduce() {
  const array = [1, 2, 3, 4];
  const resultado = array.reduce((totalAcumulado, valorAtual) => {return totalAcumulado + valorAtual});
  document.getElementById('resultado-reduce').textContent = resultado;
}

function executarEvery() {
  const array = [10, 20, 30, 40];
  const resultado = 'Resultado da operação every';
  document.getElementById('resultado-every').textContent = resultado;
}

function executarSome() {
  const array = ['🍎', '🍌', '🥝'];
  const resultado = 'Resultado da operação some';
  document.getElementById('resultado-some').textContent = resultado;
}

/* Encadeamento */

function executarEncadeamento() {
  const jogos = ['Zelda', 'Mario', 'Elden Ring', 'Fortnite', 'Minecraft'];
  const jogosFiltrados = jogos.filter((jogo) => jogo.includes("e"));
  const resultado = 

  document.getElementById("resultado-encadeamento").textContent = resultado.join(', ') || 'Nenhum jogo encontrado';
}


