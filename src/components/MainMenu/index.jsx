import { Calculator } from "../Calculator/index";
import { UnitySelection } from "../UnitySelection";
import { useState } from "react";
import { Container, Content } from "./styled";

export function MainMenu() {
    var render;

    const [toggleRender, setToggleRender] = useState(false);

    function handleSetToggleRenderToUnitySelection() {
        setToggleRender(false);
    }

    function handleSetToggleRenderToCalculator() {
        setToggleRender(true);
    }

    const [setUnity, handleSetUnity] = useState(false)

    function setUnityToTwo() {
        handleSetUnity(false);
    }

    function setUnityToThree() {
        handleSetUnity(true);
    }

    if (toggleRender === false) {
        render = <UnitySelection
            handleSetToggleRenderToCalculator={handleSetToggleRenderToCalculator}
            setUnityToTwo={setUnityToTwo}
            setUnityToThree={setUnityToThree}
        />;
    } else if (toggleRender === true) {
        render = <Calculator
            handleSetToggleRenderToUnitySelection={handleSetToggleRenderToUnitySelection}
            setUnity={setUnity}
        />;
    }
    return (
        <>
            <Container>
                <Content>
                    <h1>CALCULADORA DA UFRN</h1>
                    <hr></hr>
                    {render}
                </Content>
            </Container>

        </>
    );
}
