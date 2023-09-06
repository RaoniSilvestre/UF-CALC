export function calcularMedia3(N1, N2, N3) {
    var media = 5;
    N1 = parseFloat(N1)
    N2 = parseFloat(N2)
    N3 = parseFloat(N3)
    var mediaDoAluno = (N1 + N2 + N3) / 3
    if (N1 == null) {
        alert("Digite um valor válido.");
    } else {
        if (N1 < 3 || N2 < 3) {
            media = 7;
        } else if (N3 < 3) {
            media = 7;
        }
        console.log(mediaDoAluno, media)
        if (mediaDoAluno >= media) {
            alert("Você passou!");
        } else {
            let maiorValor = Math.max(N1, N2, N3)
            let segundoMaior;
            if (maiorValor === N1) {
                segundoMaior = Math.max(N2, N3)
            } else if (maiorValor === N2) {
                segundoMaior = Math.max(N1, N3)
            } else if (maiorValor === N3) {
                segundoMaior = Math.max(N1, N2)
            }   
            console.log(media * 3, maiorValor, segundoMaior)
            var recNota = (media * 3) - (maiorValor + segundoMaior)
            alert(`Você tem problemas! \nNota necessária na recuperação: ${recNota}`);
        }
    }
}

