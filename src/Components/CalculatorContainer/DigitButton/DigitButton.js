import './DigitButton.css'

const DigitButton = (props) => {

    const handleDigitClick = (event) => {
        event.preventDefault()
        event.stopPropagation()
        props.setDisplayValue(props.displayValue + props.buttonNumber)
        props.setRunningValue(props.displayValue + props.buttonNumber)
    }

    return (
        <button id={props.buttonNumberString} className={"digit-button"} onClick={handleDigitClick}>
            {props.buttonNumber}
        </button>
    )
}

export default DigitButton