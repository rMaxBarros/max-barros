import './CardsProjects.css';

function CardsProjects (props) {
    return (
        <>
            <div className='cards-projects'>
                <img 
                    src={props.src}
                    alt={props.alt}
                />
            </div>
        </>
    )
}

export default CardsProjects
