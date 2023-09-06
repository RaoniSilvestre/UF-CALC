import { useState } from "react";
import { Container,Nota } from "./styled";
import { calcularMedia2 } from "../../../features/CalcularNotas2";
export function Calc2Unities(){
    const [dado1, setDado1] = useState('');
    const [dado2, setDado2] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        calcularMedia2(dado1,dado2)
    };

    return (
        <>
            <Container> 
                <form onSubmit={handleSubmit}>
                    <Nota>
                        
                    <input
                        value={dado1}
                        onChange={(e) => setDado1(e.target.value)} // 2. e 3.
                        placeholder="Nota 1"
                    />
                    </Nota>
                    <Nota>
                    <input
                        value={dado2}
                        onChange={(e) => setDado2(e.target.value)} // 2. e 3.
                        placeholder="Nota 2"
                    />    
                    </Nota>
                    <button type="submit">Enviar</button>
                </form>
            </Container>
        </>)
}