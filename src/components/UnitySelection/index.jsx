import { useState } from "react";

export function UnitySelection({handleSetToggleRenderToCalculator}) {


    return(
        <>
        <h3>Quantidade de unidades:</h3>
        <button onClick={handleSetToggleRenderToCalculator}>2 Unidades</button>
        <button onClick={handleSetToggleRenderToCalculator}>3 Unidades</button>
        </>
    )
}