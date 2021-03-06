import styles from './Info.module.scss';
import Typewriter from 'typewriter-effect';

export default function Info(){
    return(
        <section className={styles.paragrafo}>
            <h2>
                <Typewriter
                onInit={(typewriter)=>(
                    typewriter.typeString(`Meu nome é <span style="color: #4672fe">Filipe Vieira</span>`)
                    .changeDeleteSpeed(10)
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString(`Sou Desenvolvedor <span style="color: #4672fe">Front-end</span>`)
                    .pauseFor(1500)
                    .deleteAll()
                    .start()
                )}
                options={{
                    autoStart: true,
                    loop: true,
                }}
                />
            </h2>
            <div><p>Nesse site você encontrara informações ao meu respeito, como meus conhecimentos, currículo e informações de contato.Sou desenvolvedor Front-End junior, estou cursando Sistemas de Informação e estou sempre em busca de conhecimento e aprender novas tecnologias
</p></div>
        </section>
    )
}