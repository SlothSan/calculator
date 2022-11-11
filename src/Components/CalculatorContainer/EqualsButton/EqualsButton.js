import './EqualsButton.css'
import {parse} from "mathjs";

const EqualsButton = (props) => {

    const handleEqualsClick = () => {
        let string = props.displayValue;
        let filtered = string.match(/(\*|\+|\/|-)?(\.|\-)?\d+/g).join('')
        const parsedData = parse(filtered)
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