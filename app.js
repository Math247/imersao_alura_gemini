function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    let resultados = ""
    if (campoPesquisa == ""){
        return
    }
    
    for (let dado of dados) {
        if (dado.titulo.includes(campoPesquisa)){
            resultados += ` 
            <div class="item-resultado">
                <h2>
                    <a href="${dado.saiba_mais}" target="_blank" rel="noopener noreferrer">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <ul class="descricao-meta">
                    <li> ${dado.formacao.jogadores[0]} </li>
                    <li> ${dado.formacao.jogadores[1]} </li>
                    <li> ${dado.formacao.jogadores[2]} </li>
                    <li> ${dado.formacao.jogadores[3]} </li>
                    <li> ${dado.formacao.jogadores[4]} </li>
                    <li> ${dado.formacao.jogadores[5]} </li>
                    <li> ${dado.formacao.jogadores[6]} </li>
                    <li> ${dado.formacao.jogadores[7]} </li> 
                    <li> ${dado.formacao.jogadores[8]} </li>
                    <li> ${dado.formacao.jogadores[9]} </li>
                    <li> ${dado.formacao.jogadores[10]} </li>
                    <li> ${dado.formacao.treinador} </li>
                </ul>
                <p class="descricao-meta">O Flamengo disputou ${dado.informacoes.jogos} jogos com saldo de gols de ${dado.informacoes.saldo_gols}. O artilheiro foi ${dado.informacoes.artilheiro}.</p>
            </div>
            `
        }
    }
 
    section.innerHTML = resultados;
}