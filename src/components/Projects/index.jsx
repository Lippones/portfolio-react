import { useEffect, useState } from "react";
import styles from './Projects.module.scss'

export default function Projects(){
    const [repositories, setRepositories] = useState([]);
    const items = [
        {width: "100%", itemToShow: 1}
    ]

    useEffect(()=>{
        fetch('https://api.github.com/users/Lippones/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    },[])


    return(
           <>
               <div className={styles.container}>
                   <ul className={styles.list}>
                       {repositories.map(repository =>{
                                   return(
                                     <>
                                        {repository.has_pages && (
                                        <li className={styles.item} key={repository.id}>
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