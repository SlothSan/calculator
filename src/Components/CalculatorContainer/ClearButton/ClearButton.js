import './ClearButton.css'

const ClearButton = (props) => {

    const handleClearClick = () => {
        props.setDisplayValue(0)
        props.setRunningValue(0)
        props.setLastOperator('')
        props.setDecimalIsUsed(false)
    }

    return (
        <button id={"clear"} className={"clear-button"} onClick={handleClearClick}>
            AC
        </button>
    )
}

export default ClearButton