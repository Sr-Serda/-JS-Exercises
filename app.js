//Manipulação dos elementos do DOM
var pEl;
var pElTabuada;
var inputElFatorial;
var inputElPeso;
var inputElAltura;
var inputElCotacao;
var inputElCotacaoDolar;
var inputElLargura;
var inputElAlturaRetangulo;
var inputElCirculo;
var inputElTabuada;

//fuções do botão de voltar
function voltarImc(){
    document.getElementById("btnVoltarImc").toggleAttribute("hidden");
    document.getElementById("btnCalcularImc").toggleAttribute("hidden");
    document.getElementById("inputElPeso").toggleAttribute("hidden");
    document.getElementById("inputElAltura").toggleAttribute("hidden");
    document.getElementById("btnMostrarFatorial").removeAttribute("hidden");
    document.getElementById("btnMostrarImc").removeAttribute("hidden");
    document.getElementById("btnMostrarCotacao").removeAttribute("hidden");
    document.getElementById("btnMostrarRetangulo").removeAttribute("hidden");
    document.getElementById("btnMostrarCirculo").removeAttribute("hidden");
    document.getElementById("btnMostrarTabuada").removeAttribute("hidden");
    pEl = document.getElementById("pEl");
    pEl.innerHTML = "";

}

function voltarFatorial(){
    document.getElementById("btnVoltarFatorial").toggleAttribute("hidden");
    document.getElementById("btnCalcular").toggleAttribute("hidden");
    document.getElementById("inputElFatorial").toggleAttribute("hidden");
    document.getElementById("btnMostrarFatorial").removeAttribute("hidden");
    document.getElementById("btnMostrarImc").removeAttribute("hidden");
    document.getElementById("btnMostrarCotacao").removeAttribute("hidden");
    document.getElementById("btnMostrarRetangulo").removeAttribute("hidden");
    document.getElementById("btnMostrarCirculo").removeAttribute("hidden");
    document.getElementById("btnMostrarTabuada").removeAttribute("hidden");
    pEl = document.getElementById("pEl");
    pEl.innerHTML = "";
    
}

function voltarCotacao(){
    document.getElementById("btnVoltarCotacao").toggleAttribute("hidden");
    document.getElementById("inputElCotacao").toggleAttribute("hidden");
    document.getElementById("inputElCotacaoDolar").toggleAttribute("hidden");
    document.getElementById("btnCalcularCotacao").toggleAttribute("hidden");
    document.getElementById("btnMostrarFatorial").removeAttribute("hidden");
    document.getElementById("btnMostrarImc").removeAttribute("hidden");
    document.getElementById("btnMostrarCotacao").removeAttribute("hidden");
    document.getElementById("btnMostrarRetangulo").removeAttribute("hidden");
    document.getElementById("btnMostrarCirculo").removeAttribute("hidden");
    document.getElementById("btnMostrarTabuada").removeAttribute("hidden");
    pEl = document.getElementById("pEl");
    pEl.innerHTML = ""
    
}

function voltarRetangulo(){
    document.getElementById("btnVoltarRetangulo").toggleAttribute("hidden");
    document.getElementById("inputElLargura").toggleAttribute("hidden");
    document.getElementById("inputElAltura").toggleAttribute("hidden");
    document.getElementById("btnCalcularRetangulo").toggleAttribute("hidden");
    document.getElementById("btnMostrarFatorial").removeAttribute("hidden");
    document.getElementById("btnMostrarImc").removeAttribute("hidden");
    document.getElementById("btnMostrarCotacao").removeAttribute("hidden");
    document.getElementById("btnMostrarRetangulo").removeAttribute("hidden");
    document.getElementById("btnMostrarCirculo").removeAttribute("hidden");
    document.getElementById("btnMostrarTabuada").removeAttribute("hidden");
    pEl = document.getElementById("pEl");
    pEl.innerHTML = ""
}

function voltarCirculo(){
    document.getElementById("btnVoltarCirculo").toggleAttribute("hidden");
    document.getElementById("inputElCirculo").toggleAttribute("hidden");
    document.getElementById("btnCalcularCirculo").toggleAttribute("hidden");
    document.getElementById("btnMostrarFatorial").removeAttribute("hidden");
    document.getElementById("btnMostrarImc").removeAttribute("hidden");
    document.getElementById("btnMostrarCotacao").removeAttribute("hidden");
    document.getElementById("btnMostrarRetangulo").removeAttribute("hidden");
    document.getElementById("btnMostrarCirculo").removeAttribute("hidden");
    document.getElementById("btnMostrarTabuada").removeAttribute("hidden");

    pEl = document.getElementById("pEl");
    pEl.innerHTML = ""
}

