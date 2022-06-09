import React, { useEffect, useState, useRef } from 'react';
import styles from './App.module.scss';
import Info from '../../components/Info';
import Button from '../../components/Button';
import Cv from '../../assets/Img/cv.pdf'
import Projects from '../../components/Projects';
function App() {
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

    const homeRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const projetosRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const contatoRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    function scrollToHome() {
      homeRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  function scrollToProjetos() {
    projetosRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    function scrollToContatos() {
      contatoRef.current.scrollIntoView({ behavior: 'smooth' })
    }  
  return (
    <>
      <header className={`${styles.header} ${header? styles.ativo : ''}`}>
      <div>
            <h1>Portfólio</h1>
            <nav>
                <ul>
                    <li><a onClick={scrollToHome}>home</a></li>
                    <li><a >projetos</a></li>
                </ul>
            </nav>
        </div>
      </header>
      <main className={styles.container}>
        <section ref={homeRef} id={styles.info}>
          <Info/>
          <div>
            <Button link={Cv}>Currículo</Button>
            <a className={styles.contato} onClick={scrollToContatos}><Button theme="white">Contato</Button></a>
          </div>
        </section>
        <section id={styles.projects}><Projects/></section>
      </main>
      <footer>bbbbbbb</footer>
    </>
  );
}

export default App;
