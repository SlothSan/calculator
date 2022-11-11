import './EqualsButton.css'
import {parse} from "mathjs";

const EqualsButton = (props) => {

    const handleEqualsClick = () => {
        const parsedData = parse(props.displayValue)
        const compiledData = parsedData.compile()
        const result = compiledData.evaluate()
        props.setRunningValue(props.runningValue + "=" + result)
        props.setLastOperator('')
        props.setDecimalIsUsed(false)
        props.setDisplayValue(result)
    }

    return (
        <button id={"equals"} className={"equals-button"} onClick={handleEqualsClick}>
            =
        </button>
    )
}

export default EqualsButton