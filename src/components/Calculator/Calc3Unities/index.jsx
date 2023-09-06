import { Container, Nota } from "./styles";
import { useState } from "react";
import { calcularMedia3 } from "../../../features/CalcularNotas3";
export function Calc3Unities() {
    const [dado1, setDado1] = useState('');
    const [dado2, setDado2] = useState('');
    const [dado3, setDado3] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        calcularMedia3(dado1, dado2, dado3)
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
                    <Nota>
                    <input
                        value={dado3}
                        onChange={(e) => setDado3(e.target.value)} // 2. e 3.
                        placeholder="Nota 3"
                    />    
                    </Nota>
                    
                    <button type="submit">Enviar</button>
                </form>
            </Container>
        </>)
}

/*<form onSubmit={handleSubmit}>
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
        <input
            value={dado3}
            onChange={(e) => setDado3(e.target.value)} // 2. e 3.
            placeholder="Dado 3"
        />
        <button type="submit">Enviar</button>
    </form> */