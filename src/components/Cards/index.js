import './Cards.css';

function Cards (props) {
    return (
            <>
                <section className='position-card'>
                    <div className='cards'>
                        <img className='card-image' src={props.source} alt={props.alt} />
                        <h3>{props.title}</h3>
                        <p>{props.description}</p>
                    </div>
                </section>
            </>
    )
}

export default Cards
