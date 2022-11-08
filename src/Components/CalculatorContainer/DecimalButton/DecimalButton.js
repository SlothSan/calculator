import './DecimalButton.css'

const DecimalButton = (props) => {

    const handleDecimalClick = () => {
        if(props.decimalIsUsed) {
            console.log('already used decimal! - you cant have multiple decimal numbers')
        } else {
            if(props.displayValue.length === 0) {
                props.setDisplayValue("0.")
                props.setRunningValue("0.")
                props.setDecimalIsUsed(true)
                } else {
                    props.setDisplayValue(props.displayValue + '.')
                    props.setRunningValue(props.runningValue + '.')
                    props.setDecimalIsUsed(true)
                }
            }
        }

    return (
        <button id={"decimal"} className={"decimal-button"} onClick={handleDecimalClick}>
            .
        </button>
    )
}

export default DecimalButton