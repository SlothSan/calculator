import './DecimalButton.css'

const DecimalButton = (props) => {

    const handleDecimalClick = () => {
        if(props.displayValue.slice(-1) !== '.' && !props.decimalIsUsed)
        props.setDisplayValue(props.displayValue + '.')
        props.setDecimalIsUsed(true)
    }

    return (
        <button id={"decimal"} className={"decimal-button"} onClick={handleDecimalClick}>
            .
        </button>
    )
}

export default DecimalButton