function voltarTabuada(){
    document.getElementById("btnVoltarTabuada").toggleAttribute("hidden");
    document.getElementById("inputElTabuada").toggleAttribute("hidden");
    document.getElementById("btnCalcularTabuada").toggleAttribute("hidden");
    document.getElementById("btnMostrarFatorial").removeAttribute("hidden");
    document.getElementById("btnMostrarImc").removeAttribute("hidden");
    document.getElementById("btnMostrarCotacao").removeAttribute("hidden");
    document.getElementById("btnMostrarRetangulo").removeAttribute("hidden");
    document.getElementById("btnMostrarCirculo").removeAttribute("hidden");
    document.getElementById("btnMostrarTabuada").removeAttribute("hidden");

    pElTabuada = document.getElementById("pElTabuada");
    pElTabuada.innerHTML = ""
}
//funções do botão de mostrar a tela
function mostrarImc(){
    document.getElementById("btnVoltarImc").removeAttribute("hidden");
    document.getElementById("btnCalcularImc").removeAttribute("hidden");
    document.getElementById("inputElPeso").removeAttribute("hidden");
    document.getElementById("inputElAltura").removeAttribute("hidden");
    document.getElementById("btnMostrarFatorial").toggleAttribute("hidden");
    document.getElementById("btnMostrarImc").toggleAttribute("hidden");
    document.getElementById("btnMostrarCotacao").toggleAttribute("hidden");
    document.getElementById("btnMostrarRetangulo").toggleAttribute("hidden");
    document.getElementById("btnMostrarCirculo").toggleAttribute("hidden");
    document.getElementById("btnMostrarTabuada").toggleAttribute("hidden");
}

function mostrarFatorial(){
    document.getElementById("btnVoltarFatorial").removeAttribute("hidden");
    document.getElementById("btnCalcular").removeAttribute("hidden");
    document.getElementById("inputElFatorial").removeAttribute("hidden");
    document.getElementById("btnMostrarFatorial").toggleAttribute("hidden");
    document.getElementById("btnMostrarImc").toggleAttribute("hidden");
    document.getElementById("btnMostrarCotacao").toggleAttribute("hidden");
    document.getElementById("btnMostrarRetangulo").toggleAttribute("hidden");
    document.getElementById("btnMostrarCirculo").toggleAttribute("hidden");
    document.getElementById("btnMostrarTabuada").toggleAttribute("hidden");
}

function mostrarCotacao(){
    document.getElementById("btnVoltarCotacao").removeAttribute("hidden");
    document.getElementById("inputElCotacao").removeAttribute("hidden");
    document.getElementById("inputElCotacaoDolar").removeAttribute("hidden");
    document.getElementById("btnCalcularCotacao").removeAttribute("hidden");
    document.getElementById("btnMostrarFatorial").toggleAttribute("hidden");
    document.getElementById("btnMostrarImc").toggleAttribute("hidden");
    document.getElementById("btnMostrarCotacao").toggleAttribute("hidden");
    document.getElementById("btnMostrarRetangulo").toggleAttribute("hidden");
    document.getElementById("btnMostrarCirculo").toggleAttribute("hidden");
    document.getElementById("btnMostrarTabuada").toggleAttribute("hidden");
}

function mostrarRetangulo(){
    document.getElementById("btnVoltarRetangulo").removeAttribute("hidden");
    document.getElementById("inputElLargura").removeAttribute("hidden");
    document.getElementById("inputElAltura").removeAttribute("hidden");
    document.getElementById("btnCalcularRetangulo").removeAttribute("hidden");
    document.getElementById("btnMostrarFatorial").toggleAttribute("hidden");
    document.getElementById("btnMostrarImc").toggleAttribute("hidden");
    document.getElementById("btnMostrarCotacao").toggleAttribute("hidden");
    document.getElementById("btnMostrarRetangulo").toggleAttribute("hidden");
    document.getElementById("btnMostrarCirculo").toggleAttribute("hidden");
    document.getElementById("btnMostrarTabuada").toggleAttribute("hidden");
}

function mostrarCirculo(){
    document.getElementById("btnVoltarCirculo").removeAttribute("hidden");
    document.getElementById("inputElCirculo").removeAttribute("hidden");
    document.getElementById("btnCalcularCirculo").removeAttribute("hidden");
    document.getElementById("btnMostrarFatorial").toggleAttribute("hidden");
    document.getElementById("btnMostrarImc").toggleAttribute("hidden");
    document.getElementById("btnMostrarCotacao").toggleAttribute("hidden");
    document.getElementById("btnMostrarRetangulo").toggleAttribute("hidden");
    document.getElementById("btnMostrarCirculo").toggleAttribute("hidden");
    document.getElementById("btnMostrarTabuada").toggleAttribute("hidden");
}

function mostrarTabuada(){
    document.getElementById("btnVoltarTabuada").removeAttribute("hidden");
    document.getElementById("inputElTabuada").removeAttribute("hidden");
    document.getElementById("btnCalcularTabuada").removeAttribute("hidden");
    document.getElementById("btnMostrarFatorial").toggleAttribute("hidden");
    document.getElementById("btnMostrarImc").toggleAttribute("hidden");
    document.getElementById("btnMostrarCotacao").toggleAttribute("hidden");
    document.getElementById("btnMostrarRetangulo").toggleAttribute("hidden");
    document.getElementById("btnMostrarCirculo").toggleAttribute("hidden");
    document.getElementById("btnMostrarTabuada").toggleAttribute("hidden");
}

