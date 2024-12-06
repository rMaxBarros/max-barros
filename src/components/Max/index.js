import SocialButton from '../SocialButton';
import TextsStart from '../TextsStart';
import './Max.css';

function Max(){
    return (
        <main>
            <div className="introduction">
                <TextsStart/>

                <div className='buttons'>
                    <SocialButton 
                        className="individual-button"
                        link="https://github.com/rMaxBarros"
                        target="_blank"
                        source="./images/buttons/github-black-button.svg" 
                        alt="Logo GitHub"/>
                    <SocialButton 
                        link=""
                        target="_blank"
                        source="./images/buttons/ig-black-button.svg" 
                        alt="Logo Instagram"/>
                    <SocialButton 
                        link="https://www.linkedin.com/in/max-barros/"
                        target="_blank"
                        source="./images/buttons/linkedin-black-button.svg" 
                        alt="Logo LinkedIn"/>
                </div>
            </div>

            <img className='photo-max' src="./images/max-photo.svg" alt="Foto de Max: Homem branco de cabelo preto, usa óculos e uma camiseta azul." />

        </main>
    )
}

export default Max
