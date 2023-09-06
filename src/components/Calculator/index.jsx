
import { Calc2Unities } from "./Calc2Unities";
import { Calc3Unities } from "./Calc3Unities";

export function Calculator({ handleSetToggleRenderToUnitySelection, setUnity }) {
    var renderUnities;

    if (setUnity === false) {
        renderUnities = <Calc2Unities />
    } else if (setUnity === true) {
        renderUnities = <Calc3Unities />
    }

    
    return (
        <>  
            {renderUnities}
            <button onClick={handleSetToggleRenderToUnitySelection}>Voltar</button>
        </>
    )
}