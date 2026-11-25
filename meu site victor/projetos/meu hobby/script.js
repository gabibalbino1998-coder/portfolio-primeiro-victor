const temaBtn = document.getElementById("temaBtn");

temaBtn.addEventListener("click", () => {

    document.body.classList.toggle("magia-ativa");

    if (document.body.classList.contains("magia-ativa")) {
        temaBtn.textContent = "✦";
    } else {
        temaBtn.textContent = "☾";
    }

});


document.querySelectorAll(".local").forEach((local) => {

    local.addEventListener("click", () => {

        alert(
            "Local selecionado: " +
            local.textContent.trim()
        );

    });

});

