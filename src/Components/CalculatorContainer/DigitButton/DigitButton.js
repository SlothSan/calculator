import './DigitButton.css'

const DigitButton = (props) => {
    return (
        <button id={props.buttonNumberString} className={"digit-button"}>
            {props.buttonNumber}
        </button>
    )
}

export default DigitButton