const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListenet("submit", (e) =>{
    e.preventDefault()

    const nome = frm.inNome.value //obtem o valor do form

    const nota1 = Number(frm.inNota1.value)
    const nota2 = Number(frm.inNota2.value)
    const media = (nota1 + nota2)/2
    resp1.innerText = `Média das notas ${media.toFixed(2)}`

    // criar as condições if e else

    if(media => 7){
        resp2.innerText = `Parabéns ${nome}! Você foi aprovado(a)`
        resp2.style.color = "orange"
    } else{
        resp2.innerText = `Ops${nome}... Você foi reprovado`
        resp2.style.color = "red"
    }


})