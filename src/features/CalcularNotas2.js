export function calcularMedia2(N1, N2) {
    var media = 5;

    var mediaDoAluno = (parseFloat(N1) + parseFloat(N2))/2
    if (N1 == null) {
        alert("Digite um valor válido.");
    } else {
        if (N1 < 3 || N2 < 3) {
            media = 7;
        }
        console.log(mediaDoAluno,media)
        if (mediaDoAluno >= media) {
            alert("Você passou!");
        } else {
            let maiorValor = Math.max(N1,N2)
            let recNota = (media*2)-maiorValor
            if (recNota > 10) {
                alert('Reprovado! Precisa de mais de 10 para passar. :(')
            } else {
                alert(`Você tem problemas! \nNota necessária na recuperação: ${recNota}`);
            }
            
        }
    }
}