
import { Container, Buttons, Button } from "./styled";
export function UnitySelection({ handleSetToggleRenderToCalculator, setUnityToTwo, setUnityToThree }) {


    return (
        <>
            <Container>
                <h3>Quantidade de unidades:</h3>
                <Buttons>
                    <Button>
                        <p>2 Unidades</p>
                        <button className="butaum" onClick={() => {
                            handleSetToggleRenderToCalculator();
                            setUnityToTwo()
                        }
                        }>Selecionar</button>
                    </Button>
                    <Button>
                        <p>3 Unidades</p>
                        <button className="butaum" onClick={() => {
                            handleSetToggleRenderToCalculator();
                            setUnityToThree()
                        }}>Selecionar</button>
                    </Button>
                </Buttons>

            </Container>

        </>
    )
}