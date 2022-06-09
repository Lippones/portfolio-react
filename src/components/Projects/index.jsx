import { useEffect, useState } from "react";

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
           <ul>
           {repositories.map(repository =>{
                       return(
                         <li>
                             <div>
                                 <h3>
                                    {repository.name}
                                 </h3>
                                 <p>{repository.description}</p>
                             </div>
                         </li>  
                       ) 
                    })}
           </ul>
        </>
    )
}