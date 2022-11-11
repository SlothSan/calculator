import './DigitButton.css'

const DigitButton = (props) => {

    const handleDigitClick = (event) => {
        event.preventDefault()
        if(props.displayValue === "0") {
            if (props.buttonNumber === 0) {
                props.setDisplayValue('0')
                props.setRunningValue('0')
            } else {
                props.setDisplayValue(String(props.buttonNumber));
                props.setRunningValue(String(props.buttonNumber));
            }
        } else {
            props.setDisplayValue(props.displayValue + String(props.buttonNumber))
            props.setRunningValue(props.runningValue + String(props.buttonNumber))
        }
    }

    return (
        <button id={props.buttonNumberString} className={"digit-button"} onClick={handleDigitClick}>
            {props.buttonNumber}
        </button>
    )
}

export default DigitButton