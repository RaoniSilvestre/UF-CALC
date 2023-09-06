import { useState } from "react";

export function Calc2Unities(){
    const [dado1, setDado1] = useState(1.0);
    const [dado2, setDado2] = useState(1.0);


    function calcularMedia2(N1, N2) {
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
                alert(`Você tem problemas! \nNota necessária na recuperação: ${recNota}`);
            }
        }
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        calcularMedia2(dado1,dado2)
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    value={dado1}
                    onChange={(e) => setDado1(e.target.value)} // 2. e 3.
                    placeholder="Dado 1"
                />
                <input
                    value={dado2}
                    onChange={(e) => setDado2(e.target.value)} // 2. e 3.
                    placeholder="Dado 2"
                />
                <button type="submit">Enviar</button>
            </form>
        </>)
}