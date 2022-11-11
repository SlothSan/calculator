import './EqualsButton.css'
import {parse} from "mathjs";

const EqualsButton = (props) => {

    const handleEqualsClick = () => {
        console.log(props.displayValue)
        const parsedData = parse(props.displayValue)
        const compiledData = parsedData.compile()
        const result = compiledData.evaluate()
        console.log(result)
        props.setRunningValue(String(props.runningValue + "=" + result))
        props.setDisplayValue(String(result))
    }

    return (
        <button id={"equals"} className={"equals-button"} onClick={handleEqualsClick}>
            =
        </button>
    )
}

export default EqualsButton