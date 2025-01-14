import './Footer.css';
import SocialButton from '../SocialButton';

function Footer () {
    return (
        <>
            <footer>
                <h3>Valeu por chegar até aqui.</h3>
                <p>Não hesite em entrar em contato comigo!</p>
                
                <div className='buttons-footer'>
                    <SocialButton 
                        link="https://github.com/rMaxBarros"
                        target="_blank"
                        source="./images/buttons/github-white-button.svg" 
                        alt="Logo GitHub"/>
                    <SocialButton 
                        link="https://dribbble.com/MaxBarros"
                        target="_blank"
                        source="./images/buttons/dribbble-white-button.svg" 
                        alt="Logo Instagram"/>
                    <SocialButton 
                        link="https://www.linkedin.com/in/max-barros/"
                        target="_blank"
                        source="./images/buttons/linkedin-white-button.svg" 
                        alt="Logo LinkedIn"/>
                </div>

                <h4>© Max Barros</h4>
            </footer>
        </>
    )
}

export default Footer
