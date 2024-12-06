import Cards from "../Cards"
import DefaultButton from "../DefaultButton"
import TitleDescription from "../TitleDescription"
import './Skills.css';

function Skills() {
    return (
        <>
            <div className="skills">
                
                <TitleDescription 
                    title="Habilidades"
                    description="Aqui estão algumas informações das minhas principais características como profissional."/>
                
                <div className="position-card">
                    <Cards 
                        source="./images/cards/cloud-design.svg" 
                        alt="Ícone de nuvem"
                        title="Design"
                        description="Desenvolvimento e design de interfaces e layouts. Domínio de Figma, HTML, CSS, JavaScript e React. Também possuo habilidades em bibliotecas como o Bootstrap e Tailwind."
                    />
                    <Cards 
                        source="./images/cards/lamp-criativity.svg" 
                        alt="Ícone de Lâmpada"
                        title="Criatividade"
                        description="Pensamento fora do habitual. Exploração de possibilidades e criação de novos caminhos, sempre visando o melhor desenvolvimento possível e a qualidade da entrega final."
                    />
                    <Cards 
                        source="./images/cards/island-goals.svg" 
                        alt="Ícone de Montanha"
                        title="Foco"
                        description="Determinação, persistência e resiliência são algumas das minhas principais qualidades. Possuo extremo foco em tudo que realizo e não desisto fácil."
                    />
                    <Cards 
                        source="./images/cards/computer-programming.svg" 
                        alt="Ícone de Computador"
                        title="Programação"
                        description="Domínio de desenvolvimento, análise e manutenção de sistemas em Python, Java, HTML, CSS, JavaScript e mais. Estou em constante aprendizado para melhorar minhas habilidades."
                    />
                </div>

                <div className="position-cv-button">
                    <DefaultButton 
                    className="cv-button button-default"
                    action="Baixar currículo"
                    href="./documents/max-barros-curriculo.pdf"
                    download="max-barros-curriculo.pdf"
                    />
                </div>
            </div>
        </>
    )
}

export default Skills
