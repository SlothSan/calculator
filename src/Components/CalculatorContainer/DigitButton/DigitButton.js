import './DigitButton.css'

const DigitButton = (props) => {

    const handleDigitClick = (event) => {

    }

    return (
        <button id={props.buttonNumberString} className={"digit-button"} onClick={handleDigitClick}>
            {props.buttonNumber}
        </button>
    )
}

export default DigitButton