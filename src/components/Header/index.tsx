import {useState, useEffect} from 'react'
import styles from'./Header.module.scss';
import {GiHamburgerMenu} from 'react-icons/gi'
import {Link} from 'react-router-dom';

interface Props{
    page: string;
}

export default function Header({page}:Props){
    const [header, setHeader]=useState(false);
    
    useEffect(function(){
        function scroll(){
            if(window.scrollY>10){
                setHeader(true);
            }else{
                setHeader(false);
            }
        }

        window.addEventListener('scroll', scroll )
    },[])
    return(
        <header className={`${styles.header} ${header? styles.ativo : ''}`}>
        <div>
            <h1>Portfólio</h1>
            <nav>
                <ul>
                    <li><Link id={`${page === 'home' ? styles.focus:''}`} to="#">Home</Link></li>
                    <li><a id={`${page === 'projetos' ? styles.focus :''}`} href="#">projetos</a></li>
                </ul>
            </nav>
        </div>
    </header>
    )
}