//funções de cada "aba"
function calculoImc(peso, altura){
    inputElPeso = document.getElementById("inputElPeso");
    inputElAltura = document.getElementById("inputElAltura");
    peso = parseFloat(inputElPeso.value);
    altura = parseFloat(inputElAltura.value);
    
    var imc = peso/(altura * altura);
    var imcArredondado = parseFloat(imc.toFixed(2));
    if(!isNaN(imcArredondado)){
    pEl = document.getElementById("pEl");
    pEl.innerHTML = (`Com o seu peso de ${peso} e altura de ${altura} seu IMC é ${imcArredondado}`)
    limparImc()
    }else{
        alert("Por favor, insira um número válido.");
    }
}


function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }

    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }

    return fatorial;
}

var btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", function() {
    inputElFatorial = document.getElementById("inputElFatorial");
    var numero = parseFloat(inputElFatorial.value); // Converte para número

    if (!isNaN(numero)) {
        var resultado = calcularFatorial(numero);

        pEl = document.getElementById("pEl");
        pEl.innerHTML = `O fatorial de ${numero} é ${resultado}`;
    } else {
        // Tratar o caso em que o valor inserido não é um número válido
        alert("Por favor, insira um número válido.");
    }
    limparFatorial()
});

function calcularCotacao(valor, cotacao){
    inputElCotacao = document.getElementById("inputElCotacao");
    inputElCotacaoDolar = document.getElementById("inputElCotacaoDolar")
    valor = parseFloat(inputElCotacao.value);
    cotacao = parseFloat(inputElCotacaoDolar.value);
    valor = valor/cotacao;
    if(!isNaN(valor)){
    var valorArredondado = valor.toFixed(2)

    pEl = document.getElementById("pEl");
    pEl.innerHTML = `A cotação do Dólar para o Real é de ${cotacao}, e o resultado é ${valorArredondado}`
    }else{
        alert("Por favor, insira um número válido.")
    }
    limparCotacao()
}

function calcularRetangulo(largura, altura){
    inputElLargura = document.getElementById("inputElLargura");
    inputElAlturaRetangulo = document.getElementById("inputElAltura");
    largura = parseFloat(inputElLargura.value);
    altura = parseFloat(inputElAlturaRetangulo.value);

    if(!isNaN(largura, altura)){
    var areaRetangulo = largura * altura;
    var perimetroRetangulo = (largura * 2) + (altura * 2)

    pEl = document.getElementById("pEl");
    pEl.innerHTML = `Área: ${areaRetangulo} e Perímetro: ${perimetroRetangulo}`;
    }else{
        alert("Por favor, insira um número válido.");
    }
    limparRetangulo()
}

function calcularCirculo(raio){
    inputElCirculo = document.getElementById("inputElCirculo");
    raio = parseFloat(inputElCirculo.value);

    var perimetroCirculo = (2* 3.14) * raio;
    var areaCirculo = 3.14 * (raio * raio);
    if(!isNaN(perimetroCirculo)){
    pEl = document.getElementById("pEl");
    pEl.innerHTML = `Área: ${areaCirculo}cm e Perímetro: ${perimetroCirculo}cm<sup>2</sup>`;
    }else{
        alert("Por favor, insira um número válido.");
    }
    limparCirculo
}

function calcularTabuada() {
    var inputElTabuada = document.getElementById("inputElTabuada");
    var numeroTabuada = parseInt(inputElTabuada.value);
    var pElTabuada = document.getElementById("pElTabuada");
    var tabuada = ""; // Variável para acumular as linhas da tabuada
    if(!isNaN(numeroTabuada)){
    for (var i = 1; i <= 10; i++) {
        var resultadoTabuada = numeroTabuada * i;
        tabuada += `${numeroTabuada} X ${i} = ${resultadoTabuada}<br>`;
        console.log(`${numeroTabuada} X ${i} = ${resultadoTabuada}`);
    }

    pElTabuada.innerHTML = tabuada; // Atribui todas as linhas acumuladas ao elemento pElTabuada
    }else{
        alert("Por favor, insira um número válido."); 
    }
    limparCirculo();
}


function limparImc(){
    inputElPeso.value = "";
    inputElAltura.value = "";
}

function limparFatorial(){
    inputElFatorial.value = "";
}

function limparCotacao(){
    inputElCotacao.value = "";
    inputElCotacaoDolar.value = "";
}

function limparRetangulo(){
    inputElAlturaRetangulo.value = "";
    inputElLargura.value = "";
}

function limparCirculo(){
    inputElCirculo.value = "";
}

function limparTabuada(){
    inputElTabuada.value = "";
}