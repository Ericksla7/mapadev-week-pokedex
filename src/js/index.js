/*

vamos trabalhar com dois elementos:
1 listagem
2 cartao-pokemon

*/

//vamos criar duas variaveis no JS pra trabalhar com os elementos da tela

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')

listaSelecaoPokemons.forEach(pokemon =>{
    // * vamos trabalhar com um evento de click feito pelo usuario na listagem
    pokemon.addEventListener('click', () =>{

            // - remover a 'classe aberto' só do cartao-pokemon atual
            const cartaoPokemonAberto = document.querySelector('.aberto')
            cartaoPokemonAberto.classList.remove('aberto')

        // * ao clicar em um pokemon da listagem pegamos o id dele pra saber qual cartao mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value

            // - add a 'classe aberto' só no cartao-pokemon selecionado
            const idDoCartaoParaAbrir = 'cartao-' + idPokemonSelecionado
            const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoParaAbrir)
            cartaoPokemonParaAbrir.classList.add('aberto')

            // - remover a classe ativo da listagem que marca o pokemon selecionado
            const pokemonAtivoNaListagem = document.querySelector('.ativo')
            pokemonAtivoNaListagem.classList.remove('ativo')

            // - add a classe ativo no pokemon selecionado na listagem
            const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
            pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})




