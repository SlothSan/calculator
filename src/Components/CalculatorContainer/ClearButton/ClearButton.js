import './ClearButton.css'

const ClearButton = (props) => {

    const handleClearClick = () => {
        props.setDisplayValue('')
        props.setRunningValue('')
    }

    return (
        <button id={"clear"} className={"clear-button"} onClick={handleClearClick}>
            AC
        </button>
    )
}

export default ClearButton