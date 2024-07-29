function calcularSequencia() {
    // Obtém os valores dos inputs e converte para número
    const pity = Number(document.getElementById("pity").value);
    const gema = Number(document.getElementById("gema").value);
    // Inicializa uma string para armazenar o resultado
    let resultado = " ";

    // Verifica se os valores são válidos
    if (!isNaN(pity) && !isNaN(gema) && pity <= gema) {
        // Loop para gerar a sequência
        for (let i = pity; i <= gema; i++) {
            resultado += i + ", ";
        }
        // Exibe o resultado na div res
        document.getElementById("res").innerText = resultado;
    } else {
        // Exibe uma mensagem de erro se os valores forem inválidos
        document.getElementById("res").innerText = "Hello, world!.";
    }
}

// Adiciona um event listener ao botão "orar"
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("orar").addEventListener("click", calcularSequencia);
});
