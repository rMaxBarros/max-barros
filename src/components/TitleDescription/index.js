import './TitleDescription.css';

function TitleDescription(props) {
    return (
        <>
            <div className="title-description">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <hr/>
            </div>
        </>
    )
}

export default TitleDescription
