import './EqualsButton.css'
import {evaluate, parse} from "mathjs";

const EqualsButton = (props) => {

    const handleEqualsClick = () => {
        console.log(props.displayValue)
        console.log(evaluate(props.displayValue))
        let result = evaluate(props.displayValue)
        props.setResult(String(result));
        props.setDisplayValue(String(result));
    }

    return (
        <button id={"equals"} className={"equals-button"} onClick={handleEqualsClick}>
            =
        </button>
    )
}

export default EqualsButton