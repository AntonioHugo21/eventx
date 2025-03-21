document.addEventListener("DOMContentLoaded", function () {
    // Carregar header
    const headerElement = document.querySelector("#header");
    console.log(headerElement);
    
    if (headerElement) {
        fetch("/partials/header.html") // Ajuste o caminho se necessário
            .then(response => response.text())
            .then(data => headerElement.innerHTML = data)
            .catch(error => console.error("Erro ao carregar o header:", error));
    }

    // Carregar footer
    const footerElement = document.querySelector("#footer");
    if (footerElement) {
        fetch("/partials/footer.html") // Ajuste o caminho se necessário
            .then(response => response.text())
            .then(data => footerElement.innerHTML = data)
            .catch(error => console.error("Erro ao carregar o footer:", error));
    }
});
