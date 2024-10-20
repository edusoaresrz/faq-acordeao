const caixasPergunta = document.querySelectorAll('div.pergunta')
const caixasResposta = document.querySelectorAll('div.resposta')
const imagens = document.querySelectorAll('.icone-mais')

caixasPergunta.forEach((cxPergunta, index) => {
    cxPergunta.addEventListener('click', () => {
        const resposta = caixasResposta[index]
        if(resposta.style.display === 'none' || resposta.style.display === '') {
            resposta.style.display = 'flex'
            imagens[index].src = 'assets/images/icone-menos.svg'
            cxPergunta = index + 1
        } else {
            resposta.style.display = 'none'
            imagens[index].src = 'assets/images/icone-mais.svg'
            cxPergunta = index + 1
        }
    })
})