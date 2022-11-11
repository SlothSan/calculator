import './DigitButton.css'

const DigitButton = (props) => {

    const handleDigitClick = () => {
        if(props.displayValue === '0') {
            props.setDisplayValue(String(props.buttonNumber))
        } else {
            props.setDisplayValue(String(props.displayValue + props.buttonNumber))
        }
    }

    return (
        <button id={props.buttonNumberString} className={"digit-button"} onClick={handleDigitClick}>
            {props.buttonNumber}
        </button>
    )
}

export default DigitButton