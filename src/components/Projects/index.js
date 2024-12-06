import CardsProjects from '../CardsProjects';
import DefaultButton from '../DefaultButton';
import TitleDescription from '../TitleDescription';
import './Projects.css';

function Projects () {
    return(
        <>
            <TitleDescription 
            title="Projetos"
            description="Aqui estão alguns dos projetos que já desenvolvi durante minha formação e projetos paralelos."
            />

            <section className='projects-cards'>
                <div className='project-1'>
                    <CardsProjects
                    src="./images/projects/blue-fishing.png"
                    alt="Telas do Aplicativo Blue fishing desenvolvido por Max Barros"
                    />
                    
                    <div className='container-button'>
                    <DefaultButton
                        action="Acessar Projeto"
                        className="project-button button-default"
                        target="_blank"
                        href="https://www.figma.com/design/d22R7bEJ3g2hjC4ScXoXAi/Global-Solution?node-id=0-1&t=qktWDUU7BoHqiET4-1"/>
                    </div>
                </div>

                <div className='project-2'>
                    <CardsProjects
                    src="./images/projects/telas-salao.png"
                    alt="Telas de Aplicativo para agendamento de Salão de beleza. Desenvolvido por Max Barros e Welinton Matos"
                    />
                    
                    <div className='container-button'>
                    <DefaultButton
                        action="Acessar Projeto"
                        target="_blank"
                        className="project-button button-default"
                        href="https://www.figma.com/design/HRbjXyMbbinJqFSzUai6Q9/Telas-de-Agendamento-Onilne-%7C-Belasis?node-id=0-1&t=Ap6FLPDkScsMgYMp-1"/>
                    </div>
                </div>

                <div className='project-3'>
                    <CardsProjects
                    src="./images/projects/fintech.png"
                    alt="Telas do Aplicativo Fintech desenvolvido por Max Barros."
                    />
                    
                    <div className='container-button'>
                    <DefaultButton
                        action="Acessar Projeto"
                        target="_blank"
                        className="project-button button-default"
                        href="https://www.figma.com/design/Xcd3VlQU39tmtEwWWSU1Rt/FINTECH-2.0?node-id=0-1&t=fKTPJ1YOIYTWH2Og-1"/>
                    </div>
                </div>

                <div className='project-4'>
                    <CardsProjects
                    src="./images/projects/portfolio-max-barros.png"
                    alt="Telas do protótipo deste portfólio."
                    />
                    
                    <div className='container-button'>
                    <DefaultButton
                        action="Acessar Projeto"
                        target="_blank"
                        className="project-button button-default"
                        href="https://www.figma.com/design/K3cIGkq2C1heTdqVkjA3TF/New-Portfolio?node-id=0-1&t=ItzyhD3mrsHk3jp6-1"/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects
