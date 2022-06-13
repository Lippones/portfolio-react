import React, { useEffect, useState, useRef } from 'react';
import styles from './App.module.scss';
import Info from '../../components/Info';
import Button from '../../components/Button';
import Cv from '../../assets/Img/cv.pdf'
import Projects from '../../components/Projects';
import Footer from '../../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  const [header, setHeader]=useState(false);
  
    useEffect(function(){
      AOS.init({duration: 2000})
    },[])
    
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
                    <li><a onClick={scrollToProjetos}>projetos</a></li>
                </ul>
            </nav>
        </div>
      </header>
      <main className={styles.container}>
        <section ref={homeRef} className={styles.info}>
          <div data-aos="fade-right" className={styles.apresentacao}>
            <Info/>
            <div className={styles.buttons}>
              <Button link={Cv}>Currículo</Button>
              <a className={styles.contato} onClick={scrollToContatos}><Button theme="white">Contato</Button></a>
            </div>
          </div>
        </section>
        <section ref={projetosRef} className={styles.projects}>
          <h2>meus projetos</h2>
          <Projects/>
          </section>
      </main>
      <footer ref={contatoRef}>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
