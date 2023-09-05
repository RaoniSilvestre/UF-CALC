import { Calculator } from "../Calculator/index";
import { UnitySelection } from "../UnitySelection";
import { useState } from "react";

export function MainMenu() {
    var switchTela = false;
    var render;

    const [toggleRender, setToggleRender] = useState(false);

    function handleSetToggleRenderToUnitySelection() {
        setToggleRender(false);
    }

    function handleSetToggleRenderToCalculator() {
        setToggleRender(true);
        
        
    }
    if (toggleRender == false) {
        render = <UnitySelection 
        handleSetToggleRenderToCalculator={handleSetToggleRenderToCalculator}
        />;
    } else if (toggleRender == true) {
        render = <Calculator
        handleSetToggleRenderToUnitySelection={handleSetToggleRenderToUnitySelection}
        />;
    }
    return (
        <>
            <h1>CALCULADORA DA UFRN</h1>
            <hr></hr>
            {render}
        </>
    );
}
