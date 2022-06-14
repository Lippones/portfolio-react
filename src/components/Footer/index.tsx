import styles from './Footer.module.scss'
import {MdLocationOn, MdEmail} from 'react-icons/md'
import {FaPhoneAlt} from 'react-icons/fa'
import {IoLogoWhatsapp, IoLogoLinkedin} from 'react-icons/io'
import {AiFillInstagram, AiFillGithub} from 'react-icons/ai'


export default function Footer(){
    return(
        <>
            <div className={styles.container}>
                <section className={styles.contato}>
                    <span>
                        <MdLocationOn className={styles.icons}/>
                        <p>Fernandes Tourinho, MG</p>
                    </span>
                    <span>
                        <FaPhoneAlt className={styles.icons}/>
                        <p>+55 33 99848-3690</p>
                    </span>
                    <span>
                        <div className={styles.sla}><MdEmail className={styles.icons}/></div>
                        <p>filipe68ft@hotmail.com</p>
                    </span>
                </section>
                <section className={styles.redes}>
                    <h3>Redes sociais</h3>
                    <p>Mais formas de contato a abaixo</p>
                    <ul>
                        <li><a href='https://api.whatsapp.com/send?1=pt_BR&phone=5533998483690' target="_blank" rel="noreferrer"><IoLogoWhatsapp className={styles.iconsRedes}/></a></li>
                        <li><a href='https://www.instagram.com/filipev.silva/' target="_blank" rel="noreferrer"><AiFillInstagram className={styles.iconsRedes}/></a></li>
                        <li><a href='https://www.linkedin.com/in/filipe-vieira-03199720b/' target="_blank" rel="noreferrer"><IoLogoLinkedin className={styles.iconsRedes}/></a></li>
                        <li><a href='https://github.com/Lippones' target="_blank" rel="noreferrer"><AiFillGithub className={styles.iconsRedes}/></a></li>
                    </ul>
                    <p>© 2022 Filipe Vieira da Silva</p>
                </section>
            </div>
        </>
    )
}