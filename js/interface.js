document.addEventListener('DOMContentLoaded', () => {
  // ação sera executada quando o documento for carregado

    let squares = document.querySelectorAll(".square");
    // metodo que retorna uma node list (está selecionando todas as classes .square)

    squares.forEach((square) => {
      // O método forEach() pegará cada square do QuerySelectorAll

        square.addEventListener('click', handleClick);
        // em cada square do .forEach, será adicionado o evento click e a função handleClick
    })
})

function handleClick(event){

    let square = event.target; // event.target = elemento que sofreu a ação/evento (no caso o .square/quadrado)
    let position = square.id; //position no arquivo game será igual ao quadrado do board + id do html

    if(handleMove(position)){ //a função handleMove quer dizer o ato de colocar um simbolo numa posição do board
        setTimeout(()=>{
          alert("O jogo acabou - O Vencedor foi " + playerTime);
        },10);
      }
    updateSquare(position);
}

function updateSquare(position){ 
  let square = document.getElementById(position.toString());
  let symbol = board[position];
  square.innerHTML = `<div class='${symbol}'></div>`

}