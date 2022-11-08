import './DigitButton.css'

const DigitButton = (props) => {

    const handleDigitClick = (event) => {
        event.preventDefault()
        event.stopPropagation()
        if(props.displayValue === 0) {
            props.setDisplayValue("" + props.buttonNumber)
            props.setRunningValue("" + props.buttonNumber)
        } else if (props.displayValue === "0" && props.buttonNumber === 0) {
            props.setDisplayValue("0")
            props.setRunningValue("0")
        } else {
            props.setDisplayValue(props.displayValue.toString() + props.buttonNumber.toString())
            props.setRunningValue(props.runningValue.toString() + props.buttonNumber.toString())
        }
    }

    return (
        <button id={props.buttonNumberString} className={"digit-button"} onClick={handleDigitClick}>
            {props.buttonNumber}
        </button>
    )
}

export default DigitButton