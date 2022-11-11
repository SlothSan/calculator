import './OperatorButton.css'

const OperatorButton = (props) => {

    const handleOperatorClick = () => {
    }

    return (
        <button id={props.operatorType} className={"operator-button"} onClick={handleOperatorClick}>
            {props.operatorSymbol}
        </button>
    )
}

export default OperatorButton