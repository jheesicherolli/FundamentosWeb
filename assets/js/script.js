/**Formas de se referenciar uma variável:
 * var = variável de escopo global, o escopo global permite que aquela variável seja acessado em todo o meu código
 * let = variável de escopo local, só poderá ser chamada dentro do escopo, não funcionará em outro local
 * const = variável de escopo global, ela é constante não muda seu valor (é a menos usada)
 */

/** FORMAS DE ACESSO AO DOM:
 * por Tag: getElementByTagName()
 * por Id: getElementById()
 * por Nome: getElementsByName()
 * por Classe: getElementsByClassName()
 * por Seletor: querySelector()
 * 
 * Case  Sensitive = reconhece letras maiúsculas e minúsculas
*/

/**VALIDAÇÕES: */
/*as variáveis não são tipadas, ou seja, não possuem um tipo, ex: string nome, no JS não teremos esse String*/
let nome = window.document.getElementById('nome')
/**para utilizar o input que está em contato, necessito referencia-lo aqui, através do id. 
 * Essa é uma das formas da formas de acessar o DOM
*/
let email = document.querySelector('#email') /**#por ser id, o selector é o Id */
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')


nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '100%'

function validaNome(){
     let txt = document.querySelector('#txtNome')
     if(nome.value.length < 3) {
        txt.innerHTML = 'Nome Inválido'
        txt.style.color = 'red'
     } else{
        txt.innerHTML = 'Nome Válido'
        txt.style.color = 'green'
        nomeOk = true
     }
}
/*function pode ter um nome atribuido ou não */

/**     if(nome.
 *      value = valor que tem dentro do nome
 *     .length = tamanho do nome) 
 *       {
 *          txt.innerHTML = 'Nome Inválido'
 *           estou colocando um valor na minha div
 * }
 */

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ) {
        txtEmail.innerHTML = 'Email Inválido'
        txtEmail.style.color = 'red'
    } else{
        txtEmail.innerHTML = 'Email Válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

/**if (email.value.indexOf('@') == -1 ){
         se dentro do meu indexOf não tiver o @

         1 significa que tem
        -1 significa que não tem
    } */

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else{
        txtAssunto.style.display = 'none'
        /**style.display = é como eu quero que um elemento apareça, no caso é none, ou seja não vai aparecer nada. */
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ('Formulário enviado com sucesso!')
    } else{
        alert ('Preencha o formulário corretamente antes de enviar')
    }
}

function mapaZoom() {
    mapa.style.width = '650px'
    mapa.style.height = '550px'
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}
