
document.addEventListener("DOMContentLoaded", function () {
    // Slideshow automático

    const totalItems = 3;
    let currentItem = 1;


    setInterval(() => {
        document.getElementById(`item-${currentItem}`).checked = true;
        currentItem = currentItem === totalItems ? 1 : currentItem + 1;
    }, 3000); // Troca a cada 3 segundos

    function myFunction() {
        const menu = document.getElementById("myLinks");
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    }

    // Botões "Comprar Agora"
    const buttons = document.querySelectorAll(".card button");
    buttons.forEach(button => {
        button.addEventListener("click", () => {

            const numeroWhatsapp = "5531997268888";
            const mensagem = encodeURIComponent("Olá! Tenho interesse em produtos da Pitaya.");
            const linkWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${mensagem}`;
            window.location.href = linkWhatsapp;
        });
    });

    const btnCompreAgora = document.querySelector(".call button");
    if (btnCompreAgora) {
        btnCompreAgora.addEventListener("click", () => {
            const numeroWhatsapp = "5531997268888";
            const mensagem = encodeURIComponent("Olá! Gostaria de saber mais sobre os produtos da Pitaya.");
            const linkWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${mensagem}`;
            window.location.href = linkWhatsapp;
        });
    }
    var btn = document.querySelector("#back-to-top");
    btn.addEventListener("click", function () {
        window.scrollTo(0, 0);

        // Scroll suave ao topo
        backToTopButton.onclick = function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        document.addEventListener("DOMContentLoaded", function () {
            // FORMULÁRIO DE NEWSLETTER
            const form = document.querySelector("form");
            const nomeInput = form.querySelector('input[type="text"]');
            const emailInput = form.querySelector('input[type="email"]');
            const submitBtn = form.querySelector('input[type="submit"]');

            // Criar popup de sucesso
            const popup = document.createElement("div");
            popup.textContent = "Inscrição realizada com sucesso!";
            popup.style.position = "fixed";
            popup.style.top = "50%";
            popup.style.left = "50%";
            popup.style.transform = "translate(-50%, -50%)";
            popup.style.padding = "20px 30px";
            popup.style.background = "#28a745";
            popup.style.color = "white";
            popup.style.borderRadius = "10px";
            popup.style.display = "none";
            popup.style.zIndex = "9999";
            document.body.appendChild(popup);

            // Validação do formulário
            form.addEventListener("submit", function (e) {
                e.preventDefault();

                const nome = nomeInput.value.trim();
                const email = emailInput.value.trim();
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (nome === "" || email === "") {
                    alert("Por favor, preencha todos os campos.");
                    return;
                }

                if (!emailRegex.test(email)) {
                    alert("Por favor, introduza um e-mail válido.");
                    return;
                }

                popup.style.display = "block";
                setTimeout(() => {
                    popup.style.display = "none";
                }, 3000);

                nomeInput.value = "";
                emailInput.value = "";
            });

            // BOTÃO DO INSTAGRAM
            const instagramIcon = document.querySelector(".fa-instagram");
            if (instagramIcon) {
                instagramIcon.style.cursor = "pointer";
                instagramIcon.addEventListener("click", () => {
                    window.open("@pitaya.fitness.beach", "_blank");
                });
            }
        });

    });
})