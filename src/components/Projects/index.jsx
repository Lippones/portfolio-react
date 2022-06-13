import { useEffect, useState } from "react";
import styles from './Projects.module.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Projects(){
    const [repositories, setRepositories] = useState([]);

    useEffect(()=>{
        fetch('https://api.github.com/users/Lippones/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    },[])
    useEffect(function(){
        AOS.init({duration: 2000})
      },[])


    return(
           <>
               <div className={styles.container}>
                   <ul className={styles.list}>
                       {repositories.map(repository =>{
                                   return(
                                     <>
                                        {repository.has_pages && (
                                        <li data-aos="fade-up" className={styles.item} key={repository.id}>
                                                <a href={repository.html_url} target="_blank">
                                                   {repository.name}
                                                </a>
                                                <p>{repository.description}</p>
                                        </li>
                                        )}
                                     </>
                                   ) 
                                })}
                   </ul>
               </div>
           </>
    )
}