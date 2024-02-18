// Obtém os elementos do DOM
const consoleInput = document.getElementById('consoleInput');
const consoleOutput = document.getElementById('consoleOutput');
const criptografarBtn = document.querySelector('.btn1');
const descriptografarBtn = document.querySelector('.btn2');

// Adiciona event listeners aos botões
criptografarBtn.addEventListener('click', criptografarTexto);
descriptografarBtn.addEventListener('click', descriptografarTexto);

// Função para criptografar o texto
function criptografarTexto() {
    const texto = consoleInput.value.toLowerCase().replace(/[áéíóúâêîôûãõàèìòùäëïöü]/g, ''); // Remove acentos
    const textoCriptografado = btoa(texto); // Codifica para Base64


    // Exibir o resultado na saída do console
    exibirResultado("Texto criptografado: " + textoCriptografado);
    exibirBotaoCopiar(); // Chama a função para exibir o botão de cópia
}

// Função para descriptografar o texto
function descriptografarTexto() {
    const textoCriptografado = consoleInput.value;
    const textoDescriptografado = atob(textoCriptografado); // Decodifica de Base64

    // Exibir o resultado na saída do console
    exibirResultado("Texto descriptografado: " + textoDescriptografado);
    exibirBotaoCopiar(); // Chama a função para exibir o botão de cópia
}

// Função para exibir o resultado no console
function exibirResultado(resultado) {
    consoleOutput.innerHTML = `<h2>${resultado}</h2>`;
}


// Obtém os elementos do DOM
const copyButton = document.getElementById('copyButton'); // Elemento do botão de cópia

// Adiciona event listeners aos botões
copyButton.addEventListener('click', copiarTexto); // Adiciona evento de clique ao botão de cópia

// Função para copiar o texto
function copiarTexto() {
    // Seleciona o texto na área de saída
    consoleOutput.select();
    consoleOutput.setSelectionRange(0, 99999); // Para dispositivos móveis

    // Copia o texto selecionado
    document.execCommand("copy");

    // Alerta o usuário que o texto foi copiado
    alert("Texto copiado para a área de transferência!");
}

// Função para exibir o botão de cópia quando houver um resultado
function exibirBotaoCopiar() {
    const resultado = consoleOutput.textContent.trim(); // Obtém o texto do resultado sem espaços em branco
    if (resultado !== "Nenhuma mensagem encontrada.") {
        copyButton.classList.remove('hidden'); // Remove a classe 'hidden' para exibir o botão de cópia
    } else {
        copyButton.classList.add('hidden'); // Adiciona a classe 'hidden' para ocultar o botão de cópia
    }
}