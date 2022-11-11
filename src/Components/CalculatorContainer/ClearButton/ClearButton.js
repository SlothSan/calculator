import './ClearButton.css'

const ClearButton = (props) => {

    const handleClearClick = () => {

    }

    return (
        <button id={"clear"} className={"clear-button"} onClick={handleClearClick}>
            AC
        </button>
    )
}

export default ClearButton