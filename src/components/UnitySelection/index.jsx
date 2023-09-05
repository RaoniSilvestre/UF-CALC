import { useState } from "react";
import { Container, Buttons, Button } from "./styled";
export function UnitySelection({ handleSetToggleRenderToCalculator }) {


    return (
        <>
            <Container>
                <h3>Quantidade de unidades:</h3>
                <Buttons>
                    <Button>
                        <p>um butaum</p>
                        <button className="butaum" onClick={handleSetToggleRenderToCalculator}>2 Unidades</button>
                    </Button>
                    <Button>
                        <p>oto butaum</p>
                        <button className="butaum" onClick={handleSetToggleRenderToCalculator}>3 Unidades</button>
                    </Button>
                </Buttons>

            </Container>

        </>
    )
}