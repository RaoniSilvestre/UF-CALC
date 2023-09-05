export function Calculator({ handleSetToggleRenderToUnitySelection }) {


    function calcularMedia(N1, N2, N3) {
        var media = 5;
        var mediaDoAluno = (N1 + N2 + N3) / 3
        if (N1 == null) {
            alert("Digite um valor válido.");
        } else {
            if ((N1 < 3 || N2 < 3) || N3 < 3) {
                media = 7;
            }
            if (mediaDoAluno >= media) {
                alert("Você passou!");
            } else {
                alert("Você tem problemas!");
            }
        }
    }
    return (
        <>
            <p>Aqui vai a calculadora</p>
            <button onClick={handleSetToggleRenderToUnitySelection}>Voltar</button>
        </>
    )
}