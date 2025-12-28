const texto =
    "Eu não sei muito bem onde isso vai pode levar kk, mas sei que gosto de quando eu converso com você. Gosto de saber como foi seu dia, o que você anda fazendo, o que você gosta e o que não gosta. Gosto de saber dos seus sonhos e planos, e de compartilhar os meus também. Gosto de rir das suas piadas, mesmo quando são bobas, e de ouvir suas histórias, mesmo quando são longas. Gosto de sentir sua presença, mesmo que seja só por mensagem. Gosto de você, do jeito que você é, com todas as suas qualidades e defeitos. Gosto de você por ser você, e isso já é o suficiente para mim.";

let i = 0;

function abrir() {
    document.getElementById("tela-inicial").classList.add("fade");
    document.getElementById("conteudo").classList.add("mostrar");
    escrever();
}

function escrever() {
    if (i < texto.length) {
        document.getElementById("texto-digitado").innerHTML += texto.charAt(i);
        i++;
        setTimeout(escrever, 50);
    }
}
