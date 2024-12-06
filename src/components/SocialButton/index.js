import './SocialButton.css'
function SocialButton(props){
    return (
        <>
            <div className="social-button">
                <a href={props.link}
                   target={props.target}>
                    <img
                    src={props.source} 
                    alt={props.alt} 
                    />
                </a>
            </div>
        </>
    )
} 

export default SocialButton
