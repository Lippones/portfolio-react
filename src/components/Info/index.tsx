import styles from './Info.module.scss';


export default function Info(){
    return(
        <section className={styles.paragrafo}>
            <h2>Meu nome é </h2>
            <p>Sou desenvolvedor Front-End júnior, nesse site você encontrara informações ao meu respeito, como meus conhecimentos, currículo e informações de contato.</p>
        </section>
    )
}