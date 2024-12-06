import './AboutMe.css';
import TitleDescription from "../TitleDescription";

function AboutMe () {
    return (
        <>
            <section className="about-me">
                <TitleDescription
                title="Sobre mim"
                description="Aqui está um pouco sobre mim para que você possa me conhecer melhor."
                />

                <div className="description-about-me">
                    <p>
                    Meu nome é Max, tenho 25 anos e moro em Florianópolis. Estou concluindo minha formação para ser um desenvolvedor full-stack e designer, atualmente estou na gradução de Análise e Desenvolvimento de Sistemas pela FIAP. Meu trabalho é focar no front-end, back-end, design, banco de dados e mais.
                    <br/><br/>
                    Atualmente, estou buscando oportunidades para me desenvolver profissionalmente, enriquecer meus conhecimentos e compartilhar conhecimento com outras pessoas.
                    Gosto muito de desenvolver soluções para problemas e desafiar os meus conhecimentos. Meu objetivo é sempre crescer, desenvolver novas habilidades e aprender mais.
                    <br/><br/>
                    Sou uma pessoa calma, com foco e persistência em meus objetivos.
                    Em meu tempo livre gosto de ler, desenvolver novas habilidades, fazer exercícios, ouvir música e experimentar novas coisas.
                    </p>
                </div>
        </section>
        </>
    )
}

export default AboutMe
