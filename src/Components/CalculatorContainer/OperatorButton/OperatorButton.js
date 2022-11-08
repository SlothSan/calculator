import './OperatorButton.css'

const OperatorButton = (props) => {
    return (
        <button id={props.operatorType} className={"operator-button"}>
            {props.operatorSymbol}
        </button>
    )
}

export default OperatorButton